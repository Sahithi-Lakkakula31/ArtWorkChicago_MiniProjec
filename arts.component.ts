import { Component,Input,ViewChild} from '@angular/core';
import {ArtsDataService} from 'src/app/services/arts-data.service';
import { MyModule } from 'src/material/material.module';
import { MatPaginator } from '@angular/material/paginator';
import { catchError, map, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent 
{
// @Input() artworks:artworks | undefined;
public artworks: any = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private artsdata:ArtsDataService)
  {
    artsdata.getdata().subscribe((data)=>
    {
      this.artworks=data.data;
      console.log(this.artworks);
    }
    );
  }
  ngOnInit() 
  {

  }
  getdata(pageNo: number, limit: number) {
  this.artsdata
    .getDataPage(pageNo, limit)
    .subscribe(data => {
      this.artworks = data.data;
      console.log(this.artworks);
    });
}
  ngAfterViewInit() {
    
  }
}
function observableOf(arg0: never[]): any {
  throw new Error('Function not implemented.');
}

