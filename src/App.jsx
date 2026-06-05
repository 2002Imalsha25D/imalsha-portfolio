import "./App.css";
import profilePic from "./assets/profile.png";

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Imalsha</div>

        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">

        <img
          src={profilePic}
          alt="Imalsha Dulangi"
          className="profile-img"
        />

        <h1>A.G. Imalsha Dulangi</h1>

        <h2>Software Engineering Graduate</h2>

        <p className="hero-text">
          Software Engineering graduate with experience in Quality Assurance,
          IT Support, Software Testing, Web Development, Flutter, Firebase,
          and UI/UX Design.
        </p>

        <div className="buttons">

          <a
            href="https://www.linkedin.com/in/imalsha-dulangi-0b1673312?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/2002Imalsha25D"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            GitHub
          </a>

          <a href="#contact" className="btn">
            Contact Me
          </a>

        </div>

      </section>

      {/* About */}
      <section className="section" id="about">

        <h2>About Me</h2>

        <div className="card">
          <p>
            I am a Software Engineering graduate with a completed Higher
            National Diploma in Information Technology. I gained industry
            experience through ICP Technologies in Quality Assurance and
            IT Support. I am passionate about technology and continuously
            improving my skills through real-world projects.
          </p>
        </div>

      </section>

      {/* Education */}
      <section className="section" id="education">

        <h2>Education</h2>

        <div className="card">
          <h3>BSc (Hons) Software Engineering</h3>
          <p>University of Bedfordshire (UK)</p>
          <p>Completed – Results Pending</p>
        </div>

        <div className="card">
          <h3>Higher National Diploma in Information Technology</h3>
          <p>SLIIT City University</p>
          <p>Completed</p>
        </div>

      </section>

      {/* Experience */}
      <section className="section" id="experience">

        <h2>Experience</h2>

        <div className="card">

          <h3>QA & IT Support Trainee</h3>

          <p>
            ICP Technologies (Pvt) Ltd
          </p>

          <ul>
            <li>Software QA Testing</li>
            <li>Bug Reporting & Tracking</li>
            <li>Technical Support</li>
          </ul>

        </div>

      </section>

      {/* Skills */}
      <section className="section" id="skills">

        <h2>Technical Skills</h2>

        <div className="skills">

          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>PHP</span>
          <span>Flutter</span>
          <span>Firebase</span>
          <span>Java</span>
          <span>C++</span>
          <span>MySQL</span>
          <span>MongoDB</span>
          <span>GitHub</span>
          <span>Figma</span>
          <span>QA Testing</span>

        </div>

      </section>

      {/* Projects */}
      <section className="section" id="projects">

        <h2>Projects</h2>

        <div className="card">
          <h3>SnakeResQ</h3>
          <p>
            AI-Based Snake Species Detector and Catcher Coordination App
            using Flutter, Firebase, YOLO, CNN and LSTM.
          </p>
        </div>

        <div className="card">
          <h3>Web Game Application</h3>
          <p>
            Interactive browser-based game with scoring, levels and timer.
          </p>
        </div>

        <div className="card">
          <h3>Stock Management System</h3>
          <p>
            Inventory management and reporting solution.
          </p>
        </div>

        <div className="card">
          <h3>E-Commerce Cosmetics Website</h3>
          <p>
            Full-stack online shopping platform using PHP and MySQL.
          </p>
        </div>

      </section>

      {/* Contact */}
      <section className="section" id="contact">

        <h2>Contact</h2>

        <div className="card">
          <p><strong>Email:</strong> imalshadulangi25@gmail.com</p>
          <p><strong>Phone:</strong> 0729525929</p>
          <p><strong>Location:</strong> 115/B, Ginimellagaha-South</p>
        </div>

      </section>

      {/* Footer */}
      <footer className="footer">
        © 2025 A.G. Imalsha Dulangi | Portfolio Website
      </footer>

    </div>
  );
}

export default App;
