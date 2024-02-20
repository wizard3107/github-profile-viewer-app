## Angular GitHub User Profile App
This is an Angular application that allows users to view GitHub user profiles and their repositories. It leverages Angular Material for UI components to provide a user-friendly interface.

## Features

Profile Page: Display basic user information such as name, avatar, bio, and number of repositories.

Repository List: Fetch and display a list of the user's GitHub repositories with pagination support.

Responsive UI: Utilize Angular Material for responsive and professional-looking UI components.

## Technical Requirements
Angular: Built using the latest version of Angular.

GitHub API Integration: Utilize GitHub API to fetch user and repository data.

Pagination: Implement pagination for the repository list.

Code Quality: Ensure clean, modular, and reusable code with proper commenting and documentation.

## Setup
## Clone the repository:

git clone https://github.com/your-username/angular-github-profile-app.git

## Navigate to the project directory:

cd angular-github-profile-app
     
## Install dependencies:

npm install

## Run the development server:

npm start
Open your browser and navigate to http://localhost:4200 to view the application.
## Project structure:
angular-github-profile-viewer/
├── src/

│   ├── app/

│   │   ├── components/            # Angular components

│   │   ├── services/              # Angular services

│   │   ├── models/                # Interfaces and models

│   │   ├── assets/                # Static assets

│   │   ├── app-routing.module.ts  # Angular routing module

│   │   └── app.module.ts          # Angular root module

│   ├── environments/              # Environment configuration

│   └── index.html                 # Main HTML file

├── .angular.json                  # Angular project configuration

├── package.json                   # NPM dependencies and scripts

└── README.md                      # Project documentation

## Usage
Enter a GitHub username in the search bar to view the corresponding user profile and repositories.

Click on a repository card to view detailed information about the repository.
