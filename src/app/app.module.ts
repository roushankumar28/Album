import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { GalleryService } from "./gallery.service";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, GalleryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
