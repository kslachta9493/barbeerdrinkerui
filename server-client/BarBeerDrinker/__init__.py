from flask import Flask
from flask import jsonify
from flask import make_response
from flask import request
import json

from BarBeerDrinker import database

app = Flask(__name__)

@app.route('/api/bar', methods=["GET"])
def get_bars():
    return jsonify(database.get_bars())

@app.route('/api/bar-only', methods=["GET"])
def get_bars_only():
    return jsonify(database.get_bars_only())

@app.route('/api/bar-spender-10/<bar>', methods=["GET"])
def get_top_10_spenders(bar):
    return jsonify(database.get_top_10_spenders(bar))

@app.route('/api/bar/<name>', methods=["GET"])
def find_bar(name):
    try:
        if name is None:
            raise ValueError("Bar is not specified")
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with given name.", 404)
        return jsonify(bar)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/bar-top/<bar>&<week>')
def get_bar_top(bar, week):
    try:
        if bar is None:
            raise ValueError("Bar is not specified")
        if week is None:
            raise ValueError("Week is not specified")
        return jsonify(database.get_bar_top(bar, week))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beers_cheaper_than', methods=["POST"])
def find_beers_cheaper_than():
    body = json.loads(request.data)
    max_price = body['maxPrice']
    return jsonify(database.filter_beers(max_price))

@app.route('/api/menu', methods=["GET"])
def get_menu_all():
    try:
        return jsonify(database.get_bar_menu(None))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/menu/<name>', methods=["GET"])
def get_menu(name):
    try:
        if name is None:
            raise ValueError('Bar is not specified')
        bar = database.find_bar(name)
        if bar is None:
            return make_response('no bar found with this name', 404)
        return jsonify(database.get_bar_menu(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/menu-top/<beer>', methods=["GET"])
def get_menu_top(beer):
    try:
        if beer is None:
            raise ValueError('Beer is not specified')
        return jsonify(database.get_menu_top(beer))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/bar-cities', methods=["GET"])
def get_bar_cities():
    try:
        return jsonify(database.get_bar_cities())
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beer', methods=["GET"])
def get_beers():
    try:
        return jsonify(database.get_beers())
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beer_only', methods=["GET"])
def get_beers_only():
    try:
        return jsonify(database.get_beers_only())
    except Exception as e:
        return make_response(str(e), 500)
    
@app.route('/api/beer-manufacturer', methods=["GET"])
def get_beer_manufacturers():
    try:
        return jsonify(database.get_beer_manufacturer(None))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beer-manufacturer/<beer>', methods=["GET"])
def get_beer_manufacturers_making(beer):
    try:
        return jsonify(database.get_beer_manufacturer(beer))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/manf/<manf>', methods=["GET"])
def get_beers_of_manf(manf):
    try:
        return jsonify(database.get_beers_of_manf(manf))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/likes', methods=["GET"])
def get_likes():
    try:
        drinker = request.args.get("drinker")
        if drinker is None:
            raise ValueError("Drinker is not specified")
        return jsonify(database.get_likes(drinker))
    except Exception as e:
        return make_response(str(e), 500)


@app.route('/api/drinker', methods=["GET"])
def get_drinkers():
    try:
        return jsonify(database.get_drinkers())
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/drinker-only', methods=["GET"])
def get_drinkers_only():
    try:
        return jsonify(database.get_drinkers_only())
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/drinker/<name>', methods=["GET"])
def get_drinker(name):
    try:
        if name is None:
            raise ValueError("Drinker is not specified")
        return jsonify(database.get_drinker_info(name))
    except Exception as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/drinker-top/<beer>', methods=["GET"])
def get_drinker_top(beer):
    try:
        if beer is None:
            raise ValueError("Beer is not specified")
        return jsonify(database.get_drinker_top(beer))
    except Exception as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/bars-selling/<beer>', methods=["GET"])
def find_bars_selling(beer):
    try:
        if beer is None:
            raise ValueError("Beer is not specified")
        return jsonify(database.get_bars_selling(beer))
    except Exception as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)
@app.route('/api/frequents/<drinker>', methods=["GET"])
def get_frequents(drinker):
    try:
        if drinker is None:
            raise ValueError("Drinker is not specified")
        return jsonify(database.get_frequents(drinker))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/frequents-data', methods=["GET"])
def get_bar_frequent_counts():
    try:
        return jsonify(database.get_bar_frequent_counts())
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/trans/<name>', methods=["GET"])
def get_drinker_trans(name):
    try:
        return jsonify(database.get_drinker_trans(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/drinker-beer-most/<name>', methods=["GET"])
def get_drinker_beer_most(name):
    try:
        return jsonify(database.get_drinker_beer_most(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/drinker-bar-most/<name>', methods=["GET"])
def get_drinker_bar_most(name):
    try:
        return jsonify(database.get_drinker_bar_most(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/bartenders', methods=["GET"])
def get_bartenders():
    try:
        return jsonify(database.get_bartenders())
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/bartender/<name>', methods=["GET"])
def get_bartenders_shift(name):
    try:
        return jsonify(database.get_bartenders_shifts(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/bartender-sold/<name>', methods=["GET"])
def get_beer_sold_by(name):
    try:
        return jsonify(database.get_beers_sold_by(name))
    except Exception as e:
        return make_response(str(e), 500)

