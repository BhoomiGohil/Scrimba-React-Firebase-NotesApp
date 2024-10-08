// Import the necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"; // Import Firestore functions

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration (Replace placeholders with actual configuration details)
const firebaseConfig = {
  apiKey: "API-Key", // API key for Firebase project
  authDomain: "", // Domain for authentication
  projectId: "", // Firebase project ID
  storageBucket: "", // Firebase storage bucket
  messagingSenderId: "", // Sender ID for Firebase messaging
  appId: "", // App ID for Firebase
};

// Initialize Firebase with the provided configuration
const app = initializeApp(firebaseConfig);

// Initialize Firestore database
const db = getFirestore(app); // Get Firestore instance for the app

// Create a reference to the 'notes' collection in Firestore
const notesCollection = collection(db, "notes"); // Reference to the "notes" collection
