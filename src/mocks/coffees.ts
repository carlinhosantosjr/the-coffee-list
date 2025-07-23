import expresso from '../assets/coffees/expresso.svg'
import americano from '../assets/coffees/americano.svg'
import cremoso from '../assets/coffees/expresso-cremoso.svg'
import gelado from '../assets/coffees/cafe-gelado.svg'
import leite from '../assets/coffees/cafe-leite.svg'
import latte from '../assets/coffees/latte.svg'
import capuccino from '../assets/coffees/capuccino.svg'
import macchiato from '../assets/coffees/macchiato.svg'
import mocaccino from '../assets/coffees/mocaccino.svg'
import chocolate from '../assets/coffees/chocolate-quente.svg'
import cubano from '../assets/coffees/cubano.svg'
import havaiano from '../assets/coffees/havaiano.svg'
import arabe from '../assets/coffees/arabe.svg'
import irlandes from '../assets/coffees/irlandes.svg'

export const coffees = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: expresso,
    value: 5.90,
    tags: [{ id: 1, tag: 'TRADICIONAL' }],
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: americano,
    value: 6.90,
    tags: [{ id: 1, tag: 'TRADICIONAL' }],
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    image: cremoso,
    value: 6.90,
    tags: [{ id: 1, tag: 'TRADICIONAL' }],
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: gelado,
    value: 5.90,
    tags: [
      { id: 1, tag: 'TRADICIONAL' },
      { id: 2, tag: 'GELADO' },
    ],
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: leite,
    value: 9.90,
    tags: [
      { id: 1, tag: 'TRADICIONAL' },
      { id: 2, tag: 'COM LEITE' },
    ],
  },
  {
    id: 6,
    name: 'Latte',
    description: 'Uma dose de café expresso com o' +
      'dobro de leite e espuma cremosa',
    image: latte,
    value: 10.90,
    tags: [
      { id: 1, tag: 'TRADICIONAL' },
      { id: 2, tag: 'COM LEITE' },
    ],
  },
  {
    id: 7,
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café,' +
      'leite e espuma',
    image: capuccino,
    value: 10.90,
    tags: [
      { id: 1, tag: 'TRADICIONAL' },
      { id: 2, tag: 'COM LEITE' },
    ],
  },
  {
    id: 8,
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite' +
      'quente e espuma',
    image: macchiato,
    value: 10.90,
    tags: [
      { id: 1, tag: 'TRADICIONAL' },
      { id: 2, tag: 'COM LEITE' },
    ],
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: mocaccino,
    value: 12.90,
    tags: [
      { id: 1, tag: 'TRADICIONAL' },
      { id: 2, tag: 'COM LEITE' },
    ],
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: chocolate,
    value: 9.90,
    tags: [
      { id: 1, tag: 'ESPECIAL' },
      { id: 2, tag: 'COM LEITE' },
    ],
  },
  {
    id: 11,
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum,' +
      'creme de leite e hortelã',
    image: cubano,
    value: 13.90,
    tags: [
      { id: 1, tag: 'ESPECIAL' },
      { id: 2, tag: 'ALCOÓLICO' },
      { id: 3, tag: 'GELADO' },
    ],
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: havaiano,
    value: 8.90,
    tags: [{ id: 1, tag: 'ESPECIAL' }],
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: arabe,
    value: 15.90,
    tags: [{ id: 1, tag: 'ESPECIAL' }],
  },
  {
    id: 14,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: irlandes,
    value: 16.90,
    tags: [
      { id: 1, tag: 'ESPECIAL' },
      { id: 2, tag: 'ALCOÓLICO' },
    ],
  },
]
