# Travelr website
## Introduction
Travelr is a specialist travel company that wants to do a small number of vacatian experiences well. It wants to emphasise the experiential to the customer, and appeal to the individualist.

The website lays the foundation for this, enabling a user to take a very quick quiz to produce a personalised approach, or else view all destinations and filter down using a checkbox system. 

The intention is this website could then be built on to develop a full booking system, or flesh out the details of each destination as required. 

## User Experience
### Strategy

The decison on which features to implement and how stemmed from key user objectives:
* Get a personalised result within 20 seconds
* Allow the user to view all options
* Filter the destination by category
  
### User Stories
These objectives were then broken down into User Stories, alongisde Stories important from the perspective of the business owner:
01. As the customer, I want to be shown holidays I may be most interested in quickly.

02. As the customer, I want to be able to take a quick quiz to receive a personalised approach.

03. As the customer, I want to be able to choose not to take the quiz if it doesn't interest me.

04. As the customer, I want to be able to view all options quickly in a scrollable format so I can skim read.

05. As the customer, I want data to be legible on a mobile device.

06. As the customer, I want to be able to filter data to receive a smaller set of results that is more likely to be of interest to me. 

### Wireframes

Balsamiq was used to create the wireframes for this project. The designs took a mobile first approach from origin, where simplicity was key, for users to quickly find the results they're interested in:
![index phone wireframe](https://github.com/vicgoodall/travelr/blob/main/assets/images/wireframes/wireframe.png)

### Look and Feel

The colour palette for this project is minimal, to ensure the destination image vibrancy stands out. 
To keep the pages accessible, a white background is used with a deep purple text to ensure legibility. The destination results background is a light purple to stand out against the white background. 

## Features

### Overall Principle
* Mobile-first design 

* Filtered results that reset easily, so user can change their search

* Focus on getting to preferred results quickly from almost 20 variants, via filter or quiz

### Home Page

* User welcomed with company name, very brief description and suggestion to take short quiz.

* Can alternatively navigate directly to results.

* Footer: User provided with business contact details & map to show business location. Socials are also provided. 

### Quiz

* Still on the home page, the user can take a quiz of three questions, each with 2 options. Pressing a button leads to the next option. Quiz is managed via event listeners in JavaScript

* The user receives at least one result at the end of the quiz, all results contain image, brief tagline and a link to the more detailed results page. 

* Pressing the link button takes the user to the associated card directly. They can navigate to wider results from there. 

### Results

* Filter results based on category of holiday. Filter managed via methods in JavaScript.

* User is able to check as many boxes as they want. 

* When a box is unchecked, applicable cards are removed from results list. If all boxes are unchecked by the user, all results are displayed again.

* Results are shown as cards with image and basic description. It's a basic structure that can easily be added to (eg. section with symbols to show amenities available; image gallery; pop-out with longer details; booking API; pricing details, etc.)

* Footer is displayed as previous

## Technologies

### Languages used
* HTML5
* CSS3
* JavaScript

### Frameworks, Libraries and Programs used
* [Balsamiq](https://balsamiq.cloud/): Used as noted above to draw up the initial wireframes.
* [Font Awesome](https://fontawesome.com/): Provided the social media icons located in the footer.
* [Bootstrap](https://getbootstrap.com/): Provided the grid system used to create the footer.
* [JQuery](https://jquery.com/): Used to create the quiz and display appropriate cards in response. 
* [TinyPNG](https://tinypng.com/) was used to reduce image size.
* [Gitpod](https://gitpod.io/): For writing code, committing and pushing to GitHub.
* [GitHub](https://github.com/): Storage of the project once pushed.
* [Chrome DevTools](https://developer.chrome.com/docs/devtools/): The primary resource for testing, particularly testing the filter function as it was being written.
* [W3C Markup Validator](https://validator.w3.org/): Used to validate the HTML.
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/): Used to validate the CSS.
* [JSHint](https://jshint.com/): Used to validate JavaScript.

## Testing

### Acceptance Criteria

The User Stories were broken down into statements that would indicate they had been implemented successfully:

01. As the customer, I want to be shown holidays I may be most interested in quickly.

* a) Given the user has arrived on the home page, when they first arrive on the site they can immediately view all options
* b) Given the user has arrived on the home page, the user can take a quiz without scrolling 

02. As the customer, I want to be able to take a quick quiz to receive a personalised approach.

* a) Given the user has decided to take the quiz, the can receive a result within 20 seconds

* b) Given the user is completing the quiz, they answer three different questions

* c) Given the user has completed the quiz, they receive a relevant result

* d) Given the user has received their results, they are able to navigate quickly between the result card and fuller details. 

03. As the customer, I want to be able to choose not to take the quiz if it doesn't interest me.

* a) As the customer, I want the option to skip the quiz to be clearly visible without scrolling

* b) When I click the results link, I skip the quiz and leave the home page entirely

04. As the customer, I want to be able to view all options quickly in a scrollable format so I can skim read.

* a) Given the user has navigated to the results page, all options are by default available to scroll through in a list format

05. As the customer, I want data to be legible on a mobile device.

* a) Given the customer is using a mobile device, when they scroll through results, the images and text are easily legible at default setting on the browser.

06. As the customer, I want to be able to filter data to receive a smaller set of results that is more likely to be of interest to me. 

* a) Given the user is viewing the results page, they have an option available to filter results by type of vacation.

* b) Given the user is filtering the results, they are able to select as mnay checkboxes as they choose

* c) As the user checks a box, the page will amend to show results which are associated to the selected box

* d) If the user de-selects all checkboxes, all results will be displayed again as previous

* e) The user is able to amend their selection as they wish.

### Test Plan

The above acceptance criteria thus provided scenarios which were testable.

### Test Results

The following shows the results of final testing:

| Test ID.   | Mobile Result.   | Desktop Result     |
|---|----|----|
| 1A| Pass | Pass |
|1B| Pass | Pass |
|2A| Pass | Pass |
|2B| Pass | Pass |
|2C| Pass | Pass |
|2D| Pass | Pass |
|3A| Pass | Pass |
|3B| Pass | Pass |
|4A| Pass | Pass |
|5A| Pass | Pass |
|6A| Pass | Pass |
|6B| Pass | Pass |
|6C| Pass | Pass |
|6D| Pass | Pass |
|6E| Pass | Pass |

### Defects

* The filter originally would not display all results again once the user had de-selected all checkboxes. This was fixed by creating an additional reset function.

* The filter was only displaying cards that were associated to the first checkbox selected if multiple were selected. By moving the categories into an array that could be cross-checked against the selected values, this was resolved.

* The quiz buttons were changing from purple to their standard Bootstrap blue when the additional questions were triggered. This was fixed by adding the styling into the functions as the new questions were generated.

### Code Validation

* JSHint showed multiple code lines missing semi-colons, which was amended. 

* CSS Validation found 'size' had erroneously been used. This was replaced by font-size as it was for text.

* HTML Validation found 'p' used as child of 'span' on multiple occasions. This was corrected.

### Browser Testing 

* The project was tested on Safari and Chrome with no functionality issues identified.

* Testing was completed on a 13" laptop screen and an iPhone 12.

## Deployment

Deployed via process:
* Login to GitHub and locate the GitHub Repository
* Select 'Settings'
* Within Settings, select 'Pages'
* Under Source, select the dropdown 'None' and then select 'Master Branch'
* A link is then provided to the website

## Credits

### Content
* Created by the developer

### Media
#### [Freepik](https://freepik.com/)
* Homepage image by pch.vector
#### [Pexels](https://www.pexels.com/)
* Golden Lake by "tobi"
* Lake Silver by Mali Maeder
* Great Salt Lake by Mark Ingraham
* Noguera Pallaresa by "pixabay"
* Eibsee Lake by El Jusuf
* Raja Ampat by John Cahil
* Palawan by Romel Duarte
* Canguu by Larry Snickers
* Byron Bay by "pixabay"
* Swiss Alps by S Migaj
* Arizona by Alex Pham
* Sapa by Duc Nguyen
* San Miguel de Allende by Robert Lozano
* Cairo by Alex Azabache
* New York by Vlad Alexandru Popa
* Lapland by Nadia Vasil'eva
* Japan by Alan Wang
* Bergen by Avonne Stalling

#### Code
* [W3Schools](https://www.w3schools.com/) was referenced to check how to add css functions to JQuery.
* [StackOverflow](https://stackoverflow.com/) inspired filter function by showing how an array could be filtered against another array.

## Finished Product
* ![001](https://github.com/vicgoodall/travelr/blob/main/assets/images/final-product/Image01.png)
* ![002](https://github.com/vicgoodall/travelr/blob/main/assets/images/final-product/Image02.png)
* ![003](https://github.com/vicgoodall/travelr/blob/main/assets/images/final-product/Image03.png)
* ![004](https://github.com/vicgoodall/travelr/blob/main/assets/images/final-product/Image04.png)
* ![005](https://github.com/vicgoodall/travelr/blob/main/assets/images/final-product/Image05.png)




