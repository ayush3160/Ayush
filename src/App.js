function App() {
  return (
    <div>
      <nav className="nav">
        <ul>
          <div className="pd">
            <li>
              <button
                className="btn"
                onClick={() => {
                  window.scrollBy(0, 670);
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                className="btn"
                onClick={() => {
                  window.scrollBy(0, 1300);
                }}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className="btn"
                onClick={() => {
                  window.scrollBy(0, 2500);
                }}
              >
                Contact Me
              </button>
            </li>
          </div>
        </ul>
      </nav>

      <div className="links">
        <ul>
          <li className="link">
            <a href="https://github.com/ayush3160" target="_blank">
              <img src="./25231.png" className="img" />
            </a>
          </li>
          <li className="link">
            <a
              href="mailto:ayushsharma3160@gmail.com?subject=Hi I saw your profile"
              target="_blank"
            >
              <img
                src="./Telegram-icon-with-black-color-on-transparent-background-PNG.png"
                className="img"
              />
            </a>
          </li>
          <li className="link">
            <a
              href="https://www.linkedin.com/in/ayush-sharma-6b5803235/"
              target="_blank"
            >
              <img
                src="./logo-linkedin-logo-icon-png-svg.png"
                className="img"
              />
            </a>
          </li>
          <li className="link">
            <a href="https://www.instagram.com/ayushhsharma22" target="_blank">
              <img src="./87390.png" className="img" />
            </a>
          </li>
          <li>
            <div className="line"></div>
          </li>
        </ul>
      </div>
      <div className="content">
        <div className="main">
          <p style={{ color: "rgb(0, 255, 255)", lineHeight: "0px" }}>
            Hi,my name is
          </p>
          <h1 style={{ fontSize: "50px", color: "white", opacity: "0.8" }}>
            Ayush Sharma
          </h1>
          <p style={{ color: "white", opacity: "0.5" }}>
            I am a passionate software developer based in Delhi, India
            specialized in building exceptional software products, applications,
            services and everything in between.
          </p>
          <button className="button">
            <a href="mailto:ayushsharma3160@gmail.com?subject=Hi I saw your profile">
              Get in Touch
            </a>
          </button>
        </div>
        <div className="about">
          <h2 style={{ color: "white" }}>
            <span style={{ color: "rgb(0, 255, 255)", fontSize: "20px" }}>
              01.{" "}
            </span>
            About Me
          </h2>
          <p style={{ color: "white", opacity: "0.7", lineHeight: "10px" }}>
            Hello, I am Ayush Sharma. A passionate software developer from
            India.
          </p>
          <br />
          <p style={{ color: "white", opacity: "0.7" }}>
            As a highly-motivated and results-oriented software developer I have
            a proven track record of providing extraordinarily levels of
            software quality, service and consulting to a broad range of people
            from small, medium and large sizes.
          </p>
          <br />
          <p style={{ color: "white", opacity: "0.7" }}>
            I am always looking to secure and expand a responsible position in
            an IT organization, where I can bring immediate and strategic value
            and develop current skillset further and beyond the actual status
            quo. I love working with cutting-edge technology and playing with
            the latest gadgets.
          </p>
          <br />
          <p style={{ color: "white", opacity: "0.7" }}>
            Some selected technologies and methodologies I worked with recently:
          </p>
          <ul>
            <li style={{ color: "white", opacity: "0.7" }}>
              {" "}
              <span style={{ color: "rgb(0, 255, 255)" }}>{">>"} </span>React
            </li>
            <li style={{ color: "white", opacity: "0.7" }}>
              {" "}
              <span style={{ color: "rgb(0, 255, 255)" }}>{">>"} </span>
              JavaScript
            </li>
            <li style={{ color: "white", opacity: "0.7" }}>
              {" "}
              <span style={{ color: "rgb(0, 255, 255)" }}>{">>"} </span>
              Node
            </li>
            <li style={{ color: "white", opacity: "0.7" }}>
              {" "}
              <span style={{ color: "rgb(0, 255, 255)" }}>{">>"} </span>MongoDB
            </li>
            <li style={{ color: "white", opacity: "0.7" }}>
              {" "}
              <span style={{ color: "rgb(0, 255, 255)" }}>{">>"} </span>Express
            </li>
          </ul>
        </div>
        <div className="about">
          <h2 style={{ color: "white" }}>
            <span style={{ color: "rgb(0, 255, 255)", fontSize: "20px" }}>
              02.{" "}
            </span>
            Projects
          </h2>
          <br />
          <div className="card">
            <h1>BlogWeb</h1>
            <div className="card-2">
              <p>
              Created a Blog Web site in MERN stack with a login and register feature. In the project MongoDB is used for database and react for frontend , node for backend. In it the user can create their profile and can make their own blogs also can see other's blogs.
              </p>
              <br />
              <p>
                <span>React Js</span> <span>Node</span>{" "}
                <span>Express</span>{" "}
                <span>MongoDB</span>
              </p>
            </div>
            <a href="https://github.com/ayush3160/BlogWeb" target="_blank">
              <img src="./25231.png" />
            </a>
          </div>
          <br />
          <br />
          <br />
          <div className="card">
            <h1>BookStore</h1>
            <div className="card-2">
              <p>
                Made a BookStore which shows different books and it's
                price.Also, In this made a cart function which shows the books
                purchased by the user.
              </p>
              <br />
              <p>
                <span>React Js</span> <span>Redux</span>{" "}
                <span>React-Router</span>
              </p>
            </div>
            <a href="https://github.com/ayush3160/BookStore" target="_blank">
              <img src="./25231.png" />
            </a>
          </div>
          <br />
          <br />
          <br />
          <div className="card">
            <h1>Questionnaire</h1>
            <div className="card-2">
              <p>
                Made a Questionaire which shows Questions with it's multiple
                options.User can choose the option which he thinks the right one
                and when he click the confirm it shows the correct answer.
              </p>
              <br />
              <p>
                <span>React Js</span> <span>React-Router</span>
              </p>
            </div>
            <a
              href="https://github.com/ayush3160/questionnaire"
              target="_blank"
            >
              <img src="./25231.png" />
            </a>
          </div>
        </div>
        <div className="about">
          <h2 style={{ color: "white" }}>
            <span style={{ color: "rgb(0, 255, 255)", fontSize: "20px" }}>
              03.{" "}
            </span>
            Contact Me
          </h2>
          <h3>Get In Touch</h3>
          <p style={{ color: "white", opacity: "0.7" }}>
            My inbox is always open for new connections, any tips on how to
            improve and for any new opportunities.
          </p>
          <br />
          <p style={{ color: "white", opacity: "0.7" }}>
            Drop me a message or just say hi.
          </p>
          <br />
          <button className="button">
            <a href="mailto:ayushsharma3160@gmail.com?subject=Hi I saw your profile">
              Get in Touch
            </a>
          </button>
        </div>
        <br />
        <br />
      </div>
      <br />
      <br />
    </div>
  );
}

export default App;
