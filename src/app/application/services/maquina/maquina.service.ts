import { Inject, Injectable } from '@angular/core';
import { MAQUINA_REPOSITORY_TOKEN } from '../../../domain/ports/maquina-repository.token';
import { MaquinaRepositoryPort } from '../../../domain/ports/maquina-repository.port';
import { Observable } from 'rxjs';
import {
  IMaquina,
  IMaquinaParam,
  IMaquinaResponse,
} from '../../../domain/models/maquina.model';

@Injectable({
  providedIn: 'root',
})
export class MaquinaService {
  constructor(
    @Inject(MAQUINA_REPOSITORY_TOKEN)
    private readonly maquinaRepository: MaquinaRepositoryPort
  ) {}

  getMaquinas(): Observable<IMaquina[]> {
    return this.maquinaRepository.getMaquinas();
  }

  addMaquina(data: IMaquinaParam): Observable<IMaquinaResponse> {
    return this.maquinaRepository.addMaquina(data);
  }

  getIdMaquina(id: string): Observable<IMaquinaResponse> {
    return this.maquinaRepository.getIdMaquina(id);
  }

  deleteMaquina(id: string): Observable<void> {
    return this.maquinaRepository.deleteMaquina(id);
  }

  updateMaquina(id: string, maquina: IMaquina): Observable<void> {
    return this.maquinaRepository.updateMaquina(id, maquina);
  }
}
