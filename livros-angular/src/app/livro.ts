// Definindo a classe Livro
export class Livro {
  codigo: number;
  codEditora: number;
  titulo: string;
  ano: string; // Campo 'ano' mencionado
  resumo: string;
  autores: string[];

  // Construtor para inicializar os atributos
  constructor(
    codigo: number,
    codEditora: number,
    titulo: string,
    ano: string,
    resumo: string,
    autores: string[]
  ) {
    this.codigo = codigo;
    this.codEditora = codEditora;
    this.titulo = titulo;
    this.ano = ano; // Inicializando o campo 'ano'
    this.resumo = resumo;
    this.autores = autores;
  }
}
