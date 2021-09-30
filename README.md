# Saucy-Score

Party-Lure is a website allowing you to discover and review new hot sauces. The site can be found at: https://saucy-score.herokuapp.com/

## Development
* You can read more about the project using the wiki located at: https://github.com/VoodooJellyfish/saucy-score/wiki
* To start a development environment:
    1. Clone the repository at: https://github.com/VoodooJellyfish/saucy-score
    2. Run the command "npm install" from the react-app directory in your terminal to install dependencies for the front end
    3. Run the command "pipenv install" from the root directory in your terminal to install dependencies for the backend and create a virtual environment.
    4. Run the command "flask run" from the root directory to start the backend server.
    5. Run the command "npm start" from the react-app directory to start the frontend server.
    6. Navigate to the localhost port specified in config/index.js

## Technologies Used
* Javascript
* HTML/CSS
* Reactjs
* Python
* Node.js
* Flask
* Postgres
* Heroku
* Git/Github
* Redux

##  Features
* Users
    * User functionality including registration, Login/Logout authentication, and authorization to perform different CRUD operations throughout the site is all present.
    * The Bcrypt hashing algorithm is used to maintain password security.
    * All forms are protected against Csurf attacks
* Sauces
    * Authenticated users can submit new sauces for other users to review and read.
    * Authenticated users can edit sauces that have already submited, as well as delete their sauces.
    * Any user can view previously submitted sauces and reviews to those sauces.
* Reviews
    * Authenticated users can submit new reviews for other user's sauces (limit of one per sauce).
    * Authenticated users can edit the reviews they created, as well as delete their reviews.
    * Any user can view previously submitted sauces and reviews to those sauces.
* Profiles
    * Authenticated users have a profile page where they can view the sauces that they submitted, and the sauces that they have reviews
    * Authenticated users can edit their submitted sauces from the profile page
    * Profile page is not visible unless a user is logged in

 
## Challenges and Learnings
* I learned quickly how finiicky reactively updating components can be.  A lot of frustrations happened because an action would not have the desired update effects on either parent or child components
* Ihad a lot of reload/refresh errors that were caused by react being too fast, and rendering components without having the data loaded. The "?" operator was very important.


## Code Highlights
   * Coming soon...

## Features to be implemented later: 
  * Collections
    * Authenticated users can add/remove sauces from one of three default collections (wishlist, top 10, tried before)
  * Search
    * Users can search for sauce by name and navigate to that sauce. 
  

## Bugs that are still being worked on: 
  - Average scores from all reviews is not live updating with review submission/deletion on the sauceDetails page
  - If you submit a sauce, then make a review for that same sauce, and then delete that sauce, then go to your profile, you the previously deleted sauce is still showing. When clicked, this takes you to a bugged out reviews page
  - clean up warnings in console
## Database Structure
![](https://github.com/VoodooJellyfish/saucy-score/blob/main/visuals/sauceDiagram.png)

## Contributors
* [Tanner Pedretti](https://github.com/VoodooJellyfish) (VoodooJellyfish)
