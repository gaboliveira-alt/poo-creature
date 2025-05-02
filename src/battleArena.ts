import { Creature } from "./creature"
import { Dragon, DarkElf, Troll } from "./creatures"


class BattleArena {
    private creatures: Creature[]

    constructor(creatures: Creature[]) {
        this.creatures = creatures
    }


    public addCreature(creature: Creature): void {
        const added_creature: string = creature.move()
        console.log(added_creature)
    }


    public startBattle(): string {}
}