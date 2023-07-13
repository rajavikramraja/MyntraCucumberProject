package org.stepdefinition;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;

import org.base.Baseclass;
import org.expojo.PojoClassEx;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Myntra extends Baseclass{
	@Given("To launch the Browser and maximize the window")
	public void to_launch_the_Browser_and_maximize_the_window() {
	    
	    LaunchBrowserChrome();
	    windowMaximize();
	}

	@When("To launch the Myntra url")
	public void to_launch_the_Myntra_url() {
	    LaunchUrl("https://www.myntra.com/");
	    
	}

	@When("To Mouseover to the Search")
	public void to_Mouseover_to_the_Search() {
		imp();
		PojoClassEx p =new PojoClassEx();
	    moveTheCursor(p.getSearch());
	}

	@When("To Search the {string}")
	public void to_Search_the(String pr) throws AWTException {
		imp();
		PojoClassEx p =new PojoClassEx();
	    passText(pr, p.getSearch());
	    Robot r=new Robot();
	    r.keyPress(KeyEvent.VK_ENTER);
	    r.keyRelease(KeyEvent.VK_ENTER);
	}

	@Then("To close the entire browser")
	public void to_close_the_entire_browser() {
	    
	    closeEntireBrowser();
	}


}
