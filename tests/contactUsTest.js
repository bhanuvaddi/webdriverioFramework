var ContactUsPage = require("../pageObjects/ContactUsPage_Class.js");

beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni_Suite1', function() {

  it('Should be able to submit a successful submission via contact us form', function(done) {
  	ContactUsPage.submitAllInformationViaContactUsForm('joe','Blogs','joe.Blogs@email.com','Hello WebdriverUni');
	});

  it('Should not be able to submit a successful submission via contact us form as all fields are required_1', function(done) {
  	ContactUsPage.setFirstName('Mike');
  	ContactUsPage.setLastName('Woods');
  	ContactUsPage.setEmailAddress('mike_woods@mail.com');
  	ContactUsPage.clickSubmitButton();
  	ContactUsPage.confirmUnsuccessfulSubmission();
  	//ContactUsPage.submitAllInformationViaContactUsForm('Mike','Woods','mike_woods@mail.com',null);
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required_2', function(done) {
  	ContactUsPage.setFirstName('Sarah');
  	ContactUsPage.setEmailAddress('sarah_woods@mail.com');
  	ContactUsPage.clickSubmitButton();
  	ContactUsPage.confirmUnsuccessfulSubmission();
  	// ContactUsPage.submitAllInformationViaContactUsForm('Mike','Woods','mike_woods@mail.com',null);
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required_3', function(done) {
  	ContactUsPage.setLastName('Jomes');
  	ContactUsPage.setEmailAddress('sarah_Jomes@mail.com');
  	ContactUsPage.clickSubmitButton();
  	ContactUsPage.confirmUnsuccessfulSubmission();
    });

});

describe('Test Contact Us form WebdriverUni_Suite2', function() {

  it('Should be able to submit a successful submission via contact us form', function(done) {
  	ContactUsPage.submitAllInformationViaContactUsForm('joe','Blogs','joe.Blogs@email.com','Hello WebdriverUni');
	});

  it('Should not be able to submit a successful submission via contact us form as all fields are required_1', function(done) {
  	ContactUsPage.setFirstName('Mike');
  	ContactUsPage.setLastName('Woods');
  	ContactUsPage.setEmailAddress('mike_woods@mail.com');
  	ContactUsPage.clickSubmitButton();
  	ContactUsPage.confirmUnsuccessfulSubmission();
  	//ContactUsPage.submitAllInformationViaContactUsForm('Mike','Woods','mike_woods@mail.com',null);
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required_2', function(done) {
  	ContactUsPage.setFirstName('Sarah');
  	ContactUsPage.setEmailAddress('sarah_woods@mail.com');
  	ContactUsPage.clickSubmitButton();
  	ContactUsPage.confirmUnsuccessfulSubmission();
  	// ContactUsPage.submitAllInformationViaContactUsForm('Mike','Woods','mike_woods@mail.com',null);
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required_3', function(done) {
  	ContactUsPage.setLastName('Jomes');
  	ContactUsPage.setEmailAddress('sarah_Jomes@mail.com');
  	ContactUsPage.clickSubmitButton();
  	ContactUsPage.confirmUnsuccessfulSubmission();
    });

});