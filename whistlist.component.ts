import { Component,OnInit} from '@angular/core';
@Component({
  selector: 'app-whistlist',
  templateUrl: './whistlist.component.html',
  styleUrls: ['./whistlist.component.css']
})
export class WhistlistComponent implements OnInit
{
   
  wishlist: any[] = [];
  isempty:boolean=false;
  constructor()
  {

  }
  
  public ngOnInit(): void {
    const wishlistString = localStorage.getItem('Whistlist');
    if (wishlistString) {
      this.wishlist = JSON.parse(wishlistString);
    }
    console.log(this.wishlist);
    if(this.wishlist.length==0)
    {
      this.isempty=true;
    }
  }

  remove(id: number) {
    const index = this.wishlist.findIndex(item => item.id === id);
    if (index !== -1) {
      this.wishlist.splice(index, 1); // remove the element from the array
      localStorage.setItem('Whistlist', JSON.stringify(this.wishlist)); // update localStorage
    }
  }
}
