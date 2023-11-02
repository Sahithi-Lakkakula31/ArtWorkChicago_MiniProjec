import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ArtsDataService} from 'src/app/services/arts-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit
{
  query:string='';
  public artworks: any = [];
  constructor(private ar:ActivatedRoute,private artsdata:ArtsDataService)
  {
    // injecting the ActivatedRoute service into the component and 
    // subscribing to the queryParams observable to get the ID parameter. 

    this.ar.params.subscribe(params => {
      this.query = params['query'];
      console.log(this.query);
    });   

    artsdata.serachData(this.query).subscribe((data)=>
    {
      this.artworks=data.data;
      // console.log(this.artworks);
    }
    );

  }
  ngOnInit() {
  }
}
