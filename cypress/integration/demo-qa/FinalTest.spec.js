import StudentRegistrationPage from "../../pageObjects/studentRegistrationPage";

context("Practice Form Page", () => {
  context("Student registration page",()=> {
    beforeEach(() => {
      StudentRegistrationPage.visit();
    });

    it("Filling student registration Form scenario", () => {
      cy.fixture("studentData").then((data) => {


        // Registering new student using fixture
        StudentRegistrationPage.firstName.type(data.firstName);
        StudentRegistrationPage.lastName.type(data.lastName);
        StudentRegistrationPage.email.type(data.email);
        StudentRegistrationPage.genderRadio.contains(data.gender).click();
        StudentRegistrationPage.phoneNumber.type(data.phoneNumber);
        StudentRegistrationPage.dateOfBirth.click();
        StudentRegistrationPage.month.select(data.month);
        StudentRegistrationPage.year.select(data.year);
        StudentRegistrationPage.dayCloseEnough.click();
        StudentRegistrationPage.subjectsField.type(data.subject);
        StudentRegistrationPage.subjects.click();
        StudentRegistrationPage.hobbiesCheckbox.contains(data.hobby).click();
        StudentRegistrationPage.picture.selectFile("cypress/files/" + data.file);
        StudentRegistrationPage.address.type(data.address);
        StudentRegistrationPage.selectState.contains("Select State").click();
        StudentRegistrationPage.selectState.contains(data.state).click();
        StudentRegistrationPage.selectCity.contains("Select City").click();
        StudentRegistrationPage.selectCity.contains(data.city).click();
        StudentRegistrationPage.submitButton.click();

        // Verification


       StudentRegistrationPage.table
        .should('contain', data.firstName);
       StudentRegistrationPage.table
        .should('contain', data.lastName);
       StudentRegistrationPage.table
        .should('contain', data.email);
       StudentRegistrationPage.table
        .should('contain', data.gender);
       StudentRegistrationPage.table
        .should('contain', data.phoneNumber);
       StudentRegistrationPage.table
        .should('contain', data.month);
       StudentRegistrationPage.table
        .should('contain', data.year);
       StudentRegistrationPage.table
        .should('contain', data.day);
       StudentRegistrationPage.table
        .should('contain', data.subject);
       StudentRegistrationPage.table
        .should('contain', data.hobby);
       StudentRegistrationPage.table
        .should('contain', data.file);
       StudentRegistrationPage.table
        .should('contain', data.address);
       StudentRegistrationPage.table
        .should('contain', data.state);
       StudentRegistrationPage.table
        .should('contain', data.city);

    
        StudentRegistrationPage.closeButton.click();
      });
    });
    });
    });
