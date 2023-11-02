import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-singleart',
  templateUrl: './singleart.component.html',
  styleUrls: ['./singleart.component.css']
})
export class SingleartComponent {
  @Input() artworkdata:any;
  isLiked = false;

  inWishlist(artwork:any){
    let wishlist:any[]=JSON.parse(localStorage.getItem('Whistlist') || '[]');
    let index = wishlist.findIndex(item=> item.id===artwork.id);
    return index >= 0;
  }

  like(artwork:any)
  {
    this.isLiked = !this.isLiked;
    // console.log(artwork);
    let wishlist: any[] = JSON.parse(localStorage.getItem('Whistlist') || '[]');
    let isAlreadyLiked = wishlist.findIndex(item => item.id === artwork.id) !== -1;
    
    if (!isAlreadyLiked) 
    {
      wishlist.push(artwork);
    } 
    else
    {
      window.alert("Item already presente in wishlist");
    }
    localStorage.setItem('Whistlist', JSON.stringify(wishlist));
  }
}
