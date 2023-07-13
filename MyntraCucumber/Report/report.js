$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Mytra.feature");
formatter.feature({
  "name": "",
  "description": "To check the Myntra application ",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
  "description": "To check the Search Functionality",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "To launch the Browser and maximize the window",
  "keyword": "Given "
});
formatter.step({
  "name": "To launch the Myntra url",
  "keyword": "When "
});
formatter.step({
  "name": "To Mouseover to the Search",
  "keyword": "And "
});
formatter.step({
  "name": "To Search the \"\u003cProduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "To close the entire browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Product"
      ]
    },
    {
      "cells": [
        "Tshirt"
      ]
    },
    {
      "cells": [
        "Pant"
      ]
    },
    {
      "cells": [
        "Shirt"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "To check the Search Functionality",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "To launch the Browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "Myntra.to_launch_the_Browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the Myntra url",
  "keyword": "When "
});
formatter.match({
  "location": "Myntra.to_launch_the_Myntra_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Mouseover to the Search",
  "keyword": "And "
});
formatter.match({
  "location": "Myntra.to_Mouseover_to_the_Search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Search the \"Tshirt\"",
  "keyword": "And "
});
formatter.match({
  "location": "Myntra.to_Search_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the entire browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Myntra.to_close_the_entire_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "To check the Search Functionality",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "To launch the Browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "Myntra.to_launch_the_Browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the Myntra url",
  "keyword": "When "
});
formatter.match({
  "location": "Myntra.to_launch_the_Myntra_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Mouseover to the Search",
  "keyword": "And "
});
formatter.match({
  "location": "Myntra.to_Mouseover_to_the_Search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Search the \"Pant\"",
  "keyword": "And "
});
formatter.match({
  "location": "Myntra.to_Search_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the entire browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Myntra.to_close_the_entire_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "To check the Search Functionality",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "To launch the Browser and maximize the window",
  "keyword": "Given "
});
formatter.match({
  "location": "Myntra.to_launch_the_Browser_and_maximize_the_window()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To launch the Myntra url",
  "keyword": "When "
});
formatter.match({
  "location": "Myntra.to_launch_the_Myntra_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Mouseover to the Search",
  "keyword": "And "
});
formatter.match({
  "location": "Myntra.to_Mouseover_to_the_Search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To Search the \"Shirt\"",
  "keyword": "And "
});
formatter.match({
  "location": "Myntra.to_Search_the(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the entire browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Myntra.to_close_the_entire_browser()"
});
formatter.result({
  "status": "passed"
});
});