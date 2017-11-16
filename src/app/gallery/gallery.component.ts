import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from '../shared/image.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit,OnChanges {
  
  title:String ='Photos';
  @Input() filterBy?: string ='all';
  visibleImages:any[] =[];
  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
   }

  ngOnInit() {
  }

  ngOnChanges(){
    this.visibleImages=this.imageService.getImages();
  }

}
