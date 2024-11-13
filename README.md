# Favorite Repositories App

This is a simple app that allows users to browse GitHub repositories and manage their favorite repositories by adding and removing them from a list. The app is built using **React** and **TypeScript**, and the data is persisted in the browser’s **localStorage**, so even if the page is refreshed, the favorite repositories remain intact.

## Features

- **Add repositories** to the favorite list from the main page.
- **View favorite repositories** on the "Favorites" page.
- **Remove repositories** from the favorite list.
- Uses **localStorage** to persist favorite repositories across page reloads.
- Built with **React** and **TypeScript** for a modern and type-safe development experience.

## Installation

To set up and run this project locally, follow the steps below:

### 1. Clone the repository

```bash
git clone https://github.com/your-username/favorite-repositories.git

2. Install dependencies
Navigate to the project directory and install the dependencies:

bash
Copy code
cd favorite-repositories
npm install

3. Run the app
To start the app in development mode, use the following command:

bash
Copy code
npm start
The app will be available at http://localhost:3000 in your browser.

Project Structure
The project is organized as follows:

src/
components/: Contains reusable components such as Card and ShowBox to display repositories.
features/: Includes the state management logic for repositories (e.g., adding/removing favorites).
styles/: Contains CSS module files for styling components.
App.tsx: The main component of the application.
index.tsx: The entry point of the app where React is initialized.
How It Works
Adding to Favorites: When a user clicks the "star" button on a repository card, that repository is added to the list of favorite repositories. This list is stored in localStorage.

Viewing Favorites: The "Favorites" page automatically loads and displays the repositories saved in localStorage.

Removing from Favorites: A user can also remove repositories from their favorite list. When removed, the repository is deleted from localStorage, and the page is automatically updated.

Persistence: All data is persisted in the browser using localStorage, ensuring the favorite repositories are available even if the page is refreshed.

Technologies Used
React: For building the user interface.
TypeScript: To provide type safety and help catch potential bugs during development.
localStorage: For storing and persisting the list of favorite repositories in the browser.
CSS Modules: For scoped and modular styling of components.
Contributing
If you'd like to contribute to this project, feel free to fork the repository, make changes, and submit a pull request.

Steps to contribute:
Fork the repository.
Make your changes.
Submit a Pull Request with a description of the changes you made.
License
This project is licensed under the MIT License. See the LICENSE file for more details.

Developer
This project was created by Mahdi Khoshghadam Zadeh. Feel free to reach out if you have any questions or feedback.

Thank you for using the Favorite Repositories App! 🎉

markdown
Copy code

### Key Sections of the `README`:

- **Project Overview**: Describes what the app does, such as managing and viewing favorite GitHub repositories.
- **Features**: Highlights the key functionalities of the app (adding/removing favorite repositories, local storage persistence, etc.).
- **Installation Instructions**: Explains how to set up and run the project locally.
- **Project Structure**: Provides a high-level view of the project's folder and file organization.
- **How It Works**: Describes the flow of the app, including adding, viewing, and removing favorite repositories, and how `localStorage` is used for persistence.
- **Technologies Used**: Lists the main technologies used in the project, such as React, TypeScript, `localStorage`, and CSS modules.
- **Contributing**: Explains how others can contribute to the project.
- **License**: Includes license information (MIT License in this case).
- **Developer**: Mentions the developer (you) and invites feedback or questions.

### Customization:
- Replace `[Your Name]` with your actual name or GitHub username.
- You can also add links to your GitHub profile or additional documentation if needed.

Let me know if you need any further modifications!
