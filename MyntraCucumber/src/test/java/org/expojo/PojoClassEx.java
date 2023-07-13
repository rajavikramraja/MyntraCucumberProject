package org.expojo;

import org.base.Baseclass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class PojoClassEx extends Baseclass{
	 public PojoClassEx() {
	PageFactory.initElements(driver, this);
	
	}
@FindBy(xpath = "//input[@class='desktop-searchBar']")
private WebElement search;
public WebElement getSearch() {
	return search;
}





}


