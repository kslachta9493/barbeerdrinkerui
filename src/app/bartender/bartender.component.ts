import { Component, OnInit } from '@angular/core';
import {BartenderService} from '../bartender.service'
import { SelectItem } from 'primeng/components/common/selectitem';
@Component({
  selector: 'app-bartender',
  templateUrl: './bartender.component.html',
  styleUrls: ['./bartender.component.css']
})
export class BartenderComponent implements OnInit {
  bartenderOptions: SelectItem[];
  bartenderInfo: string[];
  bartenderSold: string[];
  constructor(private bartenderService: BartenderService) {
    this.bartenderService.getBartenders().subscribe(
      data => {
        this.bartenderOptions = data.map(name => {
          return {
            label: name,
            value: name,
          }
        })
      }
    )
   }

  ngOnInit() {
  }
  filterBartender(name:string) {
    this.bartenderService.getBartenderShifts(name).subscribe(
      data => {
        this.bartenderInfo = data
      }
    )
    this.bartenderService.getBartendersSold(name).subscribe(
      data => {
        this.bartenderSold = data
      }
    )
  }
}
