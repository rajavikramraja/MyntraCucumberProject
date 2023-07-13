Feature:
To check the Myntra application 
@smoke

Scenario Outline:

To check the Search Functionality
Given To launch the Browser and maximize the window
When To launch the Myntra url
And To Mouseover to the Search
And To Search the "<Product>"
Then To close the entire browser
Examples:
|Product|
|Tshirt|
|Pant|
|Shirt|