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
  name: string;
  email: string;
  active: boolean;
  address: Address;

  constructor(props: UserProps) {
    this.name = props.name;
    this.email = props.email;
    this.active = props.active;
    this.address = props.address;
  }
}

const user1 = new User({
  name: "User 1",
  email: "email@email.com",
  active: true,
  address: [{ address: "Rua ABC", zipcode: "12345-678", number: 12 }],
});

console.log(user1);
