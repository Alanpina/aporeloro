import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

export interface InstagramConfig {
  username: string;
  userId: string;
  defaultMessage: string;
  openInNewTab: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class InstagramAdvancedService {

  private config: InstagramConfig = {
    username: 'tu_usuario',
    userId: '100169051394627',
    defaultMessage: 'Hola, me interesa información sobre las playeras que vendes',
    openInNewTab: true
  };

  setConfig(newConfig: Partial<InstagramConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  // MÉTODO PRINCIPAL - Con SweetAlert2
  async openDirectMessage(customMessage?: string): Promise<void> {
    const message = customMessage || this.config.defaultMessage;

    try {
      // 1. Copiar mensaje al portapapeles
      await this.copyToClipboard(message);

      // 2. Mostrar SweetAlert2 de confirmación
      await Swal.fire({
        icon: 'success',
        title: '¡Mensaje copiado!',
        text: 'El mensaje se ha copiado al portapapeles. Ahora vamos a Instagram para que lo pegues y envíes.',
        confirmButtonText: 'Abrir Instagram',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          // 3. Abrir Instagram Direct solo si el usuario confirma
          const directUrl = `https://www.instagram.com/direct/t/${this.config.userId}/`;
          this.openUrl(directUrl);
        }
      });

    } catch (error) {
      console.error('Error al copiar mensaje:', error);
      // Mostrar error con SweetAlert2
      await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo copiar el mensaje. Se abrirá Instagram directamente.',
        confirmButtonText: 'Continuar'
      });

      const directUrl = `https://www.instagram.com/direct/t/${this.config.userId}/`;
      this.openUrl(directUrl);
    }
  }

  // Método alternativo con notificación más simple
  async openDirectMessageSimple(customMessage?: string): Promise<void> {
    const message = customMessage || this.config.defaultMessage;

    try {
      await this.copyToClipboard(message);

      // SweetAlert2 más minimalista
      await Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Mensaje copiado',
        text: 'Abriendo Instagram...',
        showConfirmButton: false,
        timer: 2000
      });

      // Abrir Instagram después del toast
      setTimeout(() => {
        const directUrl = `https://www.instagram.com/direct/t/${this.config.userId}/`;
        this.openUrl(directUrl);
      }, 1500);

    } catch (error) {
      console.error('Error:', error);
      // Abrir Instagram directamente en caso de error
      const directUrl = `https://www.instagram.com/direct/t/${this.config.userId}/`;
      this.openUrl(directUrl);
    }
  }

  // Método con opciones personalizables
  async openDirectMessageWithOptions(customMessage?: string, options?: any): Promise<void> {
    const message = customMessage || this.config.defaultMessage;
    const defaultOptions = {
      showConfirmation: true,
      autoOpen: true,
      timer: 3000,
      ...options
    };

    try {
      await this.copyToClipboard(message);

      if (defaultOptions.showConfirmation) {
        await Swal.fire({
          icon: 'success',
          title: '¡Listo para enviar!',
          html: `
            <p>El mensaje se ha copiado al portapapeles:</p>
            <div style="background: #f8f9fa; padding: 10px; border-radius: 5px; margin: 10px 0;">
              <em>"${message}"</em>
            </div>
            <p>Se abrirá Instagram automáticamente en <strong>3 segundos</strong>...</p>
          `,
          showConfirmButton: true,
          confirmButtonText: 'Abrir Ahora',
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          timer: defaultOptions.timer,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          }
        }).then((result) => {
          if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
            const directUrl = `https://www.instagram.com/direct/t/${this.config.userId}/`;
            this.openUrl(directUrl);
          }
        });
      } else {
        // Abrir directamente sin confirmación
        const directUrl = `https://www.instagram.com/direct/t/${this.config.userId}/`;
        this.openUrl(directUrl);
      }

    } catch (error) {
      console.error('Error:', error);
      await this.showErrorAlert();
    }
  }

  // Generar mensaje del producto
  generateProductMessage(productName: string, price: string, phrases: string[]): string {
    const phrasesText = phrases.slice(0, 3).join(', ');
    return `¡Hola! 👋 Me interesa la playera "${productName}" de $${price}.

Características: ${phrasesText}

¿Podrías darme más información sobre:
• Tallas disponibles
• Colores
• Tiempos de entrega
• Formas de pago?

¡Gracias! 😊`;
  }

  // WhatsApp alternativo
  async openWhatsApp(customMessage?: string): Promise<void> {
    const message = customMessage || this.config.defaultMessage;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/?text=${encodedMessage}`;

    await Swal.fire({
      icon: 'info',
      title: 'Redirigiendo a WhatsApp',
      text: 'Se abrirá WhatsApp con el mensaje predefinido.',
      showConfirmButton: false,
      timer: 1500
    });

    this.openUrl(url);
  }

  // Métodos privados
  private openUrl(url: string): void {
    if (this.config.openInNewTab) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = url;
    }
  }

  private async copyToClipboard(text: string): Promise<void> {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      return new Promise((resolve, reject) => {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();

        try {
          document.execCommand('copy');
          resolve();
        } catch (err) {
          reject(err);
        } finally {
          document.body.removeChild(textArea);
        }
      });
    }
  }

  private async showErrorAlert(): Promise<void> {
    await Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No se pudo copiar el mensaje. Por favor, copia manualmente el texto.',
      confirmButtonText: 'Entendido'
    });
  }
}
