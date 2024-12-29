import React from "react";
import './css/Main.css';
import './css/About.css';

function About() {
  return (
    <div>
      <section className="hero">
        <h1 className="hero-title">About Us</h1>
        <div className="decorative-circle"></div>
        <div className="decorative-star"></div>
      </section>

      <div className="content">
        <h2>Our Project</h2>
        <p>
          This trivia game aims to test your knowledge about various categories of popular culture. The game includes a timer, questions, and a leaderboard.
        </p>
        <h2>Meet the Team</h2>
        <div id="team-members-container" className="team-container">
          {/* Team Member 1 */}
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Ahmed Taha"
              className="team-member-img"
            />
            <h3 className="team-member-name">Ahmed Taha</h3>
            <p className="team-member-description">
              Ahmed specializes in React and worked on integrating the trivia question API.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Leila Gamal"
              className="team-member-img"
            />
            <h3 className="team-member-name">Leila Gamal</h3>
            <p className="team-member-description">
              Leila focused on UI/UX design and ensured the application is user-friendly.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Nour Awad"
              className="team-member-img"
            />
            <h3 className="team-member-name">Nour Awad</h3>
            <p className="team-member-description">
              Nour contributed by building the leaderboard and managing state logic.
            </p>
          </div>

          {/* Team Member 4 */}
          <div className="team-member">
            <img
              src="https://via.placeholder.com/150"
              alt="Faris Sharara"
              className="team-member-img"
            />
            <h3 className="team-member-name">Faris Sharara</h3>
            <p className="team-member-description">
              Faris led the development of the About page and implemented dynamic routing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
