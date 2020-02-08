beforeEach(function () {
	browser.url('./Contact-Us/contactus.html')
});

describe('Test contact us form from WebdriverUniversity.com',function(){
	beforeEach(function () {
		console.log('inside the describe block');
	});
	it('Should be able to submit a successful submission via contact us form', function(done){
		browser.setValue("[name='first_name']",'Bhanu');
		browser.setValue("[name='last_name']",'Vaddi');
		browser.setValue("[name='email']",'Bhanu@gmail.com');
		browser.setValue("[name='message']",'this is some message for WebdriverIO Test');
		browser.click("[type='submit']");
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