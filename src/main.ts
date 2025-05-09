import { BattleArena } from "./battleArena"
import { Dragon, DarkElf, Troll } from "./creatures"


const battleArena = new BattleArena()

battleArena.addCreature(new Dragon("Alduin"))
battleArena.addCreature(new DarkElf("Vivec"))
battleArena.addCreature(new Troll("Snow Troll"))

console.log(battleArena.startBattle())