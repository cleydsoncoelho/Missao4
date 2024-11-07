import { Component, OnInit } from '@angular/core'; // Importando componentes e interfaces necessárias
import { Router } from '@angular/router'; // Importando o Router para navegação
import { ControleEditoraService } from '../controle-editora.service'; // Importando o serviço de editoras
import { ControleLivrosService } from '../controle-livros.service'; // Importando o serviço de livros
import { Livro } from '../livro'; // Importando a classe Livro
import { Editora } from '../editora'; // Importando a classe Editora

@Component({
  selector: 'app-livro-dados', // Definindo o seletor do componente
  templateUrl: './livro-dados.component.html', // Caminho para o template HTML
  styleUrls: ['./livro-dados.component.css'], // Caminho para o arquivo de estilos CSS
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro; // Definindo o atributo livro do tipo Livro
  public autoresForm: string = ''; // Definindo o atributo autoresForm como uma string vazia
  public editoras: Array<Editora> = []; // Definindo o atributo editoras como um vetor vazio

  constructor(
    private servEditora: ControleEditoraService, // Injetando o serviço ControleEditoraService
    private servLivros: ControleLivrosService, // Injetando o serviço ControleLivrosService
    private router: Router // Injetando o Router para navegação
  ) {
    this.livro = new Livro(0, 0, '', '', '', []); // Instanciando livro via construtor padrão da classe Livro
  }

  ngOnInit(): void {
    // Método que é executado quando o componente é inicializado
    this.editoras = this.servEditora.getEditoras(); // Preenchendo o vetor editoras com os dados do serviço
  }

  incluir = (): void => {
    // Método para incluir um novo livro
    this.livro.autores = this.autoresForm
      .split('\n')
      .filter((autor) => autor.trim() !== ''); // Preenchendo o atributo autores com os nomes dos autores separados por quebra de linha
    this.servLivros.incluir(this.livro); // Invocando o método incluir do serviço de livros, passando o livro como parâmetro
    this.router.navigateByUrl('/lista'); // Navegando para a rota "/lista" após a inclusão
  };
}
