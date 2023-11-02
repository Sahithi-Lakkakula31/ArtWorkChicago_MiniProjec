import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent {
  searchText='';
  constructor(private router: Router) {}
  search()
  {
    console.log(`getting value of search ${this.searchText}`);
    this.router.navigateByUrl(`/search/${this.searchText}`);
  }
}
