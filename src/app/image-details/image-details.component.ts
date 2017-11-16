import { RouterModule, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {


  image:any;

  constructor(private imageService:ImageService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.image= this.imageService.getImage(+this.route.snapshot.params['id']);
  }

}
