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

const Projects = () => {
  const items = [
    {
      cardTitle: "QueryGen AI: Natural Language to SQL Generator",
      cardDetailedText: [
        "Contributed to an intuitive full-stack application for automated database query generation and execution.",
        "Created vector embeddings of tables present in database schema using Langchain, stored the results in Pinecone database.",
        "Performed similarity search of the user’s query with the generated vector embeddings to find the top 5 relevant tables.",
        "Integrated OpenAI’s language model to generate SQL/NoSQL queries by providing the model with the user’s prompt along with the relevant tables.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Python", "SQL", "GenAI", "Streamlit"],
      links: [
        {
          url: "https://github.com/Sowmiya81/QueryGen-AI-Natural-Language-SQL-Generator",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "MarketMind: End-to-End Stock Price Prediction Software",
      cardDetailedText: [
        "Developed an LSTM based predictive model with a Flask web interface to forecast stock prices using real-time inputs,achieving a prediction accuracy of 94%.",
        "Optimized deployment workflows by implementing a robust CI/CD pipeline with Docker containerization and Heroku, reducing deployment time from 20s to 10s.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Python", "Flask", "Docker", "Heroku"],
      links: [
        {
          url: "https://github.com/Sowmiya81/MarketMind",
          text: "View Source Code",
        },
      ]
    },
    {
      cardTitle: "CycleGAN-Enhanced MRI Style Transfer",
      cardDetailedText: [
        "Utilized CycleGAN for MRI contrast generation, enhancing diagnostic diversity with a 30% improvement in the clarity of image conversions.",
        "Attained a 25% increase in diagnostic accuracy by transforming T2-weighted MRI images into T1-weighted images and vice versa using advanced style transfer techniques.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["CycleGAN", "Python", "Image Processing"],
      links: [
        {
          url: "https://github.com/Sowmiya81/CycleGAN-Enhanced-MRI-Style-Transfer",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Finance Assistant Chatbot",
      cardDetailedText: [
        "Created a chatbot for Fin-tech companies for helping students regarding finances.",
        "Tech stack comprises of Django, Rasa NLU and Postgresql.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Python", "Django", "Rasa"],
      links: [
        {
          url: "https://github.com/Sitanshuk/HackPython",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Text Summarization",
      cardDetailedText: [
        "It summarizes the given text into number of sentences or words in English and Punjabi.",
        "Created in Flask and deployed on Google App Engine.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Python", "GCP"],
      links: [
        {
          url: "https://github.com/bhushan-borole/text-summarization",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Meeting App",
      cardDetailedText:
        "This project was created while I was working as a Full Stack Developer Intern. Created API's using Spring Boot and used the MVC architecture, and consumed these API's in the frontend.",
      technologies: ["HTML", "CSS", "JS", "PHP"],
      links: [
        {
          url: "https://github.com/bhushan-borole/meeting-app",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "Justalk",
      cardDetailedText: "A chat application made using React and Firebase Auth",
      technologies: ["React JS", "Firebase"],
      links: [
        {
          url: "https://github.com/bhushan-borole/justalk",
          text: "View Source Code",
        },
        {
          url: "https://bhushan-borole.github.io/justalk/",
          text: "View Demo",
        },
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

  const addButton = () => (
    <Fab color="primary" color="blue" aria-label="add">
      <AddIcon />
    </Fab>
  );

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
                      <div>
                        <br></br>
                        <Button
                          key={j} // eslint-disable-line react/no-array-index-key
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
                    <IconButton aria-label="add">
                      <AddIcon
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
              {lessButton && (
                <VerticalTimelineElement
                  iconOnClick={loadLess}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
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
