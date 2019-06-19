import { Injectable } from '@angular/core';

const items = [
  {
    id: 1,
    name: 'Nanatsu no Taizai'
  },
  {
    id: 2,
    name: 'Demon Slayer'
  },
  {
    id: 3,
    name: 'Kuroko no Basket'
  }
];

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  activeId: number;

  constructor() { }

  static getItems() {
    return items;
  }

  setActiveId(id: number) {
    this.activeId = id;
  }

  getMovieDetail(id) {
    return items.find(movie => id === movie.id);
  }

}

