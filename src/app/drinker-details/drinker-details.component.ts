import { Component, OnInit } from '@angular/core';
import { DrinkerService } from '../drinker.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-drinker-details',
  templateUrl: './drinker-details.component.html',
  styleUrls: ['./drinker-details.component.css']
})
export class DrinkerDetailsComponent implements OnInit {
  drinkerName: string;
  drinkerDetails: string[];
  freqDetails: string[];
  constructor(
    private drinkerService: DrinkerService,
    private route: ActivatedRoute
  ) { 
    route.paramMap.subscribe((paramMap) => {
      this.drinkerName = paramMap.get("drinker");

      drinkerService.getDrinkerInfo(this.drinkerName).subscribe(
        data => {
          this.drinkerDetails = data;
        }
      )
      drinkerService.getFrequents(this.drinkerName).subscribe(
        data => {
          this.freqDetails = data;
        }
      )
    })
  }

  ngOnInit() {
  }

}
