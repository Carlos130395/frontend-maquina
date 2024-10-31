import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MaquinaService } from '../../services/maquina/maquina.service';
import {
  IMaquina,
  IMaquinaResponse,
} from '../../../domain/models/maquina.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
  selector: 'app-maquina',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalComponent, EditModalComponent],
  templateUrl: './maquina.component.html',
  styleUrls: ['./maquina.component.scss'],
})
export default class MaquinaComponent implements OnInit {
  maquinas: IMaquina[] = [];
  maquinasEditar: IMaquina[] = [];
  maquinaToEdit!: string; // Para almacenar la máquina a editar
  searchTerm: string = '';
  showModal: boolean = false;
  showEditModal: boolean = false;

  constructor(private readonly maquinaService: MaquinaService) {}

  ngOnInit(): void {
    this.loadMaquinas();
  }

  loadMaquinas(): void {
    this.maquinaService.getMaquinas().subscribe((res: IMaquinaResponse) => {
      this.maquinas = res;
    });
  }

  get filteredMaquinas() {
    if (!this.maquinas) return [];

    return this.maquinas.filter((maquina) => {
      const matchesDescripcion = maquina.descripcion
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());
      const matchesEstado = maquina.estado
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());

      return matchesDescripcion || matchesEstado;
    });
  }

  addMaquina() {
    this.showModal = true;
  }

  editMaquina(id: string): void {
    this.showEditModal = true;

    this.maquinaService.getIdMaquina(id).subscribe((res: any) => {
      this.maquinasEditar = res;
    });
  }

  deleteMaquina(id: string): void {
    this.maquinaService.deleteMaquina(id).subscribe((res: any) => {
      this.loadMaquinas();
      alert('Se elimino correctamente.');
    });
  }

  onMaquinaAgregada(nuevaMaquina: IMaquina) {
    this.maquinas.push(nuevaMaquina);
  }

  onMaquinaEditada(editaMaquina: IMaquina) {
    this.maquinas.push(editaMaquina);
  }

  closeModal() {
    this.showModal = true;
  }

  closeEditarModal() {
    this.showModal = true;
  }
}
