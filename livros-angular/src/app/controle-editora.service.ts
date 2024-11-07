import { Injectable } from '@angular/core';
import { Editora } from './editora';

const editoras: Array<Editora> = [
    new Editora(1, "Companhia das Letras"),
    new Editora(2, "Boitempo Editorial"),
    new Editora(3, "Editora Martin Claret"),
    new Editora(4, "Leya"),
    new Editora(5, "Civilização Brasileira"),
    new Editora(6, "Edições Loyola"),
    new Editora(7, "Editora Vozes"),
    new Editora(8, "Paz e Terra"),
    new Editora(9, "Graal"),
    new Editora(10, "Editora Gallimard"),
    new Editora(11, "Paz e Terra"),
    new Editora(12, "Paz e Terra"),
    new Editora(13, "Editora Abril"),
    new Editora(14, "Editora 34"),
    new Editora(15, "Editora Nova Fronteira")
];

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  getEditoras(): Array<Editora> {
    return editoras;
  }

  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.find(e => e.codEditora === codEditora);
    return editora?.nome;
  }
}