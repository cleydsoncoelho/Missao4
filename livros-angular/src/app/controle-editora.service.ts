import { Injectable } from '@angular/core';
import { Editora } from './editora'; // Certifique-se de que o caminho esteja correto

// Definir a variável editoras, como Array<Editora>, contendo ao menos três elementos, no formato JSON
const editoras: Array<Editora> = [
    { codEditora: 1, nome: "Companhia das Letras" },
    { codEditora: 2, nome: "Boitempo Editorial" },
    { codEditora: 3, nome: "Editora Martin Claret" },
    { codEditora: 4, nome: "Leya" },
    { codEditora: 5, nome: "Civilização Brasileira" },
    { codEditora: 6, nome: "Edições Loyola" },
    { codEditora: 7, nome: "Editora Vozes" },
    { codEditora: 8, nome: "Paz e Terra" },
    { codEditora: 9, nome: "Graal" },
    { codEditora: 10, nome: "Editora Gallimard" },
    { codEditora: 11, nome: "Paz e Terra" },
    { codEditora: 12, nome: "Paz e Terra" },
    { codEditora: 13, nome: "Editora Abril" },
    { codEditora: 14, nome: "Editora 34" },
    { codEditora: 15, nome: "Editora Nova Fronteira" },
];

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  // Método para retornar todas as editoras
  getEditoras(): Array<Editora> {
    return editoras;
  }

  // Método para retornar o nome da editora pelo código
  getNomeEditora(codEditora: number): string | undefined {
    const filteredEditoras = editoras.filter((editora) => editora.codEditora === codEditora);
    return filteredEditoras.length > 0 ? filteredEditoras[0].nome : undefined;
  }
}
