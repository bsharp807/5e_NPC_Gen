const RNG = require('./rng.js');

class RandomGeneration {

  static filteredMaleFirstName(race) {
    switch(race){
      case 'Orc':
        return this.randomOrcFirstName();
        break;
      case 'Elf':
        return this.randomElfFirstName();
        break;
      case 'Human':
        return this.randomHumanMaleFirstName();
        break;
      case 'Tiefling':
        return this.randomTieflingFirstName();
        break;
      case 'Dwarf':
        return this.randomDwarfFirstName();
        break;
      case 'Dragonborn':
        return this.randomDragonbornFirstName();
        break;
      case 'Halfelf':
        return this.randomHalfelfMaleFirstName();
        break;
      case 'Halfling':
        return this.randomHalflingFirstName();
        break;
      case 'Gnome':
        return this.randomGnomeFirstName();
        break;
      default:
        return 'SWITCH ERROR FIRST NAME';
    }
  }

  static filteredFemaleFirstName(race) {
    switch(race){
      case 'Orc':
        return this.randomOrcFirstName();
        break;
      case 'Elf':
        return this.randomElfFirstName();
        break;
      case 'Human':
        return this.randomHumanFemaleFirstName();
        break;
      case 'Tiefling':
        return this.randomTieflingFirstName();
        break;
      case 'Dwarf':
        return this.randomDwarfFirstName();
        break;
      case 'Dragonborn':
        return this.randomDragonbornFirstName();
        break;
      case 'Halfelf':
        return this.randomHalfelfFemaleFirstName();
        break;
      case 'Halfling':
        return this.randomHalflingFirstName();
        break;
      case 'Gnome':
        return this.randomGnomeFirstName();
        break;
      default:
        return 'SWITCH ERROR FIRST NAME';
    }
  }

  static genderedRaceNameFilter(race, gender) {
    switch(gender) {
      case 'female':
        return this.filteredFemaleFirstName(race);
        break;
       case 'male':
        return this.filteredMaleFirstName(race);
        break;
      default:
        return 'SWITCH ERROR GENDERED RACE FILTER';
    }
  }

  static filteredLastName(race) {
    switch(race){
      case 'Orc':
        return this.randomOrcLastName();
        break;
      case 'Elf':
        return this.randomElfLastName();
        break;
      case 'Human':
        return this.randomHumanLastName();
        break;
      case 'Tiefling':
        return this.randomTieflingLastName();
        break;
      case 'Dwarf':
        return this.randomDwarfLastName();
        break;
      case 'Dragonborn':
        return this.randomDragonbornLastName();
        break;
      case 'Halfelf':
        return this.randomHalfelfLastName();
        break;
      case 'Halfling':
        return this.randomHalflingLastName();
        break;
      case 'Gnome':
        return this.randomGnomeLastName();
        break;
      default:
        return 'SWITCH ERROR LAST NAME';
    }
  }

  static randomOrcFirstName() {
    const rng = new RNG();
    const firstName = rng.randArray(this.data.orc_names);
    return firstName.name
  }

  static randomElfFirstName() {
    const rng = new RNG();
    const firstName = rng.randArray(this.data.elf_names);
    return firstName.name
  }

  static randomHumanFemaleFirstName() {
    const rng = new RNG();
    const firstName = rng.randArray(this.data.female_human_names);
    return firstName.name
  }

  static randomHumanMaleFirstName() {
    const rng = new RNG();
    const firstName = rng.randArray(this.data.male_human_names);
    return firstName.name
  }

  static randomTieflingFirstName() {
    const rng = new RNG();
    const firstName = rng.randArray(this.data.tiefling_names);
    return firstName.name
  }

  static randomDwarfFirstName() {
    const rng = new RNG();
    const firstName = rng.randArray(this.data.dwarf_names);
    return firstName.name
  }

  static randomDragonbornFirstName() {
    const rng = new RNG();
    const firstName = rng.randArray(this.data.dragonborn_names);
    return firstName.name
  }

  static randomGnomeFirstName() {
    const rng = new RNG();
    const firstName = rng.randArray(this.data.gnome_names);
    return firstName.name
  }

  static randomHalfelfFemaleFirstName() {
    const rng = new RNG();
    const firstName = rng.randArray(this.data.female_halfelf_names);
    return firstName.name
  }

  static andomHalfelfMaleFirstName() {
    const rng = new RNG();
    const firstName = rng.randArray(this.data.male_halfelf_names);
    return firstName.name
  }

  static randomHalflingFirstName() {
    const rng = new RNG();
    const firstName = rng.randArray(this.data.halfling_names);
    return firstName.name
  }

  static randomOrcLastName() {
    const rng = new RNG();
    const lastName = rng.randArray(this.data.orc_surnames);
    return lastName.name
  }

  static randomDragonbornLastName() {
    const rng = new RNG();
    const lastName = rng.randArray(this.data.dragonborn_surnames);
    return lastName.name
  }

  static randomGnomeLastName() {
    const rng = new RNG();
    const lastName = rng.randArray(this.data.gnome_surnames);
    return lastName.name
  }

  static randomHalfelfLastName() {
    const rng = new RNG();
    const lastName = rng.randArray(this.data.halfelf_surnames);
    return lastName.name
  }

  static randomHalflingLastName() {
    const rng = new RNG();
    const lastName = rng.randArray(this.data.halfling_surnames);
    return lastName.name
  }

  static randomElfLastName() {
    const rng = new RNG();
    const lastName = rng.randArray(this.data.elf_surnames);
    return lastName.name
  }

  static randomHumanLastName() {
    const rng = new RNG();
    const lastName = rng.randArray(this.data.human_surnames);
    return lastName.name
  }

  static randomTieflingLastName() {
    const rng = new RNG();
    const lastName = rng.randArray(this.data.tiefling_surnames);
    return lastName.name
  }

  static randomDwarfLastName() {
    const rng = new RNG();
    const lastName = rng.randArray(this.data.dwarf_surnames);
    return lastName.name
  }

  static randomRace() {
    const rng = new RNG();
    const race = rng.randArray(this.data.races);
    return race.race
  }

  static randomJob() {
    const rng = new RNG();
    const job = rng.randArray(this.data.jobs);
    return job.job
  }

  static randomAge() {
    const rng = new RNG();
    return rng.randNum(35, 14);
  }

  static randomSkill() {
    const rng = new RNG();
    const skill = rng.randArray(this.data.skills);
    return skill.skill;
  }

  static randomTrait() {
    const rng = new RNG();
    const trait = rng.randArray(this.data.traits);
    return trait.trait;
  }

  static randomAppearance() {
    const rng = new RNG();
    const appearance = rng.randArray(this.data.appearances);
    return appearance.appearance;
  }

  static randomTalent() {
    const rng = new RNG();
    const talent = rng.randArray(this.data.talents);
    return talent.talent;
  }

  static randomMannerism() {
    const rng = new RNG();
    const mannerism = rng.randArray(this.data.mannerisms);
    return mannerism.mannerism;
  }

  static randomIdeal() {
    const rng = new RNG();
    const ideal = rng.randArray(this.data.ideals);
    return ideal.ideal;
  }

  static randomBond() {
    const rng = new RNG();
    const bond = rng.randArray(this.data.bonds);
    return bond.bond;
  }

  static randomFlaw() {
    const rng = new RNG();
    const flaw = rng.randArray(this.data.flaws);
    return flaw.flaw;
  }

  static randomBirthplace() {
    const rng = new RNG();
    const birthplace = rng.randArray(this.data.birthplaces);
    return birthplace.birthplace;
  }

  static randomGender() {
    const rng = new RNG();
    const decider = rng.randNum(2,1);
    switch(decider) {
      case 1:
        return 'female';
        break;
      case 2:
        return 'male';
        break;
      default:
        return 'ERROR IN GENDER SWITCH';
    }
  }
}

module.exports = RandomGeneration;
