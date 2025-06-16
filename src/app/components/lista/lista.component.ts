import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  nuevoProducto = '';
  productos: string[] = [];

  addProducto() {
    if (this.nuevoProducto.trim()) {
      this.productos.push(this.nuevoProducto);
      this.nuevoProducto = '';
    }
  }

  removeProducto(index: number) {
    this.productos.splice(index, 1);
  }
}
