import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css'],
})
export class ConvertidorComponent {
  // Variables
  cantidad: number;
  tengo: string = 'USD';
  quiero: string = 'EUR';
  total: number = 0;
  monedas: string[] = ['USD', 'EUR', 'LIBRA'];

  constructor() {}

  ngOnInit() {}

  convertir() {
    switch (this.tengo) {
      case 'USD':
        if (this.quiero == 'EUR') {
          this.total = this.cantidad * 0,94;
        } else if (this.quiero == 'LIBRA') {
          this.total = this.cantidad * 0.83;
        } else {
          this.total = this.cantidad;
        }
        break;
      case 'EUR':
        if (this.quiero == 'USD') {
          this.total = this.cantidad * 1.07;
        } else if (this.quiero == 'LIBRA') {
          this.total = this.cantidad * 0.88;
        } else {
          this.total = this.cantidad;
        }
        break;
      case 'LIBRA':
        if (this.quiero == 'USD') {
          this.total = this.cantidad * 1.21;
        } else if (this.quiero == 'EUR') {
          this.total = this.cantidad * 1.13;
        } else {
          this.total = this.cantidad;
        }
        break;
    }
    this.total=Number(this.total.toFixed(2));
  }
}
