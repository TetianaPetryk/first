class PowerPlant {
    constructor(powerMW) {
        this.powerMW = powerMW;
    }

    getProduction(daytime) {
        return this.powerMW;
    }
}

class SolarPanel {
    constructor(typePower) {
        this.typePower = typePower;
    }

    getProduction(daytime) {
        return daytime ? this.typePower : 0;
    }
}

class ResidentialBuilding {
    constructor(apartments) {
        this.apartments = apartments;
    }

    getConsumption(daytime) {
        return (daytime ? 4 : 1) * this.apartments / 1000;
    }
}

class TransmissionLine {
    constructor(maxPower, pricePerMW) {
        this.maxPower = maxPower;
        this.pricePerMW = pricePerMW;
    }

    transfer(powerDiff) {
        const transferable = Math.min(Math.abs(powerDiff), this.maxPower);
        const cost = transferable * this.pricePerMW;
        return {
            power: transferable * Math.sign(powerDiff),
            money: cost * Math.sign(powerDiff) * -1
        };
    }
}

class Grid {
    constructor() {
        this.elements = [];
        this.lines = [];
    }

    addElement(element) {
        if (element instanceof TransmissionLine) {
            this.lines.push(element);
        } else {
            this.elements.push(element);
        }
    }

    calculateBalance(daytime) {
        let totalProduction = 0;
        let totalConsumption = 0;

        for (let el of this.elements) {
            if (el instanceof PowerPlant || el instanceof SolarPanel) {
                totalProduction += el.getProduction(daytime);
            } else if (el instanceof ResidentialBuilding) {
                totalConsumption += el.getConsumption(daytime);
            }
        }

        const balance = totalProduction - totalConsumption;
        let powerDiff = Math.abs(balance);
        let money = 0;

        for (let line of this.lines) {
            if (powerDiff <= 0.0001) break;
            const result = line.transfer(balance);
            money += result.money;
            powerDiff -= Math.abs(result.power);
        }

        return {
            time: daytime ? "День" : "Ніч",
            production: totalProduction.toFixed(2) + " МВт",
            consumption: totalConsumption.toFixed(2) + " МВт",
            net: balance.toFixed(2) + " МВт",
            result: (money >= 0 ? "Прибуток: " : "Витрати: ") + Math.abs(money).toFixed(2) + "$"
        };
    }
}

function simulate() {
    const grid = new Grid();

    // Прикладова конфігурація
    grid.addElement(new PowerPlant(60));
    grid.addElement(new PowerPlant(30));
    grid.addElement(new SolarPanel(4));
    grid.addElement(new SolarPanel(5));
    grid.addElement(new ResidentialBuilding(350));
    grid.addElement(new ResidentialBuilding(270));
    grid.addElement(new TransmissionLine(50, 100));
    grid.addElement(new TransmissionLine(30, 120));

    const day = grid.calculateBalance(true);
    const night = grid.calculateBalance(false);

    const output = document.getElementById('output');
    output.textContent =
        `🌞 ${day.time}\n` +
        `Вироблено: ${day.production}\n` +
        `Спожито: ${day.consumption}\n` +
        `Баланс: ${day.net}\n` +
        `${day.result}\n\n` +
        `🌙 ${night.time}\n` +
        `Вироблено: ${night.production}\n` +
        `Спожито: ${night.consumption}\n` +
        `Баланс: ${night.net}\n` +
        `${night.result}`;
}
