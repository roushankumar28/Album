import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { GalleryComponent } from "./gallery.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { GalleryService } from "../gallery.service";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";

describe("GalleryComponent", () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryComponent],
      imports: [InfiniteScrollModule, HttpClientModule, HttpClientJsonpModule],
      providers: [GalleryService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should return the images", () => {
    component.getImages();
    expect(component.photos).toBeTruthy();
  });
});
