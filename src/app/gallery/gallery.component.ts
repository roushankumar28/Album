import { Component, OnInit } from "@angular/core";
import { Album } from "./model/album";
import { Image } from "./model/image";
import { GalleryService } from "../gallery.service";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {
  photos: Album = new Album();
  images: Image[] = [];
  constructor(private service: GalleryService) {}

  ngOnInit() {
    this.getImages();
  }
  public onScroll() {
    this.getImages();
  }
  public getImages() {
    this.service.getImages().subscribe((photos: Album) => {
      this.photos = photos;
      this.photos.items.forEach(i => {
        i.description = i.description
          ? i.description.replace(/<img[^>]*>/g, "")
          : i.description;
      });
      this.images.push(...this.photos.items);
    });
  }
}
