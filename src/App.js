import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      {/* Background Video */}
      <video autoPlay loop muted className="bg-video">
        <source src="bg-video.mp4" type="video/mp4" />
      </video>

      {/* Navbar */}
      <nav className="navbar">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Main Content */}
      <div className="content">
        <section id="about">
          <h1>About Me</h1>
          <p>
            I’m Jaya Sakthi, an ECE student passionate about IoT, AI, and web
            development.
          </p>
        </section>

        <section id="projects">
          <h1>Projects</h1>
          <ul>
            <li>🔋 IoT-based Battery Management System</li>
            <li>🎵 Mood-Based Music Recommendation System</li>
            <li>🤖 Obstacle Avoiding Robot with Bluetooth Control</li>
          </ul>
        </section>

        <section id="contact">
          <h1>Contact</h1>
          <p>Email: jayasakthis102004@gmail.com</p>
          <p>Phone: +91 9345877531</p>
          <p>
            <a
              href="https://github.com/JAYASAKTHI07"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            |
            <a
              href="https://www.linkedin.com/in/jaya-sakthi-s-a02170259"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              LinkedIn
            </a>
          </p>
          <br />
          <a href="/Jaya_Sakthi_Resume.pdf" download className="resume-button">
            📄 Download Resume
          </a>
        </section>
      </div>
    </div>
  );
}

export default App;
