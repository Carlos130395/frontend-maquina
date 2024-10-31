import { Injectable } from '@angular/core';
import { MaquinaRepositoryPort } from '../../../domain/ports/maquina-repository.port';
import { environment } from '../../../../environments/environment';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ERROR_MESSAGES } from '../../../shared/constant/error-messages.constants';
import {
  IMaquina,
  IMaquinaParam,
  IMaquinaResponse,
} from '../../../domain/models/maquina.model';

@Injectable({
  providedIn: 'root',
})
export class MaquinaHttpRepositoryService implements MaquinaRepositoryPort {
  private readonly baseUrl: string = environment.apiUrl;
  private readonly retryCount: number = 2;

  constructor(private readonly _httpClient: HttpClient) {}

  getMaquinas(): Observable<IMaquina[]> {
    const url = `${this.baseUrl}`;
    return this._httpClient
      .get<IMaquina[]>(url)
      .pipe(retry(this.retryCount), catchError(this.handleError));
  }

  addMaquina(data: IMaquinaParam): Observable<IMaquinaResponse> {
    const url = `${this.baseUrl}`;
    return this._httpClient
      .post<IMaquinaResponse>(url, data)
      .pipe(retry(this.retryCount), catchError(this.handleError));
  }

  getIdMaquina(id: string): Observable<IMaquinaResponse> {
    const url = `${this.baseUrl}/${id}`;
    return this._httpClient
      .get<IMaquinaResponse>(url)
      .pipe(retry(this.retryCount), catchError(this.handleError));
  }

  deleteMaquina(id: string): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this._httpClient
      .delete<void>(url)
      .pipe(retry(this.retryCount), catchError(this.handleError));
  }

  updateMaquina(id: string, maquina: IMaquina): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this._httpClient
      .put<void>(url, maquina)
      .pipe(retry(this.retryCount), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    return throwError(() => new Error(ERROR_MESSAGES.GENERAL_ERROR));
  }
}
