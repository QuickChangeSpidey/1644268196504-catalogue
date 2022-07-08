class watch {
  constructor(name, brand, price) {
    this.name = name;
    this.brand = brand;
    this.price = price;
  }

  get name() {
    return this.name;
  }

  set name(value) {
    this.name = value;
  }

  get brand() {
    return this.brand;
  }

  set brand(value) {
    this.brand = value;
  }

  get price() {
    return this.price;
  }

  set price(value) {
    this.price = value;
  }
}
