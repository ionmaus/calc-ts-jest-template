export class User {
  name: string;
  lastName: string;
  age: number;
  phoneNumber: string;
  address: string;
  consentGiven: boolean | undefined;

  constructor(
    name: string,
    lastName: string,
    age: number,
    phoneNumber: string,
    address: string,
  ) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
}
