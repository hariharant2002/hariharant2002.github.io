import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

export default function Experience() {
  const items = [
    {
      date: "Jan 2024 - May 2024",
      cardTitle: "Indian Institute of Technology, Tirupati",
      cardSubtitle: "Machine Learning Intern",
      cardDetailedText:
        "In an effort to advance diagnostic tools for liver disease, I developed a deep learning–based system that leverages computer vision and custom neural network architectures to deliver highly accurate diagnoses. The core of the system was built using Python-driven image processing pipelines and an engineered Unified Transformer model in PyTorch. By innovating on attention mechanisms and enhancing feature extraction layers, I successfully improved diagnostic accuracy from 80% to 92%. To handle data imbalance, I integrated the LDAM loss function and further enhanced image preprocessing using histogram equalization techniques with OpenCV. To ensure transparency and track performance, I created interactive dashboards in Tableau that visualized key medical imaging metrics and lesion detection patterns, enabling real-time insights into model performance across a range of liver conditions."
    },
    {
      date: "May 2023 – July 2023",
      cardTitle: "ISRO Liquid Propulsion Systems Centre",
      cardSubtitle: "Machine Learning Intern",
      cardDetailedText:
        "I engineered an image segmentation and defect detection system tailored for aviation sub-components, utilizing machine learning techniques to enhance inspection efficiency and accuracy. To accelerate the segmentation process, I integrated the Canny algorithm from SciKits, which significantly improved edge detection and reduced image inspection time from 2 minutes to just 1 minute. The core segmentation was powered by a U-Net model implemented in TensorFlow, chosen for its encoder-decoder architecture with skip connections that effectively preserved spatial features and precisely localized defects. This approach led to a detection accuracy of 89%, with performance reliability validated by a Cohen’s Kappa score of 0.85—demonstrating strong agreement and consistent defect identification."
    },
    {
      date: "Nov 2022 – Jan 2023",
      cardTitle: "Vellore Institute of Technology",
      cardSubtitle: "Research Assistant",
      cardDetailedText: 
        "I designed and implemented a federated learning pipeline using the Flower framework to enable privacy-preserving model training across three distributed nodes. The system leveraged a DenseNet-121 architecture, collaboratively trained without centralizing sensitive data, ultimately achieving an accuracy of 80%. To enhance performance further, I introduced an innovative optimization strategy that reduced memory usage on the central server by 20%, significantly improving computational efficiency and system scalability while upholding strong privacy guarantees."
    },
    
  ];

  return (
    <section id="experience" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Experience</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.map((data, i) => {
                return (
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
                    icon={<WorkIcon />}
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
                      }}
                    >
                      {data.cardSubtitle}
                    </h4>
                    <p
                      style={{
                        fontSize: "1em",
                        fontWeight: "350",
                        color: "#74808a",
                      }}
                    >
                      {data.cardDetailedText}
                    </p>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
}
