export class Address {
  private address: string;
  private zipcode: string;

  public static defaultValidation: number = 75000000;

  constructor(address: string, zipcode: string) {
    this.address = address;
    this.zipcode = zipcode;
  }

  public static isZipValid(zipcode: string): boolean {
    const zipCode = parseInt(zipcode.replace(/\D/g, ""));

    return zipCode > Address.defaultValidation ? true : false;
  }
}    

console.log(Address.defaultValidation);
console.log(Address.isZipValid("75813540"));
