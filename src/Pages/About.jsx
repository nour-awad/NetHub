function About() {
    return (
      <div>
        <div id="about-container" className="d-flex flex-column align-items-center">
          <div id="about-project" className="flex-grow-1">
            <h1>Our Project</h1>
            <p>
              This trivia game aims to test your knowledge about various categories of popular culture. The game includes a timer, questions, and a leaderboard.
            </p>
          </div>
          <div id="team-members-container" className="d-flex justify-content-center">
            {/* Ahmed Taha */}
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Ahmed Taha"
                className="team-member-img"
              />
              <h3>Ahmed Taha</h3>
              <p>
                Ahmed specializes in React and worked on integrating the trivia question API.
              </p>
            </div>
  
            {/* Leila Gamal */}
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Leila Gamal"
                className="team-member-img"
              />
              <h3>Leila Gamal</h3>
              <p>
                Leila focused on UI/UX design and ensured the application is user-friendly.
              </p>
            </div>
  
            {/* Nour Awad */}
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Nour Awad"
                className="team-member-img"
              />
              <h3>Nour Awad</h3>
              <p>
                Nour contributed by building the leaderboard and managing state logic.
              </p>
            </div>
  
            {/* Faris Sharara */}
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Faris Sharara"
                className="team-member-img"
              />
              <h3>Faris Sharara</h3>
              <p>
                Faris led the development of the About page and implemented dynamic routing.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  