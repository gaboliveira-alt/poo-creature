export abstract class Creature {
    public readonly name: string
    protected heatlh: number
    protected attackPower: number
    
    
    constructor(name: string, heatlh: number, attackPower: number) {
        this.name = name
        this.heatlh = heatlh
        this.attackPower = attackPower
    }

    public abstract move(): string


    public attack(target: Creature): string {
        target.defend(this.attackPower)
        const description: string = `${this.name} attacked ${target.name} from ${this.attackPower} damage: ${target.name} heatlh is now ${target.heatlh}`
        return description
    }


    public defend(amount: number): void {
        this.heatlh -= amount
    }


    public isDead(): boolean {
        return this.heatlh <= 0
    }
    
    
    public isAlive(): boolean {
        return this.heatlh > 0
    }
}