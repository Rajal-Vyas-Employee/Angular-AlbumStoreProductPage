import { Component, OnInit } from '@angular/core';
import {album} from '../album';
import {ProductService} from '../product.service';

albumInfo:Album;

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  constructor(private _productService:ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
