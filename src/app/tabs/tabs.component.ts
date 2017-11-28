import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../start-wars-service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  characters = [];
  chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenList = side;
  }

  getCharacters() {
    const swService = new StarWarsService;
    this.characters = swService.getCharacters(this.chosenList);
    return this.characters;
  }

  onSideAssigned($event) {
    const pos = this.characters.findIndex((char) => {
      return (char.name === $event.name);
    });
    this.characters[pos].side = $event.side;
  }

}
