import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IMaquina,
  IMaquinaParam,
} from '../../../domain/models/maquina.model';
import { MaquinaService } from '../../services/maquina/maquina.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  maquina: IMaquinaParam = { descripcion: '', color: '', estado: '' };

  @Output() maquinaAgregada = new EventEmitter<IMaquina>();
  @Output() closeModal = new EventEmitter<void>();

  constructor(private maquinaService: MaquinaService) {}

  addMaquina(): void {
    this.maquinaService.addMaquina(this.maquina).subscribe(
      (response: any) => {
        this.maquinaAgregada.emit(response);
        this.closeModal.emit();
        alert('Se agrego correctamente.');
      },
      (error) => {
        alert(
          'Ocurrió un error al procesar la solicitud. Inténtalo nuevamente más tarde.'
        );
      }
    );
  }
}
