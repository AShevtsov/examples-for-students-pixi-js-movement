import {Component, HostListener, OnInit, NgZone, ElementRef, OnDestroy} from '@angular/core';
import {AppSettings} from '../classes/app-settings';
import {Application} from 'pixi.js';
import {CustomLine} from '../classes/custom-line';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {
  public app: Application;

  constructor(private elementRef: ElementRef, private ngZone: NgZone) {
  }

  ngOnInit(): void {
    this.initPixiJsView();

    // add element to stage
    const myGraph = new CustomLine(new PIXI.GraphicsGeometry(), 10, 10, 150, 150);
    this.app.stage.addChild(myGraph);

    const ticker = new PIXI.Ticker();
    ticker.add(() => {
      myGraph.clear();

      myGraph.drawLine();
      myGraph.shiftLine(10, 10);

      this.app.renderer.render(this.app.stage);
    });
    ticker.start();
  }

  private initPixiJsView() {
    this.ngZone.runOutsideAngular(() => {
      this.app = new Application();
    });
    this.elementRef.nativeElement.appendChild(this.app.view);

    const width = 800;
    const height = 600;
    const viewportScale = 1 / AppSettings.DEVICE_PIXEL_RATIO;
    this.app.renderer.resize(width * AppSettings.DEVICE_PIXEL_RATIO, height * AppSettings.DEVICE_PIXEL_RATIO);
    this.app.view.style.transform = `scale(${viewportScale})`;
    this.app.view.style.transformOrigin = `top left`;
    this.app.view.style.width = '100%';
    this.app.view.style.height = '100%';
  }


  ngOnDestroy(): void {
    this.app.destroy();
  }

}
