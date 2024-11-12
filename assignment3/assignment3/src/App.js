// src/App.js
import React from "react";
import ProfilePage from "./ProfilePage";
import "./App.css";

function App() {
  const user = {
    profilePictureUrl: "ss.jpeg.jpg", // Replace with an actual image URL
    name: "pratik jadhav",
    email: "pratikjadhav12@gmail.com",
    bio: "A passionate developer with a love for React and NextJs.",
  };

  return (
    <div className="App">
      <ProfilePage user={user} />
    </div>
  );
}

export default App;
