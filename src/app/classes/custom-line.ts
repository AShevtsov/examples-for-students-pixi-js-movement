export class CustomLine extends PIXI.Graphics {
  startX = 10;
  startY = 30;
  endX = 150;
  endY = 150;


  constructor(geometry: PIXI.GraphicsGeometry, startX: number, startY: number, endX: number, endY: number) {
    super(geometry);
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;

    this.position.set(0, 0);
  }

  drawLine(): void {
    this.lineStyle(3, 0xaaaaaa)
      .moveTo(this.startX, this.startY)
      .lineTo(this.endX, this.endY);
  }

  shiftLine(offsetX: number, offsetY: number){
    this.startX += offsetX;
    this.endX += offsetX;
    this.startY += offsetY;
    this.endY += offsetY;
  }
}
