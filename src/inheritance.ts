export class Address {
  constructor(address: string, zipcode: string, number?: number) {}
}

type UserProps = {
  name: string;
  email: string;
  active: boolean;
  address: Address[];
};

export class User {
  protected name: string;
  private email: string;
  private active: boolean;
  private address: Address;

  constructor(props: UserProps) {
    this.name = props.name;
    this.email = props.email;
    this.active = props.active;
    this.address = props.address;
  }

  getName(): string {
    return this.name;
  }

  public getNumber(): number {
    return 123;
  }
}

class Manager extends User {
  getName(): string {
    return `Manager: ${this.name}`;
  }

  public getNumber(): number {
    return 321;
  }
}

class Admin extends User {
  getName(): string {
    return `Adm: ${this.name}`;
  }

  public getNumber(): number {
    return 937861;
  }
}

const manager1 = new Manager({
  name: "User 1",
  email: "email@email.com",
  active: true,
  address: [{ address: "Rua ABC", zipcode: "12345-678", number: 12 }],
});

const adm1 = new Admin({
  name: "ADMIN 1",
  email: "email@email.com",
  active: true,
  address: [{ address: "Rua ABC", zipcode: "12345-678", number: 12 }],
});

console.log(adm1.getName());
