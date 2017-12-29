import { Injectable } from "@angular/core";
import { LogService } from "./log.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class StarWarsService {
    private logService: LogService;

    private characters = [
                            { name: 'Luke Skywalker', side: '' },
                            { name: 'Darth Vader', side: '' },
                            { name: 'Immad', side: '' }
                        ];
    
    public charactersChanged = new Subject<void>();

    constructor(logService: LogService) {
        this.logService = logService;
    }

    getCharacters(chosenList) {
        if (chosenList === 'all') {
            return this.characters.slice();
        }
        return this.characters.filter((char) => {
            return char.side === chosenList;
        })
    }

    onSideAssigned($event) {
        const pos = this.characters.findIndex((char) => {
          return (char.name === $event.name);
        });
        this.characters[pos].side = $event.side;
        this.charactersChanged.next();
        this.logService.writeLog("We have a new log: " + $event.name + " has joined the " + $event.side + " force side")
    }

    addCharacter(name, side) {
        const pos = this.characters.findIndex((char) => {
            return char.name === name;
        });
        if (pos !== -1) {
            return;
        } 
        const newChar = {name: name, side: side};
        this.characters.push(newChar);
    }
}