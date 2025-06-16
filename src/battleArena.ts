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
        const logBattle: string[] = []

        if (this.creatures.length < 2) throw new Error('The Battle must have 2 creatures')
        
        
        for (const creature of this.creatures) {
            const moveCreatures = creature.move()
            logBattle.push(moveCreatures)
        }


        let chosenCreature: Creature
        let targetCreature:Creature

        do {
            const pickedRandomCreature: Creature[] = randomChoice(this.creatures, 2)

            chosenCreature = pickedRandomCreature[0]
            targetCreature = pickedRandomCreature[1]


            logBattle.push(chosenCreature.attack(targetCreature))


            if (targetCreature.isDead()) {
                const targetDeadCreature = this.creatures.indexOf(targetCreature)
                this.creatures.splice(targetDeadCreature, 1)
                logBattle.push(`${targetCreature.name} has fallen in Battle`)
            }
        } while (this.aliveCreatures() > 1)


        logBattle.push(`${chosenCreature.name} is the last creature alive.`)


        return logBattle
    }
}