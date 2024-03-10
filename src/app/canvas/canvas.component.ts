import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss',
})
export class CanvasComponent {
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  onCLick() {
    console.log(this.canvas);
    const context = this.canvas.nativeElement.getContext('2d');
    if (context) {
      context.fillStyle = 'red';
      context.fillRect(10, 10, 50, 50);

      context.fillStyle = 'rgba(0, 0, 200, 0.5)';
      context.fillRect(30, 30, 50, 50);
      context.font = '"80px serif';
      context.fillText('Hello World', 400, 400);
    }
  }
}
