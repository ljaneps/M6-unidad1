import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Usuario {
  nombre: string;
  apellido: string;
  telefono: string;
  fechaNacimiento: string;
}

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  usuario: Usuario = {
    nombre: '',
    apellido: '',
    telefono: '',
    fechaNacimiento: ''
  };

  usuarios: Usuario[] = [];

  agregarUsuario() {
    this.usuarios.push({ ...this.usuario });
    this.usuario = {
      nombre: '',
      apellido: '',
      telefono: '',
      fechaNacimiento: ''
    };
  }
}
