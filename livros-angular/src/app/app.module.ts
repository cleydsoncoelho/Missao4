import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component'; // Verifique o caminho
import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';

@NgModule({
  declarations: [
    AppComponent,
    LivroListaComponent, // Deve estar aqui
  ],
  imports: [BrowserModule],
  providers: [ControleEditoraService, ControleLivrosService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Adicione isso aqui
})
export class AppModule {}
