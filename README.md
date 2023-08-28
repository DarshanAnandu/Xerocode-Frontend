# Full Stack Development Task - Frontend

This repository contains the frontend part of the Full Stack Development Task. The task involves building a user authentication system, user type selection, hosting option selection, and GitHub App integration.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [User Authentication](#user-authentication)
- [User Type Selection](#user-type-selection)
- [Hosting Option Selection](#hosting-option-selection)
- [GitHub App Integration](#github-app-integration)
- [Displaying Repositories](#displaying-repositories)

## Overview

This frontend application is built using React.js and styled using Tailwind CSS. It interacts with the backend server to handle user authentication, user type and hosting option selection, and GitHub App integration.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js: Install Node.js from [nodejs.org](https://nodejs.org/)
- Git: Install Git from [git-scm.com](https://git-scm.com/)

## Getting Started

1. Clone this repository:

   ```sh
   git clone <repository-url>
   cd frontend
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the application.

## User Authentication

This application uses JWT (JSON Web Tokens) for user authentication. It communicates with the backend to sign up and sign in users securely.

## User Type Selection

After successful sign-up or sign-in, users are prompted to choose their user type, such as Developer, Organization, or Company. The selected option is stored and communicated to the backend.

## Hosting Option Selection

Users are presented with hosting options: Self Hosting and XeroCode Hosting. When Self Hosting is selected, users can further choose between AWS and GitHub.

## GitHub App Integration

When GitHub is chosen as the hosting option, users are directed to install the GitHub App. The backend integrates with GitHub Apps API to fetch public and private repositories of the user.

## Displaying Repositories

After fetching repositories, a list of repositories is displayed to the user on the frontend.

---

This README provides an overview of the frontend part of the Full Stack Development Task. For more detailed instructions and code explanations, refer to the actual codebase and comments within the project files.

If you have any questions or need further assistance, please feel free to reach out to us.

Happy coding!

---

Remember to replace `<repository-url>` with the actual URL of your repository.

Feel free to customize this README based on your project's specifics and requirements. This sample README covers the major aspects of your frontend application and aims to provide clear instructions for anyone setting up and using the frontend of your project.