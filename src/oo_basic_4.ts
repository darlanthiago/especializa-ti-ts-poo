export class Address {
  constructor(
    public address: string,
    public readonly zipcode: string,
    public number?: number
  ) {}

  changeZipCode(newZipCode: string): void {
    // this.zipcode = newZipCode;
  }
}

const address = new Address("Rua ABC", "1234-567", 1234);

console.log(address);

// address.zipcode = "31231231";
// console.log(address);
