export class Livro {
  constructor(
    public codigo: number,
    public codEditora: number,
    public titulo: string,
    public ano: string,
    public resumo: string,
    public autores: string[]
  ) {}
}