import { User } from "./User";

export class Processor {
  static giveConsent(user: User): void {
    user.consentGiven = true;
  }
  static verifyConsent(user: User): boolean {
    return user.consentGiven === true;
  }
  static checkConsentEligibility(user: User): boolean {
    return user.age >= 18;
  }
  static revokeConsent(user: User): void {
    user.consentGiven = false;
  }
}
