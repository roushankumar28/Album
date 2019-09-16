import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { GalleryService } from "./gallery.service";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        InfiniteScrollModule,
        HttpClientModule,
        HttpClientJsonpModule
      ],
      declarations: [AppComponent, GalleryComponent],
      providers: [GalleryService]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(GalleryComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
