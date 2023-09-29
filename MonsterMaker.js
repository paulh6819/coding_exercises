// it would help to understand object oriented programming, class, and class inheritance would do me well to understand

// look up the differnece between a stack and a queue as they relate to computer science

class Animal {
  constructor(name, numberOfLegs, sound) {
    this.name = name;
    this.numberOfLegs = Number(numberOfLegs) || 0;
    this.sound = sound;
  }
  playSound() {
    console.log(this.sound);
  }
}

class Monster extends Animal {
  constructor(animal1, animal2) {
    if (
      animal1.numberOfLegs !== animal2.numberOfLegs ||
      animal1.name === animal2.name
    ) {
      throw new Error(
        "These animals are invalid, too lazy to type why so just be annoyed"
      );
    }

    super(
      animal1.name + animal2.name,
      animal1.numberOfLegs,
      animal1.sound + animal2.sound
    );
    this.animal1 = animal1;
    this.animal2 = animal2;
  }
}

import { readFileSync } from "fs";
import { CLIENT_RENEG_LIMIT } from "tls";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const animalData = fileReader("./animals.txt");
console.log(animalData);
const animals = [];

for (let i = 1; i < animalData.length; i++) {
  const animalParts = animalData[i].split(",");
  const animal = new Animal(animalParts[0], animalParts[2], animalParts[3]);
  animals.push(animal);
}

function makeMonster(animal1, animal2) {
  const monster = new Monster(animal1, animal2);
  return monster;
}

const monster1 = makeMonster(animals[4], animals[5]);

console.log(monster1.name);

monster1.playSound();
console.log(monster1.sound);
