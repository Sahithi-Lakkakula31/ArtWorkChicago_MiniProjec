import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ArtsDataService} from 'src/app/services/arts-data.service';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.css']
})
export class ViewdetailsComponent implements OnInit{
  userId!:number ;
  public sigleartdata:any;
  constructor(private ar:ActivatedRoute,private artsdata:ArtsDataService)
  {
    // injecting the ActivatedRoute service into the component and 
    // subscribing to the queryParams observable to get the ID parameter. 

    this.ar.params.subscribe(params => {
      this.userId = params['id'];
      console.log(this.userId);
    });

    artsdata.getsingleData(this.userId !).subscribe((data)=>
    {
      this.sigleartdata=data.data;
      console.log(this.sigleartdata);
    }
    );

  }
  ngOnInit() {
  }
}
