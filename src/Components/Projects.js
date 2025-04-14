import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import CodeIcon from "@material-ui/icons/Code";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import Tooltip from "@material-ui/core/Tooltip"; // ✅ Import Tooltip

const Projects = () => {
  const items = [
    {
      cardTitle: "QueryGen AI: Natural Language to SQL Generator",
      cardDetailedText: "I contributed to the development of an intuitive full-stack application designed for automated database query generation and execution. Leveraging Langchain, I created vector embeddings of the database schema tables and stored them efficiently in a Pinecone vector database. When a user submitted a query, I implemented a similarity search mechanism to retrieve the top five most relevant tables based on the query’s semantic context. These results, combined with the user’s prompt, were then passed to OpenAI’s language model to dynamically generate accurate SQL or NoSQL queries. This seamless integration of language models and vector search enabled fast, intelligent query generation without requiring users to manually explore the database structure.",
      technologies: [ "NoSQL", "GenAI", "Streamlit", "Pinecone", "Langchain"],
      links: [
        {
          url: "https://github.com/Sowmiya81/QueryGen-AI-Natural-Language-SQL-Generator",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "MarketMind: End-to-End Stock Price Prediction Software",
      cardDetailedText: "I developed an LSTM-based predictive model capable of forecasting stock prices using real-time user inputs, presented through a responsive Flask web interface. The model achieved a prediction accuracy of 94%, offering reliable insights for short-term market trends. To streamline delivery, I implemented a robust CI/CD pipeline using Docker for containerization and deployed the application on Heroku. This optimization reduced deployment time from 20 seconds to just 10 seconds, significantly improving development efficiency and ensuring rapid updates for end-users.",
      technologies: ["Python", "Flask", "Docker", "Heroku"],
      links: [
        {
          url: "https://github.com/Sowmiya81/MarketMind",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "CycleGAN-Enhanced MRI Style Transfer",
      cardDetailedText: "I implemented a CycleGAN-based framework for MRI contrast generation, aimed at enhancing diagnostic diversity and visual clarity in medical imaging. By applying advanced style transfer techniques, I enabled seamless transformation between T1- and T2-weighted MRI scans, leading to a 30% improvement in image conversion clarity. This approach significantly contributed to diagnostic effectiveness, resulting in a 25% increase in accuracy by providing radiologists with enhanced and complementary imaging perspectives.",
      technologies: ["CycleGAN", "Python", "Image Processing"],
      links: [
        {
          url: "https://github.com/Sowmiya81/CycleGAN-Enhanced-MRI-Style-Transfer",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Smart Shuttle Management and Monitoring Platform",
      cardDetailedText: "In a collaborative effort with a team of three, I spearheaded the design and development of a modernized front-end using HTML, CSS, and JavaScript, which significantly improved shuttle tracking efficiency by 25%. This project involved creating an authentication-based interface that streamlined user interactions and enhanced overall usability. On the back end, I implemented a real-time system using PHP, seamlessly integrated with MongoDB, which boosted data processing speed by 30%. Additionally, I focused on optimizing MySQL queries for route data and schedule management, achieving a 20% increase in retrieval performance. This optimization not only improved system efficiency but also garnered positive feedback from users, highlighting the enhanced usability of the application.",
      technologies: ["Python", "Django", "Rasa"],
      links: [
        {
          url: "https://github.com/Sowmiya81/Smart-Shuttle-Management-System",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Web-based Food Delivery App",
      cardDetailedText: "Working alongside a team of four, I played a key role in developing a full-stack food delivery platform utilizing React.js for the front end and Spring Boot for the back end. Our project included implementing a secure role-based access control system to efficiently manage multiple vendors, as well as integrating the Stripe payment gateway to facilitate seamless transactions. On the back end, I constructed the infrastructure using Spring Boot and MySQL, designing RESTful APIs capable of handling multiple users and ensuring robust performance. For the front end, I leveraged React.js and Redux to create reusable components, which streamlined the codebase by 20%. This approach not only enhanced the platform's efficiency but also contributed to a more maintainable and scalable system.",
      technologies: ["Python", "GCP"],
      links: [
        {
          url: "https://github.com/Sowmiya81/Web-based-Food-Delivery-App",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Collaborative Cloud-based Task Management App",
      cardDetailedText:
        "I created responsive and dynamic components using Headless UI, incorporating real-time notifications to enhance team collaboration efficiency and accelerate project completion. Leading a team of three, I orchestrated the architecture of an innovative cloud-native task management platform using the MERN stack. This project pioneered real-time collaboration features that significantly boosted team productivity by 45%. On the backend, I spearheaded the development of a scalable infrastructure with Node.js and Express.js, focusing on crafting optimized MongoDB queries. This optimization improved resource utilization by 50%, ensuring a robust and efficient system that supported the platform's advanced features.",
      technologies: ["HTML", "CSS", "JS", "PHP"],
      links: [
        {
          url: "https://github.com/Sowmiya81/Collaborative-Cloud-based-Task-Management-App",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "AI Text Summarizer App",
      cardDetailedText: "I led a team of three in the development of a scalable AI Text Summarizer application, utilizing a Node.js and Express.js backend. Our focus was on implementing a RESTful API architecture capable of processing over 500 daily requests, achieving an impressive 98% uptime. By incorporating caching mechanisms, we successfully reduced API response time by 25%. To enhance the application's capabilities, I engineered a seamless integration with Hugging Face's Inference API for natural language processing, which resulted in an 85% accuracy rate in text summarization. On the front end, I designed and developed a responsive interface using vanilla JavaScript, HTML5, and CSS3. Through meticulous code optimization and the implementation of lazy loading techniques, we achieved a 30% faster load time, significantly improving the user experience.",
      technologies: ["React JS", "Firebase"],
      links: [
        {
          url: "https://github.com/Sowmiya81/Summarizer-Bot",
          text: "View Source Code",
        }
      ],
    },
  ];

  const [limit, setLimit] = useState(3);
  const [loadButton, setLoadButton] = useState(true);
  const [lessButton, setLessButton] = useState(false);

  const loadMore = () => {
    setLimit(6);
    setLoadButton(false);
    setLessButton(true);
  };

  const loadLess = () => {
    setLimit(3);
    setLoadButton(true);
    setLessButton(false);
  };

  return (
    <section id="projects" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Projects</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.slice(0, limit).map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#343a40" }}
                  dateClassName="timeline-date"
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  icon={<CodeIcon />}
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                >
                  <div className="projects-technologies">
                    {data.technologies.map((name, i) => (
                      <Chip key={i} label={name}></Chip>
                    ))}
                  </div>
                  <h3
                    className="vertical-timeline-element-title"
                    style={{
                      fontSize: "12",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {data.cardTitle}
                  </h3>
                  <p
                    style={{
                      fontSize: "1em",
                      fontWeight: "350",
                      color: "#74808a",
                    }}
                  >
                    {data.cardDetailedText}
                  </p>
                  <div className="project-links">
                    {data.links.map((link, j) => (
                      <div key={j}>
                        <br />
                        <Button
                          variant="contained"
                          color="default"
                          target="_blank"
                          href={link.url}
                        >
                          {link.text}
                        </Button>
                      </div>
                    ))}
                  </div>
                </VerticalTimelineElement>
              ))}
              {loadButton && (
                <VerticalTimelineElement
                  iconOnClick={loadMore}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <Tooltip title="Click for more projects" arrow>
                      <IconButton aria-label="add">
                        <AddIcon
                          style={{
                            color: "#fff",
                            marginTop: "0.1px",
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                  }
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                />
              )}
              {lessButton && (
                <VerticalTimelineElement
                  iconOnClick={loadLess}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="remove">
                      <RemoveIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                />
              )}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
