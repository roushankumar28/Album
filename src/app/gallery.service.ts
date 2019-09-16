import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class GalleryService {
  imagesUrl = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSONP_CALLBACK`;

  constructor(public http: HttpClient) {}
  public getImages() {
    return this.http.jsonp(this.imagesUrl, "JSONP_CALLBACK");
  }
}
