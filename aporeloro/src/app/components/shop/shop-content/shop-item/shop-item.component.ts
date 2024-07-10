import { Component, inject, Input, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {


  @Input() imageName:string = ''
  @Input() type :string = 'png'
  @Input() text :string = ''
  @Input() price :string = ''
  imageUrl: string = ''

  private modalService = inject(NgbModal);
	closeResult = '';
  constructor() { }

  ngOnInit() {
    this.imageUrl = `assets/images/${this.imageName}.${this.type}`
  }

  openModal(content: TemplateRef<any>){
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				// this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
  }

}
