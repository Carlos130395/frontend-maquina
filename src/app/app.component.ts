import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MAQUINA_REPOSITORY_TOKEN } from './domain/ports/maquina-repository.token';
import { MaquinaHttpRepositoryService } from './infrastructure/api/maquina/maquina-http-repository.service';
import { MaquinaService } from './application/services/maquina/maquina.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [
    MaquinaService,
    {
      provide: MAQUINA_REPOSITORY_TOKEN,
      useClass: MaquinaHttpRepositoryService,
    },
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
