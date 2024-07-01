import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-actioncellrenderer',
  templateUrl: './actioncellrenderer.component.html',
  styleUrl: './actioncellrenderer.component.css'
})
export class ActioncellrendererComponent {
  data: any;
  params:any;

  agInit(params: ICellRendererParams<any, any, any>): void {
    this.data = params.value;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return false;
  }
  addToWishlist() {
    this.params.addToWishlist(this.params.data); // Call the addToWishlist method from params
  }

}
