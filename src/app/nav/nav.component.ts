import { Component, ViewChild, ElementRef, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WINDOW } from "../window.service";
import { OverlayContainer } from '@angular/cdk/overlay';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @ViewChild('main-nav') mainNav: ElementRef;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  public navIsTransparent: boolean = true;

  constructor(private breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    private overlay: OverlayContainer) { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
   let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number > window.innerHeight - 50) {
      this.navIsTransparent = false;
    } else {
      this.navIsTransparent = true;
    }
  }

  scroll(id) {
    let el = document.getElementById(id);
    el.scrollIntoView( {behavior: 'smooth', block: 'start'});
  }

  toggleTheme(): void {
    console.log("TOGGLE");
    console.log(this.overlay.getContainerElement().classList);
    if (this.overlay.getContainerElement().classList.contains("light-theme")) {
      this.overlay.getContainerElement().classList.remove("light-theme");
      this.overlay.getContainerElement().classList.add("dark-theme");
    } else if (this.overlay.getContainerElement().classList.contains("dark-theme")) {
      this.overlay.getContainerElement().classList.remove("dark-theme");
      this.overlay.getContainerElement().classList.add("light-theme");
    } else {
      this.overlay.getContainerElement().classList.add("dark-theme");
    }
    if (document.body.classList.contains("light-theme")) {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
    } else if (document.body.classList.contains("dark-theme")) {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    } else {
      this.overlay.getContainerElement().classList.add("dark-theme");
    }
  }
}

