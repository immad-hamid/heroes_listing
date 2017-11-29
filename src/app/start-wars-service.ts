export class StarWarsService {
    private characters = [
                            {
                                name: 'Luke Skywalker',
                                side: ''
                            },
                            {
                                name: 'Darth Vader',
                                side: ''
                            }
                        ];
    
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
    }
}