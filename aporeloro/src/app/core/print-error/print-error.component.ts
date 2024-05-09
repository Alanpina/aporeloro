import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-print-error',
  templateUrl: './print-error.component.html',
})
export class PrintErrorComponent {
  @Input("control")
    control: any;

}
