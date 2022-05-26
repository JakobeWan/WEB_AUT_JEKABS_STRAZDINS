
import BasePage from "./basePage";

class StudentRegistrationPage extends BasePage {
  static get url () {
    return '/automation-practice-form';
  }

  static get firstName () {
    return cy.get('#firstName');
  }

  static get lastName () {
    return cy.get('#lastName');
  }

  static get email() {
    return cy.get('#userEmail');
  }

  static get genderRadio () {
    return cy.get('#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1) > label');
  }

  static get phoneNumber () {
    return cy.get('#userNumber');
  }

  static get dateOfBirth () {
    return cy.get('#dateOfBirthInput');
  }

  static get month() {
    return cy.get('*[class^="react-datepicker__month-select"]');
  }

  static get year() {
    return cy.get('*[class^="react-datepicker__year-select"]');
  }

  static get dayCloseEnough () {
    return cy.get('*[class^="react-datepicker__day react-datepicker__day--025"]');
  }

  static get subjectsField () {
    return cy.get('#subjectsContainer');
  }

  static get subjects () {
    return cy.get('.subjects-auto-complete__menu');
  }

  static get hobbiesCheckbox () {
    return cy.get('#hobbiesWrapper label');
  }

  static get picture () {
    return cy.get('#uploadPicture');
  }

  static get address () {
    return cy.get('#currentAddress');
  }

  static get selectState () {
    return cy.get('#state > div');
  }

  static get selectCity () {
    return cy.get('#city > div');
  }

  static get submitButton () {
    return cy.get('#submit');
  }


  static get table () {
    return cy.get('.table-responsive');
  }

  static get closeButton () {
    return cy.get('#closeLargeModal');
  }


}

export default StudentRegistrationPage;