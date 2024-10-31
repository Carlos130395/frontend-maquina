import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IMaquina } from '../../../domain/models/maquina.model';
import { MaquinaService } from '../../services/maquina/maquina.service';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],

  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.scss',
})
export class EditModalComponent {
  maquina: IMaquina = { id: '', descripcion: '', color: '', estado: '' };

  @Input() maquinasEditar: any;

  @Output() maquinaActualizada = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>();

  constructor(private maquinaService: MaquinaService) {}

  updateMaquina(): void {
    const maquinaId = this.maquinasEditar.id;
    this.maquinaService.updateMaquina(maquinaId, this.maquinasEditar).subscribe(
      (response) => {
        console.log('Maquina actualizada:', response);
        this.maquinaActualizada.emit(); // Emitir el evento para notificar la actualización
        this.closeModal.emit(); // Cerrar el modal después de actualizar
      },
      (error) => {
        console.error('Error al actualizar la máquina:', error);
      }
    );
  }
}
