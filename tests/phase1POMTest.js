var request = require('sync-request');

beforeEach(function () {
	browser.url('./Contact-Us/contactus.html')
});

describe('Test contact us form from WebdriverUniversity.com',function(){
	var res = request('GET','http://jsonplaceholder.typicode.com/posts/1/comments');
	var contactusDetails = JSON.parse(res.getBody().toString('utf8'));

	contactusDetails.forEach(function (contactusDetails){
		it('Should be able to submit a successful submission via contact us form', function(done){
			browser.setValue("[name='first_name']",'Bhanu');
			browser.setValue("[name='last_name']",contactusDetails.name);
			browser.setValue("[name='email']",contactusDetails.email);
			browser.setValue("[name='message']",contactusDetails.body);
			browser.click("[type='submit']");

			var successfulSubmission = browser.getText('#contact_reply h1');
			expect(successfulSubmission).to.equal('Thank you for your Message!');
		});
	});
	
	it('Should not be able to submit a successful submission via contact us form', function(done){
		browser.setValue("[name='first_name']",'Bhanu');
		browser.setValue("[name='last_name']",'Vaddi');
		browser.setValue("[name='message']",'this is some message for WebdriverIO Test');
		browser.click("[type='submit']");
	});

	it('Should not be able to submit a successful submission via contact us form', function(done){
		browser.setValue("[name='first_name']",'Bhanu');
		browser.setValue("[name='email']",'Bhanu@gmail.com');
		browser.setValue("[name='message']",'this is some message for WebdriverIO Test');
		browser.click("[type='submit']");
	});

	it('Should not be able to submit a successful submission via contact us form', function(done){
		browser.setValue("[name='last_name']",'Vaddi');
		browser.setValue("[name='email']",'Bhanu@gmail.com');
		browser.setValue("[name='message']",'this is some message for WebdriverIO Test');
		browser.click("[type='submit']");
	});

	it('Should not be able to submit a successful submission via contact us form', function(done){
		[type='submit']
	});
});