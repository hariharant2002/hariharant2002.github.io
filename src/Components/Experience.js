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
      cardDetailedText: [
        "Designed an advanced liver disease diagnosis system leveraging deep learning and computer vision, through Python-based image processing pipelines and custom neural network architectures.",
        "Engineered a PyTorch based Unified Transformer model, by improvising attention mechanisms and feature extraction layers to enhance the diagnostic accuracy from 80% to 92%.",
        "Enhanced image pre-processing with histogram equalization using OpenCV and fine-tuned the model with the LDAM loss function for addressing skewed data.",
        "Visualized interactive medical imaging dashboards using Tableau to track model performance metrics and lesion detection patterns, allowing real-time monitoring of diagnostic accuracy across different liver conditions.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "May 2023 – July 2023",
      cardTitle: "ISRO Liquid Propulsion Systems Centre",
      cardSubtitle: "Machine Learning Intern",
      cardDetailedText: [
        "Developed an image segmentation and defect detection system for aviation sub-components applying ML techniques.",
        "Utilized the Canny algorithm from SciKits to improve edge detection, which accelerated the segmentation process, reducing the image inspection time from 2m to 1m.",
        "Implemented the U-Net model using TensorFlow for its ability to preserve spatial features and accurately localize defects through its encoder-decoder architecture with skip connections",
        "Achieved an improved accuracy of 89%, validated using Cohen’s Kappa value of 0.85 , indicating strong agreement and reliable defect detection performance.",   
      ].map(function (text) {
        return <li>{text}</li>;
      }),
    },
    {
      date: "Nov 2022 – Jan 2023",
      cardTitle: "Vellore Institute of Technology",
      cardSubtitle: "Research Assistant",
      cardDetailedText: [
        "Architected a federated learning pipeline using the Flower framework to train a DenseNet-121 model across 3 distributed nodes, achieving 80% accuracy while maintaining data privacy.",
        "Achieved a 20% reduction in memory usage on the central server through an innovative approach, optimizing overall computational efficiency and system performance.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
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
