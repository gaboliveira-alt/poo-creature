import { Creature } from "./creature"


class Dragon extends Creature {
    
    constructor(name: string, health: number, attackPower: number) {
        super(name, health, attackPower)
    }


    public move(): string {
        const moveset: string = `${this.name} moves: ${this.name} 
        Under the silver moonlight, Draco soars through the calm skies, his wings barely making a sound`

        return moveset
    }


    public attack(target: Creature): string {
        const result_attack: number = target.heatlh - this.attackPower
        const description: string = `${this.name} attacked ${target.name} from ${result_attack} damage: ${target.name} heatlh is now ${target.heatlh}`
        return description

    }


    public defend(amount: number): void {
        let isAlive: boolean = false
        const result_heatlh: number = this.heatlh - amount

        if (result_heatlh > 0) {
            isAlive = true
        }
        else if (result_heatlh <= 0) {
            console.log(`${this.name} has fallen in combat`)
            isAlive = false
        }
    }
}


class DarkElf extends Creature {
    
    constructor(name: string, health: number, attackPower: number) {
        super(name, health, attackPower)
    }


    public move(): string {
        const moveset: string = `${this.name} moves: ${this.name} opens he palm — the shadows inside it hunge.`
        return moveset
    }

    
    public attack(target: Creature): string {
        const result_attack: number = target.heatlh - this.attackPower
        const description: string = `${this.name} attacked ${target.name} from ${result_attack} damage: ${target.name} heatlh is now ${target.heatlh}`
        return description
    }


    public defend(amount: number): void {
        let isAlive: boolean = false
        const result_heatlh: number = this.heatlh - amount

        if (result_heatlh > 0) {
            isAlive = true
        }
        else if (result_heatlh <= 0) {
            console.log(`${this.name} has fallen in combat`)
            isAlive = false
        }
    }
}


class Troll extends Creature {

    constructor(name: string, health: number, attackPower: number) {
        super(name, health, attackPower)
    }


    public move(): string {
        const moveset: string = `${this.name} moves: ${this.name} laughs as his fist turns your chest into a crate`
        return moveset
    }


    public attack(target: Creature): string {
        const result_attack: number = target.heatlh - this.attackPower
        const description: string = `${this.name} attacked ${target.name} from ${result_attack} damage: ${target.name} heatlh is now ${target.heatlh}`
        return description
    }


    public defend(amount: number): void {
        let isAlive: boolean = false
        const result_heatlh: number = this.heatlh - amount

        if (result_heatlh > 0) {
            isAlive = true
        }
        else if (result_heatlh <= 0) {
            console.log(`${this.name} has fallen in combat`)
            isAlive = false
        }
    }
}