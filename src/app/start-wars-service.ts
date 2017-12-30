import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StarWarsService {
    private logService: LogService;

    private characters = [
                            { name: 'Luke Skywalker', side: '' },
                            { name: 'Darth Vader', side: '' },
                            { name: 'Immad', side: '' }
                        ];
    public charactersChanged = new Subject<void>();

    public http: Http;

    public api = 'https://swapi.co/api/';

    constructor(logService: LogService, http: Http) {
        this.logService = logService;
        this.http = http;
    }

    fetchCharacter() {
        this.http.get(this.api + 'people/')
            .map((res: Response) => {
                const data = res.json();
                const extractedChars = data.results;
                const chars = extractedChars.map((char) => {
                    return {name: char.name, side: ''};
                });
                return chars;
            })
            .subscribe(
                (char) => {
                    console.log(char);
                    this.characters = char;
                    this.charactersChanged.next();
                }
            );
        // Same thing above for plain javascript
        // var _this = this;
        // this.http.get(this.api + 'people/')
        // .map(function (res) {
        //     var data = res.json();
        //     var extractedChars = data.results;
        //     var chars = extractedChars.map(function (char) {
        //         return { name: char.name, side: '' };
        //     });
        //     return chars;
        // })
        // .subscribe(
        //     function(char) {
        //         console.log(char);
        //         _this.characters = char;
        //         _this.charactersChanged.next();
        //     }
        // );
    }

    getCharacters(chosenList) {
        if (chosenList === 'all') {
            return this.characters.slice();
        }
        return this.characters.filter((char) => {
            return char.side === chosenList;
        });
    }

    onSideAssigned($event) {
        const pos = this.characters.findIndex((char) => {
          return (char.name === $event.name);
        });
        this.characters[pos].side = $event.side;
        this.charactersChanged.next();
        this.logService.writeLog('We have a new log: ' + $event.name + ' has joined the ' + $event.side + ' force side');
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
