class Fighter {  
    constructor(obj) {
        this._wins = 0;
        this._losses = 0;
        this._name = obj.name;   
        this._damage = obj.damage;
        this._hp = obj.hp;
        this._totalHP = obj.hp;
        this._strength = obj.strength;
        this._agility = obj.agility;

        return {
            wins: this._wins,
            losses: this._losses,

            getName: () => {
                return this._name;
            },
            getDamage: () => {
                return this._damage;
            },
            getHealth: () => {
                return this._hp;
            },
            getStrength: () => {
                return this._strength;
            },
            getAgility: () => {
                return this._agility;
            },
            addWin: () => {
                this._wins++;
            },
            addLoss: () => {
                this._losses++;
            },
            logCombatHistory: () => {
                console.log(`Name: ${this._name}, Wins: ${this._wins}, Losses: ${this._losses}`);
            },
            dealDamage: damage => {
                if (this._hp - damage < 0){
                    this._hp = 0;
                } else {
                    this._hp -= damage;
                }
            },
            attack: defender => {
                let $101 = 101;
                let random = Math.floor(Math.random() * $101);
                let def_chance = defender.getStrength() + defender.getAgility();
        
                if(random > def_chance){
                    defender.dealDamage(this._damage);                       
                    console.log(`${this._name} makes ${this._damage} damage to ${defender.getName()}`);
                    console.log(`${defender.getName()} has ${defender.getHealth()} HP left!`);
                } else {
                    console.log(`${this._name} attack missed`);
                }
            },
            heal: hp => {
                if (this._hp + hp > this._totalHP){
                    this._hp = this._totalHP;
                } else {
                    this._hp += hp;
                }
            }
        }
    }
}

function battle(fighter1, fighter2){

    let $2 = 2;

    let firstHit = Math.floor(Math.random() * $2);

    if(fighter1.getHealth() === 0 || fighter2.getHealth() === 0) {
        console.log(`warning - battle cant be simulated! (one of the fighters is dead)`);
        return;
    } else if (firstHit === 0){
        while(fighter1.getHealth() !== 0 && fighter2.getHealth() !== 0){
            fighter1.attack(fighter2);
            if (fighter2.getHealth() > 0) {
                fighter2.attack(fighter1);
            }
        }
    } else if (firstHit === 1){
        while(fighter1.getHealth() !== 0 && fighter2.getHealth() !== 0){
            fighter2.attack(fighter1);

            if (fighter1.getHealth() > 0) {
                fighter1.attack(fighter2);
            }
        }
    }

    let winner = fighter1.getHealth() === 0 ? fighter2 : fighter1;
    let loser = fighter1.getHealth() === 0 ? fighter1 : fighter2;
    console.log(`${winner.getName()} has won!`)
    winner.addWin();
    loser.addLoss();
}

const fighter1 = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 50}); 
const fighter2 = new Fighter({name: 'Julian', damage: 45, hp: 150, strength: 50, agility: 10}); 


battle(fighter1, fighter2);
console.log(fighter1.getHealth());
fighter1.logCombatHistory();
battle(fighter1, fighter2);
console.log(fighter2.getHealth());
console.log(fighter2.getStrength());