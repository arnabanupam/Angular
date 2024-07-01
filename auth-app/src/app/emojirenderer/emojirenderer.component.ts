import { Component } from '@angular/core';

@Component({
  selector: 'app-emojirenderer',
  templateUrl: './emojirenderer.component.html',
  styleUrl: './emojirenderer.component.css'
})
export class EmojirendererComponent {
  data: any;
  arrow: any;
  color: any;

  agInit(params: any): void {
    this.data = params.data;
    const price = parseFloat(params.data.price);
    const previousClose = parseFloat(params.data.previous_close);
    this.arrow = price > previousClose ? '&#x25B2;' : price < previousClose ? '&#x25BC;' : '';
    this.color = price > previousClose ? 'green' : price < previousClose ? 'red' : 'inherit';
  }

  refresh(params: any): boolean {
    this.data = params.data;
    const price = parseFloat(params.data.price);
    const previousClose = parseFloat(params.data.previous_close);
    this.arrow = price > previousClose ? '&#x25B2;' : price < previousClose ? '&#x25BC;' : '';
    this.color = price > previousClose ? 'green' : price < previousClose ? 'red' : 'inherit';
    return true;
  }
}
