import React, { useState, useEffect } from "react";

const writingsData = [
  {
    id: 1,
    type: "Blog",
    title: "How to Innovate Effectively",
    link: "#",
    description: "Insights to innovate better.",
  },
  {
    id: 2,
    type: "Article",
    title: "The Future of Entrepreneurship",
    link: "#",
    description: "What lies ahead for startups.",
  },
  {
    id: 3,
    type: "Speech",
    title: "Leadership in Tech",
    link: "#",
    description: "Key leadership qualities.",
  },
  {
    id: 4,
    type: "Blog",
    title: "Building Startups in College",
    link: "#",
    description: "Balancing study and entrepreneurship.",
  },
];

const filters = ["All", "Blog", "Article", "Speech"];

const projectsData = [
  {
    title: "TheBetterU",
    role: "Lead member",
    description:
      "Actively working on designing a platform connecting users to personal development services like dermatologists, trainers, and wellness experts, emphasizing user experience and scalability.",
  },
  {
    title: "Community Helper App",
    role: "Solo Developer",
    description:
      "Created an application design to assist college students with community engagement. Showcased at Google Headquarters, Gurgaon.",
  },
  {
    title: "Google Solution Challenge",
    role: "Designer",
    description:
      "Working on a project aimed at addressing the unique challenges faced by neurodiverse individuals (such as those with autism, ADHD, dyslexia, etc.). The solution seeks to empower neurodiverse people by providing accessible, scalable, and technology-driven tools to promote inclusivity in education, employment, and daily life. The project focuses on creating a more inclusive world where neurodiverse individuals can thrive independently and reach their full potential.",
  },
  {
    title: "CASD Project",
    role: "Researcher",
    description:
      "Conducting research for a business model that focuses on placing food vending machines in high-traffic areas such as colleges, offices, metro stations, hospitals, and other public spaces. The project explores key revenue streams, including food sales, advertising, partnerships, subscription-based meal plans, and commission from digital payment platforms.",
  },
];

const SocialIcon = ({ href, label, svgPath }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="social-icon"
  >
    <svg
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path d={svgPath} />
    </svg>
  </a>
);

function App() {
  const [filter, setFilter] = useState("All");
  const [filteredWritings, setFilteredWritings] = useState(writingsData);

  useEffect(() => {
    if (filter === "All") {
      setFilteredWritings(writingsData);
    } else {
      setFilteredWritings(writingsData.filter((w) => w.type === filter));
    }
  }, [filter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    document
      .querySelectorAll(".section")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! I will get back to you soon.");
    e.target.reset();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Inter&display=swap');
        * {
          box-sizing: border-box;
        }
        body {
          margin:0; font-family: 'Poppins', sans-serif; background-color: #fafafa; color: #222; scroll-behavior: smooth;
        }
        header {
          position: fixed;
          top: 0; width: 100%;
          background: #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          z-index: 1000;
        }
        nav {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          padding: 1rem;
          justify-content: center;
        }
        nav a {
          text-decoration: none;
          color: #222;
          font-weight: 600;
          margin: 0 12px;
          border-radius: 24px;
          padding: 6px 16px;
          transition: background-color 0.3s ease;
        }
        nav a:hover {
          background-color: #e0e7ff;
        }
        main {
          margin-top: 72px;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
          padding: 1rem;
        }
        section {
          padding: 60px 20px 80px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease, transform 1s ease;
        }
        section.fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        h1, h2 {
          font-weight: 700;
          margin-bottom: 1rem;
        }
        h1 {
          font-size: 2.75rem;
          text-align: center;
        }
        h2 {
          font-size: 2rem;
          border-bottom: 3px solid #7c3aed;
          display: inline-block;
          padding-bottom: 4px;
          margin-bottom: 24px;
          color: #7c3aed;
        }
        #home {
          position: relative;
          color: white;
          min-height: 360px;
          background: linear-gradient(135deg, #7c3aedcc, #667eea);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(124,58,237,0.3);
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
          margin-bottom: 2rem;
        }
        #home p {
          font-size: 1.25rem;
          margin-top: 0;
          font-weight: 600;
          letter-spacing: 2px;
        }
        .portfolio-filters {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
          flex-wrap: wrap;
          gap: 12px;
        }
        .portfolio-filters button {
          border: none;
          padding: 8px 18px;
          border-radius: 24px;
          background-color: #e0e7ff;
          cursor: pointer;
          font-weight: 600;
          color: #4c51bf;
          transition: background-color 0.3s ease;
        }
        .portfolio-filters button.active,
        .portfolio-filters button:hover {
          background-color: #7c3aed;
          color: white;
        }
        .portfolio-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
          gap: 20px;
        }
        .portfolio-item {
          background: white;
          border-radius: 16px;
          box-shadow: 0 3px 12px rgb(124 58 237 / 0.15);
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .portfolio-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgb(124 58 237 / 0.3);
        }
        .portfolio-item a {
          margin-top: auto;
          text-decoration: none;
          color: #7c3aed;
          font-weight: 600;
          align-self: flex-start;
          margin-top: 14px;
          border-radius: 24px;
          padding: 8px 16px;
          border: 2px solid #7c3aed;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .portfolio-item a:hover {
          background-color: #7c3aed;
          color: white;
        }
        .projects-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
          gap: 20px;
        }
        .project-item {
          background: white;
          border-radius: 16px;
          box-shadow: 0 3px 12px rgb(124 58 237 / 0.15);
          padding: 20px;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-item:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgb(124 58 237 / 0.3);
        }
        #tbu p {
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #444;
        }
        #insta {
          text-align: center;
        }
        #insta iframe {
          max-width: 400px;
          width: 100%;
          border-radius: 16px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        }
        form {
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        label {
          font-weight: 600;
          text-align: left;
        }
        input, textarea {
          padding: 10px 14px;
          border-radius: 12px;
          border: 1.5px solid #ccc;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
          resize: vertical;
          transition: border-color 0.3s ease;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: #7c3aed;
          box-shadow: 0 0 6px rgba(124,58,237,0.4);
        }
        button[type=submit] {
          background-color: #7c3aed;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 24px;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        button[type=submit]:hover {
          background-color: #5a21b6;
        }
        .social-icons {
          margin-top: 16px;
          display: flex;
          justify-content: center;
          gap: 24px;
        }
        .social-icon svg {
          fill: #7c3aed;
          transition: fill 0.3s ease;
        }
        .social-icon:hover svg {
          fill: #5a21b6;
        }
        footer {
          text-align: center;
          padding: 16px;
          background-color: #f3f4f6;
          font-size: 0.9rem;
          color: #666;
          border-top: 1px solid #eaeaea;
          margin-top: 48px;
        }
        @media (max-width: 600px) {
          nav {
            font-size: 0.9rem;
          }
          h1 {
            font-size: 2.25rem;
          }
          .portfolio-gallery, .projects-gallery {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <header>
        <nav>
          <a href="#home" aria-label="Home">
            Home
          </a>
          <a href="#about" aria-label="About Me">
            About Me
          </a>
          <a href="#portfolio" aria-label="Writing Portfolio">
            Writing Portfolio
          </a>
          <a href="#projects" aria-label="Projects">
            Projects
          </a>
          <a href="#tbu" aria-label="TheBetterU">
            TBU
          </a>
          <a href="#insta" aria-label="Instagram Highlights">
            Insta Highlights
          </a>
          <a href="#contact" aria-label="Contact">
            Contact
          </a>
        </nav>
      </header>

      <main>
        {/* Home Section */}
        <section id="home" className="section">
          <h1>Ashwika</h1>
          <p>Innovator. Leader.</p>
        </section>

        {/* About Me Section */}
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>
            I am a B.Tech (Hons) student, founder of TheBetterU, and a
            passionate writer.
          </p>
        </section>

        {/* Writing Portfolio Section */}
        <section id="portfolio" className="section">
          <h2>Writing Portfolio</h2>
          <div
            className="portfolio-filters"
            role="group"
            aria-label="Filter writings by type"
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={filter === f ? "active" : ""}
                aria-pressed={filter === f}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="portfolio-gallery">
            {filteredWritings.map((writing) => (
              <article
                key={writing.id}
                className="portfolio-item"
                tabIndex="0"
                aria-label={`${writing.type}: ${writing.title}`}
              >
                <h3>{writing.title}</h3>
                <p>{writing.description}</p>
                <a
                  href={writing.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Read more about ${writing.title}`}
                >
                  Read More
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="projects-gallery">
            {projectsData.map((project, index) => (
              <div key={index} className="project-item">
                <h3>{project.title}</h3>
                <p>
                  <strong>Role:</strong> {project.role}
                </p>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TBU Section */}
        <section id="tbu" className="section">
          <h2>TheBetterU</h2>
          <p>
            TheBetterU is a startup I founded to empower individuals through
            expert guidance and innovative solutions. Our mission is to help
            users connect with professionals in various fields and foster growth
            and learning.
          </p>
          <p>
            Our team consists of passionate experts collaborating to create a
            better future.
          </p>
          <p>Connect with us to learn more and be part of the movement!</p>
        </section>

        {/* Instagram Highlights Section */}
        <section id="insta" className="section">
          <h2>Insta Highlights</h2>
          <p>Explore some of my most engaging writing posts on Instagram.</p>
          <div>
            <a
              href="https://www.instagram.com/thebetteru"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram TheBetterU profile"
            >
              @thebetteru
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          <form onSubmit={handleSubmit} aria-label="Contact form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              aria-required="true"
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              aria-required="true"
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              aria-required="true"
            />
            <button type="submit">Send</button>
          </form>
          <div className="social-icons" aria-label="Social media links">
            <SocialIcon
              href="https://linkedin.com/in/ashwika"
              label="LinkedIn"
              svgPath="M19 0h-14c-2.762 0-5 2.238-5 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.795-1.75-1.75s.784-1.75 1.75-1.75 1.75.795 1.75 1.75-.783 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.104-.896-2-2-2s-2 .896-2 2v5.5h-3v-10h3v1.5c.654-1.003 2.237-1 3 0v-1.5h3v10z"
            />
            <SocialIcon
              href="https://twitter.com/ashwika"
              label="Twitter"
              svgPath="M24 4.557a9.83 9.83 0 01-2.828.775 4.948 4.948 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.927 4.927 0 00-8.39 4.49c-4.094-.205-7.725-2.165-10.152-5.144a4.94 4.94 0 00-.666 2.475c0 1.71.87 3.22 2.188 4.107a4.902 4.902 0 01-2.228-.616c-.054 1.935 1.355 3.79 3.343 4.196a4.94 4.94 0 01-2.224.085c.63 1.953 2.445 3.377 4.6 3.418a9.867 9.867 0 01-6.102 2.195c-.395 0-.787-.023-1.175-.068a13.94 13.94 0 007.557 2.215c9.054 0 14-7.496 14-13.986 0-.214-.004-.426-.014-.636a10.012 10.012 0 002.457-2.548l.002-.003z"
            />
          </div>
        </section>
      </main>
      <footer>
        &copy; {new Date().getFullYear()} Ashwika. All rights reserved.
      </footer>
    </>
  );
}

export default App;
