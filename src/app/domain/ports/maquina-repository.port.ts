import { Observable } from 'rxjs';
import { IMaquina, IMaquinaParam, IMaquinaResponse } from '../models/maquina.model';

export interface MaquinaRepositoryPort {
  getMaquinas(): Observable<IMaquina[]>;
  addMaquina(data: IMaquinaParam): Observable<IMaquinaResponse>;
  getIdMaquina(id: string): Observable<IMaquinaResponse>;
  updateMaquina(id: string, maquina: IMaquina): Observable<void>;
  deleteMaquina(id: string): Observable<void>;
}
