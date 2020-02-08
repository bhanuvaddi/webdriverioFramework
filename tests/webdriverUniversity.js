describe("Verify whether webdriveruniversity links on homepage work correctly", function(){
	it("check that the contact us button opens the contact us page", function(done){
		browser.windowHandleMaximize();
		browser.url('/');
		var title = browser.getTitle();
		expect(title).to.equal('WebDriverUniversity.com');
		console.log('Title is: ' + title);
		browser.click("#contact-us");
		var tabIds = browser.getTabIds();
		console.log(tabIds);
		browser.switchTab(tabIds[1]);
		var title2 = browser.getTitle();
		expect(title2).to.equal('WebDriver | Contact Us');

		var url = browser.getUrl();
		expect(url).to.include('Contact-Us','Url miss match');
		browser.close();
	});

	it("check that the login button opens the login portal page", function(done){
		browser.url('/');
		
		var title = browser.getTitle();
		title.should.equal('WebDriverUniversity.com');
		
		console.log('Title is: '+title);

		browser.click('#login-portal');
		var tabIds = browser.getTabIds();
		console.log(tabIds);
		browser.switchTab(tabIds[1])
		var title2 = browser.getTitle();
		expect(title2).to.equal('WebDriver | Login Portal');

		var url = browser.getUrl();
		expect(url).to.include('Login-Portal','Url miss match');
		browser.close();

	});

	it.skip("check that the browser navigates to webdriver io page", function(done){
		browser.url('https://webdriver.io/');
		browser.click('#search_input_react');
		browser.keys("sync mode").Enter;
		browser.pause(3000);
		var title = browser.getTitle();
		console.log('Title is: '+title);
		browser.pause(3000);
	});
});