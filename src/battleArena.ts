import { Creature } from "./creature"
import { Dragon, DarkElf, Troll } from "./creatures"


class BattleArena {
    private creatures: Creature[]

    constructor(creatures: Creature[]) {
        this.creatures = creatures
    }
}