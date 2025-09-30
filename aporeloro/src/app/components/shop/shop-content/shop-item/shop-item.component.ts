import { Component, inject, Input, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent {
  @Input() imageName: string = '';
  @Input() price: number = 0;
  @Input() originalPrice?: number;
  @Input() text: string = '';
  @Input() category: string = '';
  @Input() colors: string[] = [];
  @Input() isNew: boolean = false;
  @Input() type :string = 'png'


  imageUrl: string = ''

  private modalService = inject(NgbModal);
	closeResult = '';
  selectedColor: string = '';
  isInWishlist: boolean = false;

  toggleWishlist() {
    this.isInWishlist = !this.isInWishlist;
  }

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
