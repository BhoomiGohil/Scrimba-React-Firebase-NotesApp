# Scrimba React Firebase Notes App

This project is a notes application built using React for the frontend and Firebase Firestore for data storage. Users can create, edit, and delete notes, and all changes are synced to Firestore. The app features a markdown editor for enhanced note formatting.

## Features

- Create new notes with a click of a button.
- Edit notes using a markdown editor with live preview.
- Delete notes.
- Notes are stored and synced with Firebase Firestore.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Firebase Firestore**: NoSQL cloud database to store and sync data in real time.
- **ReactMde**: A Markdown editor component for React.
- **Showdown**: A JavaScript Markdown to HTML converter.

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/YourUsername/Scrimba-React-Firebase-NotesApp.git
   cd Scrimba-React-Firebase-NotesApp
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Add your Firebase credentials in the `firebaseConfig` object in `firebase.js`.

4. Start the development server:

   ```bash
   npm start
   ```

5. Visit `http://localhost:3000` in your browser to view the app.

## Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable Firestore and create a collection named `notes`.
3. Replace the Firebase configuration object in the `firebase.js` file with your own project credentials.
