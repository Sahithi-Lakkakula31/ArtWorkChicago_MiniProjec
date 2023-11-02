import { Component,ViewChild } from '@angular/core';
// import {ArtsDataService} from './services/arts-data.service';
// import { MyModule } from 'src/material/material.module';
// import { MatPaginator } from '@angular/material/paginator';
// import { catchError, map, startWith, switchMap } from 'rxjs';

interface artworks
{
  artist_id: number, 
  artist_title: string
  // quantity:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MiniProject1';
  // arts:any;
  // public artworks: any = [];
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // constructor(private artsdata:ArtsDataService)
  // {
    // artsdata.getdata().subscribe((data)=>
    // {
    //   this.arts=data;
    //   console.log(this.arts);
    // }
    // );
  // }
  // ngOnInit() 
  // {

  // }
  // getdata(pageNo:number,limit:number)
  // { 
  // this.paginator.page
  // .pipe(
  //   startWith({}),
  //   switchMap(() => {
  //     return this.artsdata.getDataPage(
        // this.paginator.pageIndex,
        // this.paginator.pageSize
    //     pageNo,limit
    //   );
    // }),
    // map(data => {
    //   // Manipulate data as needed
    //   return data;
    // }),
    // catchError(() => {
    //   // Handle error if needed.
    //   return observableOf([]);
    // })
//   )
//   .subscribe(data => {
//     this.artworks = data.data;  
//     //.data is a property of the artworks api which contains data about all artworks
//     console.log(this.artworks);
//   });
//   }
//   ngAfterViewInit() {
    
//   }
// }
// function observableOf(arg0: never[]): any {
//   throw new Error('Function not implemented.');
}

