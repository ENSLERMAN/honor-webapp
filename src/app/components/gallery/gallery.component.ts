import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(  
    private API: HttpService,
  ) { }

  id: number;
  albums: any = [];
  preview: any;

  async getAlbums(){
    this.albums = await this.API.getAlbums();
    this.albums = (isNullOrUndefined(await this.albums)) ? [] : await this.albums;
  }

  ngOnInit() {
    this.getAlbums().then(()=>{
      console.log(this.albums);
      for (let i = 0; i < this.albums.length; i++) {
        console.log(this.albums[i].images[0].url)
      }
    })
  }


}