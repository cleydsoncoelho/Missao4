import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    new Livro(1, 1, 'O Capital', '1867',
      'Uma análise crítica e detalhada do funcionamento do sistema capitalista e suas contradições.',
      ['Karl Marx']),
    new Livro(2, 2, 'Manifesto Comunista', '1848',
      'Um panfleto político que apresenta os objetivos do comunismo e a teoria da luta de classes.',
      ['Karl Marx', 'Friedrich Engels']),
    new Livro(3, 3, 'O Príncipe', '1532',
      'Um tratado político que oferece conselhos sobre liderança e poder, baseado na experiência histórica.',
      ['Nicolau Maquiavel']),
    new Livro(4, 4, 'A Elite do Atraso', '2017',
      'Uma análise crítica sobre a formação e o papel da elite brasileira na perpetuação da desigualdade social.',
      ['Jesse de Souza']),
    new Livro(5, 5, 'A Ralé Brasileira', '2009',
      'Um estudo aprofundado sobre a desigualdade social no Brasil e a marginalização das classes mais pobres.',
      ['Jesse de Souza']),
    new Livro(6, 6, 'Suma Teológica', '1274',
      'Sua obra mais conhecida, aborda questões teológicas e filosóficas fundamentais para o pensamento cristão.',
      ['Tomás de Aquino']),
    new Livro(7, 7, 'Sobre o Ser e a Essência', '1252',
      'Uma introdução à metafísica tomista, explorando a distinção entre essência e existência.',
      ['Tomás de Aquino']),
    new Livro(8, 8, 'A Ética Protestante e o Espírito do Capitalismo', '1905',
      'Uma obra fundamental para a sociologia, onde Weber examina a relação entre a ética protestante e o desenvolvimento do capitalismo moderno.',
      ['Max Weber']),
    new Livro(9, 9, 'Vigiar e Punir', '1975',
      'Um estudo sobre a evolução dos sistemas penais e a disciplina nas sociedades modernas.',
      ['Michel Foucault']),
    new Livro(10, 10, 'A História da Sexualidade', '1976',
      'Uma análise das práticas e discursos sobre a sexualidade ao longo da história ocidental.',
      ['Michel Foucault']),
    new Livro(11, 11, 'Pedagogia do Oprimido', '1968',
      'Uma obra seminal que discute a educação como prática da liberdade e a pedagogia crítica.',
      ['Paulo Freire']),
    new Livro(12, 12, 'Educação como Prática da Liberdade', '1967',
      'Um livro que explora a educação como um meio de transformação social e emancipação.',
      ['Paulo Freire']),
    new Livro(13, 13, 'Os Miseráveis', '1862',
      'Um romance histórico que aborda questões sociais e de justiça na França do século XIX.',
      ['Victor Hugo']),
    new Livro(14, 14, 'Dom Quixote', '1605',
      'Uma sátira sobre os romances de cavalaria, narrando as aventuras de um fidalgo que acredita ser um cavaleiro andante.',
      ['Miguel de Cervantes']),
    new Livro(15, 15, 'Romeu e Julieta', '1597',
      'Uma tragédia que narra a história de dois jovens amantes cujas mortes acabam unindo suas famílias em conflito.',
      ['William Shakespeare'])
  ];

  obterLivros(): Promise<Array<Livro>> {
    return Promise.resolve(this.livros);
  }

  incluir(livro: Livro): Promise<void> {
    const codigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    this.livros.push(new Livro(
      codigo,
      livro.codEditora,
      livro.titulo,
      livro.ano,
      livro.resumo,
      livro.autores
    ));
    return Promise.resolve();
  }

  excluir(codigo: number): Promise<void> {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
    return Promise.resolve();
  }
}