import { config } from '../config/config'

const CREATURE = config.creature

class Creature {
  constructor(creature) {
    this.creature_name = creature.name
  }

  logName() {
    console.log('creature name', this.creature_name)
  }
}

const WARRIOR = CREATURE.warrior

export class Warrior extends Creature {
  constructor(opt) {
    super(WARRIOR) // 调用父类 constructor
    this.name = opt.name + WARRIOR.name
    this.level = opt.level || 1
    this.attr = WARRIOR.attributes
  }

  getWarriorDetail() {
    console.log('warrior detail:', this)
  }

  levelUp() {
    this.level += 1
    console.log('level up', this.level)
  }
}
