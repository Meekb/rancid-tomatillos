# Putrid Physalis Philadelphica

### Table of Contents
- [Overview](#overview)
- [Achitechture/ Learning Goals](#architechture)
- [Instructions for Viewing](#instructions-for-viewing)
- [Walkthrough](#walkthrough)
- [Tech Stack](#tech-stack)
- [Future Features](#future-features)
- [Contributors](#contributors)

## Front-End Mod 3 Project by: [Beth Meeker](https://github.com/Meekb) & [Em Orendorff](https://github.com/emorendorff)

## Overview
  What's more Putrid than a really bad movie? Nothing! Putrid Physalis Philadelphica is a React application that stores movie details for users 
to come and search through. Clicking a movie cover will navigate to the details for the title including: runtime, budget, revenue, and the YouTube
trailer. Search component allows users to search for a movie by title. What's your favorite movie, and how many Putridities would you rate it? Find out by visiting Putrid Physalis Philadelphica.

## Instructions for Viewing
  * Clone down this repo by copying the SSH key and from your terminal git clone <repo SSH key>
  * `npm i` to install dependencies
  * cd into the repo
  * `npm start` to activate the server
  * Open localhost:3000 in your browser to view the project
  * Endpoints for the API can be found here: https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html
  
# Architecture / Learning Goals 
  * Built with React to understand fundamentals of the language
  * Utilizes React Router for url navigation
  * Make application with the use of functional and class components
  * Retrieve and display movie data - endpoints all hosted on Heroku API
  * Testing performed with Cypress to better understand asych JS
  * Refactoring for multiple pages and components
  
# Walkthrough

![homepage](https://user-images.githubusercontent.com/77934658/126238800-2b8e9131-3825-4ff7-9da4-ed11bb2b9f26.gif)<br>
- As a user, you will see 40 available movies to select from. By clicking any one of these posters, you will be taken to a page displaying their corresponding details including overviews, trailers and ratings!
 
![searchcomponent](https://user-images.githubusercontent.com/77934658/126238817-f279d2e9-43bf-4ae1-ad6b-9624c354d253.gif)<br>

- Users have the ability to search titles using the search bar at the top. If no movies match what a user typed in, proper error handling will show.
  
![404handing](https://user-images.githubusercontent.com/77934658/126238835-e09bf94c-874e-4b71-a121-1e5c7e0ac6c3.gif)<br>
  
- Proper error handling for incorrect URL paths are also factored in, utilizing routing and error components. 

  
# Tech Stack
<table>
  <tr>
    <td>React</td>
    <td>React Router</td>
    <td>CSS</td>
    <td>Cypress</td>
  </tr>
  <tr>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react-router.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/css-3.svg"/></td>
    <td><img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/cypress.svg"/></td>
  </tr>
</table>
  
# Contributors
 
<table>
    <tr>
          <td> Em Orendorff <a href="https://github.com/emorendorff">GH</td>
    </tr>
    </tr>
 <td><img src="https://avatars.githubusercontent.com/u/77934658?v=4" alt="Em Orendorff avatar"
width="150" height="auto" /></td>
     <tr>
          <td> Beth Meeker <a href="https://github.com/meekb">GH</td>
      </tr>
      </tr>
<td><img src="https://avatars.githubusercontent.com/u/76264735?v=4" alt="Beth Meeker avatar"
width="150" height="auto" /></td>
    </tr>
</table>
  

Project Managers:  
  Kayla Wood https://github.com/kaylaewood  
  Scott Ertmer https://github.com/sertmer
  
Turing School of Software & Design https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html
  
