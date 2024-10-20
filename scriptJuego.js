class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;
    }
    attack() {
        return this.power;
    }
    defend(damage) {
        this.life -= damage;
        logMessage(`Vida restante: ${this.life}`);
    }
}

class Maya extends Warrior {
    constructor(life, power) {
        super(life, power);
    }
    drinkColaCao() {
        this.power += 10;
        logMessage("Maya tomó Cola Cao y aumentó su poder en 10.");
    }
}

class Azteca extends Warrior {
    constructor(life, power) {
        super(life, power);
    }
    drinkNesquik() {
        this.life += 10;
        logMessage("Azteca tomó Nesquik y recuperó 10 de vida.");
    }
}

// Luchadores
let maya, azteca;

// Para mostrar mensajes en la consola del juego
function logMessage(message) {
    const consoleElement = document.getElementById("gameConsole");
    consoleElement.innerHTML += `<p>${message}</p>`;
    consoleElement.scrollTop = consoleElement.scrollHeight;
}

// Para pedir al usuario la acción
function getActionMessage(warriorName) {
    return prompt(`${warriorName}, ¿qué quieres hacer? (1: Atacar, 2: Tomar bebida)`);
}

//Iniciar el juego
function iniciarJuego() {
    // Inicializar los guerreros al comienzo de cada juego
    maya = new Maya(100, 25);
    azteca = new Azteca(100, 25);
    document.getElementById("gameConsole").innerHTML = ""; // Limpiar la consola

    let turn = 1;

    while (maya.life > 0 && azteca.life > 0) {
        logMessage(`\nTurno ${turn}:`);

        // Maya decide
        let actionMaya = getActionMessage("Maya");
        if (actionMaya === "1") {
            logMessage(`Maya ataca con poder: ${maya.attack()}`);
            azteca.defend(maya.attack());
        } else if (actionMaya === "2") {
            maya.drinkColaCao();
        }

        // Verificar si Azteca ha sido derrotado
        if (azteca.life <= 0) {
            logMessage("¡Azteca ha sido derrotado!");
            break;
        }

        // Azteca decide
        let actionAzteca = getActionMessage("Azteca");
        if (actionAzteca === "1") {
            logMessage(`Azteca ataca con poder: ${azteca.attack()}`);
            maya.defend(azteca.attack());
        } else if (actionAzteca === "2") {
            azteca.drinkNesquik();
        }

        // Verificar si Maya ha sido derrotado
        if (maya.life <= 0) {
            logMessage("¡Maya ha sido derrotado!");
            break;
        }

        turn++;
    }

    // Resultado
    if (maya.life > 0) {
        logMessage("¡Maya ha ganado!");
    } else if (azteca.life > 0) {
        logMessage("¡Azteca ha ganado!");
    }
}