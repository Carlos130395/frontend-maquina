import { InjectionToken } from '@angular/core';
import { MaquinaRepositoryPort } from './maquina-repository.port';

export const MAQUINA_REPOSITORY_TOKEN =
  new InjectionToken<MaquinaRepositoryPort>('MaquinaRepositoryPort');
