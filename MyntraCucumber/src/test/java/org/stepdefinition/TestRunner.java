package org.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources", glue = "org.stepdefinition", 
dryRun = false, strict = false, tags = "@smoke", 
plugin = {
		"html:Report", "json:Report//reportjson.json", "junit:Report//reportxml.xml" })
public class TestRunner {

}
