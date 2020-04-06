import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sprint } from '../models/sprint';

@Injectable({
  providedIn: 'root'
})
export class SprintService {

  constructor() { }

  list(idProject: number): Observable<Array<Sprint>> {
    let mock: Sprint[] = this.getMock();

    return of(mock);
  }

  private getMock(): Sprint[] {
    return [
      {
        id: 1,
        title: 'Sprint 1',
        dInicio: Date(),
        estorias: [
          {
            title: '[Paginação do detalhe do pedido][Backend] Ajustar serviço de consulta de colaboradores do pedido para retornar o número total de colaboradores',
            documents: ['https://docs.google.com/document/d/1z7DhmXhQ0ba00PKvuAouxbeQVsoUaPFgaOOwsrW5_es/edit#heading=h.3w7k4om16u85'],
            tasks: [
              {
                title: 'Abertura da Estória',
                estimated: 0.5,
                resource: [
                  {
                    id: 1,
                    login: 'atrombetone',
                    name: 'Andre Trombetone',
                    paper: 'developer'
                  },
                  {
                    id: 2,
                    login: 'jmoraes',
                    name: 'Josué Moraes',
                    paper: 'tester'
                  }
                ]
              },
              {
                title: 'Ajustar regra que preenche quantidadeResultados',
                estimated: 3,
                resource: [
                  {
                    id: 1,
                    login: 'atrombetone',
                    name: 'Andre Trombetone',
                    paper: 'developer'
                  }
                ]
              },
              {
                title: 'Criar teste unitário para implementação de quantidadeResultados',
                estimated: 6,
                resource: [
                  {
                    id: 1,
                    login: 'atrombetone',
                    name: 'Andre Trombetone',
                    paper: 'developer'
                  }
                ]
              },
              {
                title: 'Teste Integrado',
                estimated: 4,
                resource: [
                  {
                    id: 1,
                    login: 'atrombetone',
                    name: 'Andre Trombetone',
                    paper: 'developer'
                  }
                ]
              },
              {
                title: 'Code Review',
                estimated: 0.5,
                resource: []
              },
              {
                title: 'Fechamento',
                estimated: 0.5,
                resource: [
                  {
                    id: 1,
                    login: 'atrombetone',
                    name: 'Andre Trombetone',
                    paper: 'developer'
                  },
                  {
                    id: 2,
                    login: 'jmoraes',
                    name: 'Josué Moraes',
                    paper: 'tester'
                  }
                ]
              },
              {
                title: 'Planejamento de Testes',
                estimated: 7,
                resource: [
                  {
                    id: 2,
                    login: 'jmoraes',
                    name: 'Josué Moraes',
                    paper: 'tester'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 1,
        title: 'Sprint 2',
        dInicio: Date(),
        estorias: [
          {
            title: '[Paginação do detalhe do pedido][Backend] Ajustar serviço de consulta de colaboradores do pedido para retornar o número total de colaboradores',
            documents: ['https://docs.google.com/document/d/1z7DhmXhQ0ba00PKvuAouxbeQVsoUaPFgaOOwsrW5_es/edit#heading=h.3w7k4om16u85'],
            tasks: [
              {
                title: 'Abertura da Estória',
                estimated: 0.5,
                resource: [
                  {
                    id: 1,
                    login: 'atrombetone',
                    name: 'Andre Trombetone',
                    paper: 'developer'
                  },
                  {
                    id: 2,
                    login: 'jmoraes',
                    name: 'Josué Moraes',
                    paper: 'tester'
                  }
                ]
              },
              {
                title: 'Ajustar regra que preenche quantidadeResultados',
                estimated: 3,
                resource: [
                  {
                    id: 1,
                    login: 'atrombetone',
                    name: 'Andre Trombetone',
                    paper: 'developer'
                  }
                ]
              },
              {
                title: 'Criar teste unitário para implementação de quantidadeResultados',
                estimated: 6,
                resource: [
                  {
                    id: 1,
                    login: 'atrombetone',
                    name: 'Andre Trombetone',
                    paper: 'developer'
                  }
                ]
              },
              {
                title: 'Teste Integrado',
                estimated: 4,
                resource: [
                  {
                    id: 1,
                    login: 'atrombetone',
                    name: 'Andre Trombetone',
                    paper: 'developer'
                  }
                ]
              },
              {
                title: 'Code Review',
                estimated: 0.5,
                resource: []
              },
              {
                title: 'Fechamento',
                estimated: 0.5,
                resource: [
                  {
                    id: 1,
                    login: 'atrombetone',
                    name: 'Andre Trombetone',
                    paper: 'developer'
                  },
                  {
                    id: 2,
                    login: 'jmoraes',
                    name: 'Josué Moraes',
                    paper: 'tester'
                  }
                ]
              },
              {
                title: 'Planejamento de Testes',
                estimated: 7,
                resource: [
                  {
                    id: 2,
                    login: 'jmoraes',
                    name: 'Josué Moraes',
                    paper: 'tester'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 1,
        title: 'Sprint 3',
        dInicio: Date(),
        estorias: [
          {
            title: '[Paginação do detalhe do pedido][Backend] Ajustar serviço de consulta de colaboradores do pedido para retornar o número total de colaboradores',
            documents: ['https://docs.google.com/document/d/1z7DhmXhQ0ba00PKvuAouxbeQVsoUaPFgaOOwsrW5_es/edit#heading=h.3w7k4om16u85'],
            tasks: [
              {
                title: 'Abertura da Estória',
                estimated: 0.5,
                resource: [
                  {
                    id: 1,
                    login: 'atrombetone',
                    name: 'Andre Trombetone',
                    paper: 'developer'
                  },
                  {
                    id: 2,
                    login: 'jmoraes',
                    name: 'Josué Moraes',
                    paper: 'tester'
                  }
                ]
              },
              {
                title: 'Ajustar regra que preenche quantidadeResultados',
                estimated: 3,
                resource: [
                  {
                    id: 1,
                    login: 'atrombetone',
                    name: 'Andre Trombetone',
                    paper: 'developer'
                  }
                ]
              },
              {
                title: 'Criar teste unitário para implementação de quantidadeResultados',
                estimated: 6,
                resource: [
                  {
                    id: 1,
                    login: 'atrombetone',
                    name: 'Andre Trombetone',
                    paper: 'developer'
                  }
                ]
              },
              {
                title: 'Teste Integrado',
                estimated: 4,
                resource: [
                  {
                    id: 1,
                    login: 'atrombetone',
                    name: 'Andre Trombetone',
                    paper: 'developer'
                  }
                ]
              },
              {
                title: 'Code Review',
                estimated: 0.5,
                resource: []
              },
              {
                title: 'Fechamento',
                estimated: 0.5,
                resource: [
                  {
                    id: 1,
                    login: 'atrombetone',
                    name: 'Andre Trombetone',
                    paper: 'developer'
                  },
                  {
                    id: 2,
                    login: 'jmoraes',
                    name: 'Josué Moraes',
                    paper: 'tester'
                  }
                ]
              },
              {
                title: 'Planejamento de Testes',
                estimated: 7,
                resource: [
                  {
                    id: 2,
                    login: 'jmoraes',
                    name: 'Josué Moraes',
                    paper: 'tester'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 1,
        title: 'Sprint 4',
        dInicio: Date(),
        estorias: [
          {
            title: '[Paginação do detalhe do pedido][Backend] Ajustar serviço de consulta de colaboradores do pedido para retornar o número total de colaboradores',
            documents: ['https://docs.google.com/document/d/1z7DhmXhQ0ba00PKvuAouxbeQVsoUaPFgaOOwsrW5_es/edit#heading=h.3w7k4om16u85'],
            tasks: [
              {
                title: 'Abertura da Estória',
                estimated: 0.5,
                resource: [
                  {
                    id: 1,
                    login: 'atrombetone',
                    name: 'Andre Trombetone',
                    paper: 'developer'
                  },
                  {
                    id: 2,
                    login: 'jmoraes',
                    name: 'Josué Moraes',
                    paper: 'tester'
                  }
                ]
              },
              {
                title: 'Ajustar regra que preenche quantidadeResultados',
                estimated: 3,
                resource: [
                  {
                    id: 1,
                    login: 'atrombetone',
                    name: 'Andre Trombetone',
                    paper: 'developer'
                  }
                ]
              },
              {
                title: 'Criar teste unitário para implementação de quantidadeResultados',
                estimated: 6,
                resource: [
                  {
                    id: 1,
                    login: 'atrombetone',
                    name: 'Andre Trombetone',
                    paper: 'developer'
                  }
                ]
              },
              {
                title: 'Teste Integrado',
                estimated: 4,
                resource: [
                  {
                    id: 1,
                    login: 'atrombetone',
                    name: 'Andre Trombetone',
                    paper: 'developer'
                  }
                ]
              },
              {
                title: 'Code Review',
                estimated: 0.5,
                resource: []
              },
              {
                title: 'Fechamento',
                estimated: 0.5,
                resource: [
                  {
                    id: 1,
                    login: 'atrombetone',
                    name: 'Andre Trombetone',
                    paper: 'developer'
                  },
                  {
                    id: 2,
                    login: 'jmoraes',
                    name: 'Josué Moraes',
                    paper: 'tester'
                  }
                ]
              },
              {
                title: 'Planejamento de Testes',
                estimated: 7,
                resource: [
                  {
                    id: 2,
                    login: 'jmoraes',
                    name: 'Josué Moraes',
                    paper: 'tester'
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
  }
}
