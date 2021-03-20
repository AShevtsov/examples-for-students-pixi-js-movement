import {Component, HostListener, OnInit, NgZone, ElementRef, OnDestroy} from '@angular/core';
import {AppSettings} from '../classes/app-settings';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {
  //public app: Application;

  constructor(private elementRef: ElementRef, private ngZone: NgZone) {}

  init() {
    /*this.ngZone.runOutsideAngular(() => {
      this.app = new Application();
    });
    this.elementRef.nativeElement.appendChild(this.app.view);
    this.resize();*/
  }

  ngOnInit(): void {
    this.init();
  }

  @HostListener('window:resize')
  public resize() {
    const width = this.elementRef.nativeElement.offsetWidth;
    const height = this.elementRef.nativeElement.offsetHeight;
    const viewportScale = 1 / AppSettings.DEVICE_PIXEL_RATIO;
   /* this.app.renderer.resize(width * AppSettings.DEVICE_PIXEL_RATIO, height * AppSettings.DEVICE_PIXEL_RATIO);
    this.app.view.style.transform = `scale(${viewportScale})`;
    this.app.view.style.transformOrigin = `top left`;*/
  }

  destroy() {
    /*this.app.destroy();*/
  }

  ngOnDestroy(): void {
    this.destroy();
  }


}
