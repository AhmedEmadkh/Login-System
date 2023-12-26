# Smart Login System

## Overview

This project implements a simple Smart Login System with SignUp, Login, and a Bookmark feature. It uses HTML, CSS, Bootstrap, and JavaScript to create a user-friendly interface for signing up, logging in, and managing bookmarks.

## Features

- **SignUp Page:** Allows users to create a new account by providing their name, email, and password. Validates input fields and displays appropriate messages.
- **Login Page:** Enables existing users to log in using their email and password. Displays error messages for incorrect login attempts.

    - **Password Requirement:** Password must be more than 5 characters.
    - **Name Requirement:** Name must be more than 3 characters.
    - **Email Format:** Make sure the email does not have spaces at the end.

- **Home Page (Bookmark):** Once logged in, users can access the Bookmark page. Users can add website bookmarks, view their saved bookmarks in a table, visit the websites, and delete bookmarks.

## Technologies Used

- HTML
- CSS (including Bootstrap)
- JavaScript

## How to Use

1. **SignUp:**
   - Open `signup.html` in a web browser.
   - Enter your name, email, and password.
   - Click the "Sign Up" button.

2. **Login:**
   - Open `login.html` in a web browser.
   - Enter your email and password.
   - Click the "Login" button.
     - **Password Requirement:** Password must be more than 5 characters.
     - **Name Requirement:** Name must be more than 3 characters.
     - **Email Format:** Make sure the email does not have spaces at the end.

3. **Bookmark:**
   - After logging in, click on the "Logout" button to access the Bookmark page (`home.html`).
   - Enter the website name and URL in the input fields.
   - Click the "Submit" button to add a bookmark.
   - View the saved bookmarks in the table.
   - Visit or delete bookmarks using the provided buttons.

## Files and Structure

- **signup.html:** SignUp page.
- **login.html:** Login page.
- **home.html:** Bookmark page.
- **css/:** Contains stylesheets for different pages.
- **JS/:** Contains JavaScript files for each page.

