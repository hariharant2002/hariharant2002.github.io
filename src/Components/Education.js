import SchoolIcon from "@material-ui/icons/School";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import StarIcon from "@material-ui/icons/Star";

const Education = () => {
  const items = [
    {
      cardTitle: "University of California, Irvine",
      cardSubtitle: "Master of Data Science",
      coursesHead: "Courses:",
      cardDetailedText: {
        courses: [
          "Machine Learning",
          "Artificial Intelligence",
          "Deep Learning",
          "Data Structures",
          "Statistics",
        ],
        cgpa: "CGPA: 3.95",
      },
      date: "2024 - 2025",
    },
    {
      cardTitle: "Vellore Institute Of Technology",
      cardSubtitle: "B.Tech in Computer Science and Engineering",
      coursesHead: "Courses:",
      cardDetailedText: {
        courses: [
          "Database Management",
          "Cloud Computing",
          "Computer Vision",
          "Web Development Structures",
        ],
        cgpa: "CGPA: 3.89",
      },
      date: "2020 - 2024",
    },
  ];

  return (
    <section id="education" className="about background-alt">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Education</h2>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#343a40" }}
                  date={data.date}
                  dateClassName="timeline-date"
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                  icon={<SchoolIcon />}
                >
                  <h3
                    className="vertical-timeline-element-title"
                    style={{
                      fontSize: "14",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {data.cardTitle}
                  </h3>
                  <h4
                    className="vertical-timeline-element-subtitle"
                    style={{
                      fontSize: "1.2em",
                      fontWeight: "350",
                      color: "#7e8890",
                      marginTop: "5px",
                    }}
                  >
                    {data.cardSubtitle}
                  </h4>
                  <h5
                    className="vertical-timeline-element-subtitle"
                    style={{
                      fontSize: "1em",
                      fontWeight: "250",
                      color: "#7e8890",
                      marginTop: "5px",
                    }}
                  >
                    {data.coursesHead}
                  </h5>
                  <ul style={{ paddingLeft: "20px", color: "#74808a" }}>
                    {data.cardDetailedText.courses.map((course, index) => (
                      <li key={index}>{course}</li>
                    ))}
                  </ul>
                  <p
                    style={{
                      marginTop: "10px",
                      fontSize: "1em",
                      fontWeight: "350",
                      color: "#74808a",
                    }}
                  >
                    {data.cardDetailedText.cgpa}
                  </p>
                </VerticalTimelineElement>
              ))}
              <VerticalTimelineElement
                iconStyle={{
                  background: "#0563bb",
                  color: "#fff",
                }}
                icon={<StarIcon />}
              />
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
