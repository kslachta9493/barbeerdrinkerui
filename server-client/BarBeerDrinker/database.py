from sqlalchemy import create_engine
from sqlalchemy import sql

from BarBeerDrinker import config
engine = create_engine(config.database_uri)

def get_bars():
    with engine.connect() as con:
        rs = con.execute("SELECT * from barsN;")
        return [dict(row) for row in rs]
def get_bars_only():
        with engine.connect() as con:
                rs = con.execute("SELECT name from barsN ORDER BY name;")
                return [row['name'] for row in rs]

def get_top_10_spenders(bar):
        with engine.connect() as con:
                query = sql.text(
                "SELECT Patron, sum(total) as sum_total \
                FROM Transactions \
                WHERE bar = :bar \
                GROUP BY Patron \
                ORDER BY sum_total desc limit 10;"
                )
                rs = con.execute(query, bar = bar)
                results = [dict(row) for row in rs]
                for r in results:
                        r['sum_total'] = float(r['sum_total'])
                return results

def find_bar(name):
    with engine.connect() as con:
        query = sql.text(
            "SELECT * from barsN WHERE name = :name;"
        )
        rs = con.execute(query, name=name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def filter_beers(max_price):
    with engine.connect() as con:
        query = sql.text(
            "SELECT * FROM Sells4 WHERE Price < :max_price;"
        )
        rs = con.execute(query, max_price = max_price)
        results = [dict(row) for row in rs]
        for r in results:
            r['Price'] = float(r['Price'])
        return results

def get_bar_menu(bar_name):
    with engine.connect() as con:
        if bar_name is None:
                rs = con.execute('SELECT * from Sells4 WHERE Food is null')
                results = [dict(row) for row in rs]
                for i, _ in enumerate(results):
                    results[i]['Price'] = float(results[i]['Price'])
                return results
        query = sql.text('SELECT a.bar, a.beer, a.price, b.manf, coalesce(c.like_count, 0) as likes \
                FROM Sells4 AS a \
                JOIN Beers AS b \
                ON a.beer = b.name \
                LEFT OUTER JOIN (SELECT beer, count(*) as like_count FROM Likes GROUP BY beer) as c \
                ON a.beer = c.beer \
                WHERE a.bar = :bar; \
                ')
        rs = con.execute(query, bar = bar_name)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['price'] = float(results[i]['price'])
        return results

def get_menu_top(beer):
        with engine.connect() as con:
                query = sql.text('SELECT bar, count(*) as like_count \
                        FROM Transactions WHERE beer =:beer \
                        GROUP BY beer, bar \
                        ORDER BY like_count desc limit 10 \
                        ')
                rs = con.execute(query, beer = beer)
                results = [dict(row) for row in rs]
                return results

def get_bar_top(bar, week):
        with engine.connect() as con:
                query = sql.text('SELECT beer, count(*) as beer_count \
                        FROM Transactions WHERE bar = :bar \
                        AND beer is not null \
                        AND Weekend = :week \
                        GROUP BY beer, bar \
                        ORDER BY beer_count desc limit 10; \
                        ')
                rs = con.execute(query, bar = bar, week = week)
                results = [dict(row) for row in rs]
                return results

def get_bars_selling(beer):
    with engine.connect() as con:
        query = sql.text('SELECT a.Bar, a.Price, b.customers \
                FROM Sells4 AS a \
                JOIN (Select bar, count(*) AS customers FROM Frequents GROUP BY bar) as b \
                ON a.bar = b.bar \
                WHERE a.beer = :beer \
                ORDER BY a.price; \
                ')
        rs = con.execute(query, beer = beer)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['Price'] = float(results[i]['Price'])
        return results

def get_bar_frequent_counts():
    with engine.connect() as con:
        query = sql.text('SELECT bar, count(*) as frequentCount \
                FROM Frequents \
                GROUP BY bar; \
                ')
        rs = con.execute(query)
        results = [dict(row) for row in rs]
        return results

def get_bar_cities():
    with engine.connect() as con:
        rs = con.execute('SELECT DISTINCT State FROM barsN;')
        return [row['State'] for row in rs]

def get_beers():
    with engine.connect() as con:
        rs = con.execute('SELECT name, manf FROM Beers;')
        return [dict(row) for row in rs]

def get_beers_only():
    with engine.connect() as con:
        rs = con.execute('SELECT name from Beers;')
        return [row['name'] for row in rs]

def get_beer_manufacturer(beer):
    with engine.connect() as con:
        if beer is None:
            rs = con.execute('SELECT DISTINCT manf FROM Beers ORDER BY manf;')
            return [row['manf'] for row in rs]
        query = sql.text('SELECT manf FROM Beers WHERE name = :beer;')
        rs = con.execute(query, beer = beer)
        result = rs.first()
        if result is None:
            return None
        return result['manf']

def get_beers_of_manf(manf):
        with engine.connect() as con:
                query = sql.text('SELECT name FROM Beers where manf = :manf')
                rs = con.execute(query, manf = manf)
                return [dict(row) for row in rs]
                
def get_drinkers():
    with engine.connect() as con:
       rs = con.execute('SELECT * FROM Drinkers;')
       return [dict(row) for row in rs]

def get_drinkers_only():
    with engine.connect() as con:
       rs = con.execute('SELECT name FROM Drinkers;')
       return [row['name'] for row in rs]

def get_likes(drinker_name):
    with engine.connect as con:
        query = sql.text("SELECT beer FROM Likes WHERE drinker = :name;")     
        rs = con.execute(query, name = drinker_name)
        return [row['Beer'] for row in rs]   

def get_drinker_info(drinker_name):
    with engine.connect() as con:
        query = sql.text("SELECT * from Drinkers WHERE name = :name;")
        rs = con.execute(query, name=drinker_name)
        result = rs.first()
        if result is None:
            return None
        return dict(result)

def get_drinker_top(beer):
        with engine.connect() as con:
                query = sql.text('SELECT Patron, count(*) as like_count \
                        FROM Transactions \
                        where beer = :beer \
                        and beer is not null \
                        GROUP BY Patron \
                        ORDER BY like_count desc limit 10 \
                        ')
                rs = con.execute(query, beer = beer)
                results = [dict(row) for row in rs]
                return results

def get_frequents(drinker):
        with engine.connect() as con:
                query = sql.text('SELECT bar FROM Frequents where drinker = :drinker;')
                rs = con.execute(query, drinker = drinker)
                return [dict(row) for row in rs]

def get_drinker_trans(name):
        with engine.connect() as con:
                query = sql.text('SELECT * FROM Transactions \
                        where patron = :name ORDER BY bar, HTime, MTime')
                rs = con.execute(query, name = name)
                results = [dict(row) for row in rs]
                for i, _ in enumerate(results):
                        results[i]['Total'] = float(results[i]['Total'])
                        results[i]['Tip'] = float(results[i]['Tip'])
                return results

def get_drinker_beer_most(name):
        with engine.connect() as con:
                query = sql.text('SELECT Beer, count(Beer) as beer_count \
                        FROM Transactions \
                        WHERE Patron = :name \
                        AND Beer is not null \
                        GROUP BY Beer \
                        ORDER BY beer_count desc limit 10')
                rs = con.execute(query, name = name)
                results = [dict(row) for row in rs]
                return results

def get_drinker_bar_most(name):
        with engine.connect() as con:
                query = sql.text('SELECT Bar, sum(Total) as bar_total \
                        FROM Transactions \
                        WHERE Patron = :name \
                        GROUP BY Bar \
                        ORDER BY bar_total desc')
                rs = con.execute(query, name = name)
                results = [dict(row) for row in rs]
                for i, _ in enumerate(results):
                        results[i]['bar_total'] = float(results[i]['bar_total'])
                return results

def get_bartenders():
        with engine.connect() as con:
                rs = con.execute('SELECT DISTINCT bartender FROM Bartenderskevin ORDER BY bartender')
                return [row['bartender'] for row in rs]

def get_bartenders_shifts(name):
        with engine.connect() as con:
                query = sql.text('SELECT * FROM Bartenderskevin \
                        WHERE bartender = :name')
                rs = con.execute(query, name = name)
                results = [dict(row) for row in rs]
                return results

def get_beers_sold_by(name):
        with engine.connect() as con:
                query = sql.text('SELECT a.beer, count(a.beer) as beer_count \
                        FROM Transactions as a, Bartenderskevin as b \
                        WHERE a.bar = b.bar \
                        and b.shiftstart < a.HTime \
                        AND b.shiftend > a.HTime \
                        AND a.daynumber = b.daynumber \
                        AND beer is not null \
                        AND b.bartender = :name \
                        GROUP BY beer \
                        ')
                rs = con.execute(query, name = name)
                results = [dict(row) for row in rs]
                return results
