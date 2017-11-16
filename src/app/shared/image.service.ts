import {Injectable} from '@angular/core';

@Injectable()
export class ImageService{
    visibleImages =[];
    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image=>image.id==id);
    } 

}

const IMAGES =[
    {"id":1, "category":"vegaterian", "caption":"home made fry pan falefal",
     "url":"https://haveatryblog.files.wordpress.com/2014/04/img_2607.jpg"},
         {"id":2, "category":"vegaterian", "caption":"home made fry pan falefal",
     "url":"https://haveatryblog.files.wordpress.com/2014/04/img_2607.jpg"},
         {"id":3, "category":"vegaterian", "caption":"home made fry pan falefal",
     "url":"https://haveatryblog.files.wordpress.com/2014/04/img_2607.jpg"},
         {"id":4, "category":"vegaterian", "caption":"home made fry pan falefal",
     "url":"https://haveatryblog.files.wordpress.com/2014/04/img_2607.jpg"},
         {"id":5, "category":"vegaterian", "caption":"home made fry pan falefal",
     "url":"https://haveatryblog.files.wordpress.com/2014/04/img_2607.jpg"},
         {"id":6, "category":"vegaterian", "caption":"home made fry pan falefal",
     "url":"https://haveatryblog.files.wordpress.com/2014/04/img_2607.jpg"},
         {"id":7, "category":"meats", "caption":"fried basa fish fillet",
     "url":"https://karasfavouriterecipes.files.wordpress.com/2013/01/0371.jpg"}
]