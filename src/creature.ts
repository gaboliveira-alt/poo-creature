export abstract class Creature {
    public readonly name: string
    public readonly heatlh: number
    public readonly attackPower: number
    
    
    constructor(name: string, heatlh: number, attackPower: number) {
        this.name = name
        this.heatlh = heatlh
        this.attackPower = attackPower
    }

    public abstract move(): string
    public abstract attack(target: Creature): string
    public abstract defend(amount: number): void
}