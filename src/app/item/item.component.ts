import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StarWarsService } from '../start-wars-service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() character;
  @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();  
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onAssign(side) {
    // this.character.side = side;
    // this.sideAssigned.emit({name: this.character.name, side: side});
    this.swService.onSideAssigned({name: this.character.name, side: side});
  }
}