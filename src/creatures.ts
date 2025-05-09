import { Creature } from "./creature"


export class Dragon extends Creature {

    private static initialHealth = 300
    private static initialPowerattack = 55
    

    constructor(name: string) {        
        super(name, Dragon.initialHealth, Dragon.initialPowerattack)
    }


    public move(): string {
        const moveset: string = `${this.name} moves: ${this.name} 
        Under the silver moonlight, Draco soars through the calm skies, his wings barely making a sound`

        return moveset
    }
}


export class DarkElf extends Creature {

    private static initialHealth = 200
    private static initialPowerattack = 30
    

    constructor(name: string) {
        super(name, DarkElf.initialHealth, DarkElf.initialPowerattack)
    }


    public move(): string {
        const moveset: string = `${this.name} moves: ${this.name} opens he palm — the shadows inside it hunge.`
        return moveset
    }
}


export class Troll extends Creature {

    private static initialHealth = 300
    private static initialPowerattack = 55


    constructor(name: string) {
        super(name, Troll.initialHealth, Troll.initialPowerattack)
    }


    public move(): string {
        const moveset: string = `${this.name} moves: ${this.name} laughs as his fist turns your chest into a crate`
        return moveset
    }
}