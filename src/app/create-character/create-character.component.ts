import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../start-wars-service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent implements OnInit {
  starWar: StarWarsService;

  availableSides = [
    {
      display: '',
      value: ''
    },
    {
      display: 'Light',
      value: 'light'
    },
    {
      display: 'Dark',
      value: 'dark'
    }
  ];

  constructor(starWar: StarWarsService) {
    this.starWar = starWar;
   }

  ngOnInit() {
  }

  onSubmit(submittedDetails) {
    if(submittedDetails.invalid ) {
      return;
    }
    console.log(submittedDetails);
    this.starWar.addCharacter(submittedDetails.value.name, submittedDetails.value.side);
  }

}
