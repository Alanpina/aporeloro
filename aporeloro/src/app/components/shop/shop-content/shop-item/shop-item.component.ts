import { Component, inject, Input, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InstagramAdvancedService } from './instagram-advanced.service';

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
  @Input() type: string = 'png';
  @Input() phrases: string[] = [];

  imageUrl: string = '';
  isContacting: boolean = false;

  private modalService = inject(NgbModal);
  private instagramService = inject(InstagramAdvancedService);

  closeResult = '';
  selectedColor: string = '';
  isInWishlist: boolean = false;

  ngOnInit() {
    this.imageUrl = `assets/images/${this.imageName}.${this.type}`;

    this.instagramService.setConfig({
      username: 'tu_usuario',
      userId: '100169051394627',
      defaultMessage: 'Hola, me interesa información sobre las playeras que vendes',
      openInNewTab: true
    });
  }

  openModal(content: TemplateRef<any>) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg',
      centered: true
    });
  }

  // MÉTODO PRINCIPAL - Con SweetAlert2
  async contactViaInstagram(): Promise<void> {
    this.isContacting = true;

    try {
      const customMessage = this.instagramService.generateProductMessage(
        this.text,
        this.price.toString(),
        this.phrases.length > 0 ? this.phrases : this.getDefaultPhrases()
      );

      await this.instagramService.openDirectMessage(customMessage);

    } catch (error) {
      console.error('Error al contactar por Instagram:', error);
    } finally {
      this.isContacting = false;
    }
  }

  // Método más rápido - Menos interacciones
  async contactViaInstagramSimple(): Promise<void> {
    this.isContacting = true;

    try {
      const customMessage = this.instagramService.generateProductMessage(
        this.text,
        this.price.toString(),
        this.phrases.length > 0 ? this.phrases : this.getDefaultPhrases()
      );

      await this.instagramService.openDirectMessageSimple(customMessage);

    } catch (error) {
      console.error('Error:', error);
    } finally {
      this.isContacting = false;
    }
  }

  // Método con opciones personalizadas
  async contactViaInstagramCustom(): Promise<void> {
    this.isContacting = true;

    try {
      const customMessage = this.instagramService.generateProductMessage(
        this.text,
        this.price.toString(),
        this.phrases.length > 0 ? this.phrases : this.getDefaultPhrases()
      );

      await this.instagramService.openDirectMessageWithOptions(customMessage, {
        showConfirmation: true,
        autoOpen: true,
        timer: 5000
      });

    } catch (error) {
      console.error('Error:', error);
    } finally {
      this.isContacting = false;
    }
  }

  // WhatsApp alternativo
  async contactViaWhatsApp(): Promise<void> {
    this.isContacting = true;

    try {
      const customMessage = this.instagramService.generateProductMessage(
        this.text,
        this.price.toString(),
        this.phrases.length > 0 ? this.phrases : this.getDefaultPhrases()
      );

      await this.instagramService.openWhatsApp(customMessage);

    } catch (error) {
      console.error('Error:', error);
    } finally {
      this.isContacting = false;
    }
  }

  getDefaultPhrases(): string[] {
    return [
      'Gotta make it rain',
      'You gotta make it rain',
      'You gotta, bud',
      'We gotta make it rain',
      'We gotta make it rain',
      'No doubt',
    ];
  }
}
