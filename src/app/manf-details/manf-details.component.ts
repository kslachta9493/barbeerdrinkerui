import { Component, OnInit } from '@angular/core';
import { ManfService } from '../manf.service';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-manf-details',
  templateUrl: './manf-details.component.html',
  styleUrls: ['./manf-details.component.css']
})
export class ManfDetailsComponent implements OnInit {
  
  manfName: string;
  manfDetails: string[];
constructor(
  private manfService: ManfService,
  private route: ActivatedRoute
) { 
  route.paramMap.subscribe((paramMap) => {
      this.manfName = paramMap.get('manf');

      manfService.getManfBeers(this.manfName).subscribe(
        data => {
          this.manfDetails = data;
        }
      )
  });
}
  ngOnInit() {
  }

}

