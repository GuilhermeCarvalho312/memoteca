import { Component } from '@angular/core';

/**
 * Componente principal da aplicação (Root Component).
 * Serve como base para a estrutura principal do sistema.
 * 
 * @author CarvalhoDev
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'memoteca';
}
