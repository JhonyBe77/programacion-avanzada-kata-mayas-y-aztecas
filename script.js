class Warrior{
    constructor(life, power) {
      this.life = life;
      this.power = power;
    }
    attack() {
        return this.power;
    }
    defend(damage) {
        this.life -= damage; 
        console.log(`Vida restante: ${this.life}`);
    }
  }
// Maya
class Maya extends Warrior {
    constructor(life, power) {
      super(life, power); 
    }
    drinkColaCao() {
        this.power += 10;
  }
}

// Azteca
class Azteca extends Warrior {
    constructor(life, power) {
      super(life, power); 
    }
    drinkNesquik() {
        this.life += 10;
  }
}
// luchadores 
const maya = new Maya(100, 25);
const azteca = new Azteca(100, 25);

// cadena de intercambio de golpes
azteca.drinkNesquik(); 
maya.drinkColaCao(); 

// Maya ataca a Azteca y Azteca defiende
console.log(`Maya ataca con poder: ${maya.attack()}`);
azteca.defend(maya.attack());

// Azteca ataca a Maya y Maya defiende
console.log(`Azteca ataca con poder: ${azteca.attack()}`);
maya.defend(azteca.attack());