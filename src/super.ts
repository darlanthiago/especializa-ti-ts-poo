export class Address {
  constructor(address: string, zipcode: string, number?: number) {}
}

type UserProps = {
  name: string;
  email: string;
  active: boolean;
};

interface ManagerProps extends UserProps {
  code: string;
}

export class User {
  protected name: string;
  private email: string;
  private active: boolean;

  constructor(props: UserProps) {
    this.name = props.name;
    this.email = props.email;
    this.active = props.active;
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
  private code: string;
  constructor(props: ManagerProps) {
    super({
      name: props.name,
      email: props.email,
      active: props.active,
    });

    this.code = props.code;
  }
  getName(): string {
    return `Adm: ${this.name}`;
  }

  public getNumber(): number {
    return super.getNumber() + 10;
  }

  public getCode(): string {
    return this.code;
  }
}

const adm1 = new Admin({
  name: "ADMIN 1",
  email: "email@email.com",
  active: true,
  code: "123ABC",
});

console.log(adm1);
