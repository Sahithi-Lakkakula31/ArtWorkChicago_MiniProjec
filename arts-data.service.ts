import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ArtsDataService {

  constructor(private http:HttpClient) {
  }
  getdata()
  {
    return this.http.get<any>('https://api.artic.edu/api/v1/artworks');
  }
  getDataPage(currentpage:number,limit:number)
  {
    return this.http.get<any>(`https://api.artic.edu/api/v1/artworks?page=${currentpage}&limit=${limit}`);
  }
  getsingleData(id:number)
  {
    return this.http.get<any>(`https://api.artic.edu/api/v1/artworks/${id}`);
  }
  serachData(query:string)
  {
    console.log(query);
    return this.http.get<any>(`https://api.artic.edu/api/v1/artworks/search?q=${query}`);
  }
}