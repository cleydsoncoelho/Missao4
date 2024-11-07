import { Injectable } from '@angular/core';

// Interface LivroLocal
interface LivroLocal {
  codigo: number;
  codEditora: number;
  titulo: string;
  ano: string;
  resumo: string;
  autores: string[];
}

// Variável livros
const livros: Array<LivroLocal> = [
  {
    codigo: 1,
    codEditora: 1,
    titulo: 'O Capital',
    ano: '1867',
    resumo:
      'Uma análise crítica e detalhada do funcionamento do sistema capitalista e suas contradições.',
    autores: ['Karl Marx'],
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: 'Manifesto Comunista',
    ano: '1848',
    resumo:
      'Um panfleto político que apresenta os objetivos do comunismo e a teoria da luta de classes.',
    autores: ['Karl Marx', 'Friedrich Engels'],
  },
  {
    codigo: 3,
    codEditora: 3,
    titulo: 'O Príncipe',
    ano: '1532',
    resumo:
      'Um tratado político que oferece conselhos sobre liderança e poder, baseado na experiência histórica.',
    autores: ['Nicolau Maquiavel'],
  },
  {
    codigo: 4,
    codEditora: 4,
    titulo: 'A Elite do Atraso',
    ano: '2017',
    resumo:
      'Uma análise crítica sobre a formação e o papel da elite brasileira na perpetuação da desigualdade social.',
    autores: ['Jesse de Souza'],
  },
  {
    codigo: 5,
    codEditora: 5,
    titulo: 'A Ralé Brasileira',
    ano: '2009',
    resumo:
      'Um estudo aprofundado sobre a desigualdade social no Brasil e a marginalização das classes mais pobres.',
    autores: ['Jesse de Souza'],
  },
  {
    codigo: 6,
    codEditora: 6,
    titulo: 'Suma Teológica',
    ano: '1274',
    resumo:
      'Sua obra mais conhecida, aborda questões teológicas e filosóficas fundamentais para o pensamento cristão.',
    autores: ['Tomás de Aquino'],
  },
  {
    codigo: 7,
    codEditora: 7,
    titulo: 'Sobre o Ser e a Essência',
    ano: '1252',
    resumo:
      'Uma introdução à metafísica tomista, explorando a distinção entre essência e existência.',
    autores: ['Tomás de Aquino'],
  },
  {
    codigo: 8,
    codEditora: 8,
    titulo: 'A Ética Protestante e o Espírito do Capitalismo',
    ano: '1905',
    resumo:
      'Uma obra fundamental para a sociologia, onde Weber examina a relação entre a ética protestante e o desenvolvimento do capitalismo moderno.',
    autores: ['Max Weber'],
  },
  {
    codigo: 9,
    codEditora: 9,
    titulo: 'Vigiar e Punir',
    ano: '1975',
    resumo:
      'Um estudo sobre a evolução dos sistemas penais e a disciplina nas sociedades modernas.',
    autores: ['Michel Foucault'],
  },
  {
    codigo: 10,
    codEditora: 10,
    titulo: 'A História da Sexualidade',
    ano: '1976',
    resumo:
      'Uma análise das práticas e discursos sobre a sexualidade ao longo da história ocidental.',
    autores: ['Michel Foucault'],
  },
  {
    codigo: 11,
    codEditora: 11,
    titulo: 'Pedagogia do Oprimido',
    ano: '1968',
    resumo:
      'Uma obra seminal que discute a educação como prática da liberdade e a pedagogia crítica.',
    autores: ['Paulo Freire'],
  },
  {
    codigo: 12,
    codEditora: 12,
    titulo: 'Educação como Prática da Liberdade',
    ano: '1967',
    resumo:
      'Um livro que explora a educação como um meio de transformação social e emancipação.',
    autores: ['Paulo Freire'],
  },
  {
    codigo: 13,
    codEditora: 13,
    titulo: 'Os Miseráveis',
    ano: '1862',
    resumo:
      'Um romance histórico que aborda questões sociais e de justiça na França do século XIX.',
    autores: ['Victor Hugo'],
  },
  {
    codigo: 14,
    codEditora: 14,
    titulo: 'Dom Quixote',
    ano: '1605',
    resumo:
      'Uma sátira sobre os romances de cavalaria, narrando as aventuras de um fidalgo que acredita ser um cavaleiro andante.',
    autores: ['Miguel de Cervantes'],
  },
  {
    codigo: 15,
    codEditora: 15,
    titulo: 'Romeu e Julieta',
    ano: '1597',
    resumo:
      'Uma tragédia que narra a história de dois jovens amantes cujas mortes acabam unindo suas famílias em conflito.',
    autores: ['William Shakespeare'],
  },
];

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  // Método para retornar todos os livros
  obterLivros(): Promise<Array<LivroLocal>> {
    return Promise.resolve(livros);
  }

  // Método para incluir um novo livro
  incluir(livro: LivroLocal): void {
    livro.codigo = Math.max(...livros.map((l) => l.codigo)) + 1; // Atribui um novo código
    livros.push(livro); // Adiciona o livro ao array
  }

  // Método para excluir um livro pelo código
  excluir(codigo: number): void {
    const index = livros.findIndex((l) => l.codigo === codigo); // Encontra o índice
    if (index !== -1) {
      livros.splice(index, 1); // Remove o livro
    }
  }
}
