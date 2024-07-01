import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-emojicellrenderer',
  templateUrl: './emojicellrenderer.component.html',
  styleUrl: './emojicellrenderer.component.css'
})

export class EmojicellrendererComponent implements ICellRendererAngularComp {
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
