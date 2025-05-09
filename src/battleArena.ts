import { Creature } from "./creature"
import { randomChoice } from "./utils"


export class BattleArena {
    private readonly creatures: Creature[] = []
 
    
    public addCreature(creature: Creature): void {
        this.creatures.push(creature)
    }


    private aliveCreatures(): number {
        let count = 0

        for (const creature of this.creatures) {
            if (creature.isAlive()) {
                count++
            }
        }

        return count
    }


    public startBattle(): string[] {
        const moves: string[] = []

        if (this.creatures.length < 2) {
            throw new Error("Battle must have 2 creatures or more")
        }

        for (const creature of this.creatures) {
            const moves_creatures = creature.move()
            moves.push(moves_creatures)
        }
        
        let chosenCreature: Creature
        let targetCreature: Creature

        do {
            const pickedCreatures = randomChoice(this.creatures, 2)
            chosenCreature = pickedCreatures[0]
            targetCreature = pickedCreatures[1]


            moves.push(chosenCreature.attack(targetCreature))


            if (targetCreature.isDead()) {
                const targetDeadindex = this.creatures.indexOf(targetCreature)
                this.creatures.splice(targetDeadindex, 1)
                moves.push(`${targetCreature.name} has fallen.`)
            }

        } while (this.aliveCreatures() > 1);


        moves.push(`${chosenCreature.name} is the last creature alive.`)

        return moves
    }
}