import aws from "./images/Paper1.jpg";
import udemy from "./images/Paper2.jpg";
import unim from "./images/Paper3.jpg";
import Button from "@material-ui/core/Button";
import Card from "react-bootstrap/Card";

const Publications = () => {
    const items = [
        {
            img: aws,
            cardTitle: "Exploring Huntington’s Disease Diagnosis via Artificial Intelligence Models: A Comprehensive Review",
            cardText:
                "Authored a review on leveraging AI for Huntington’s Disease (HD) diagnosis, highlighting the potential of machine learning and deep learning in analyzing clinical, genetic, and neuroimaging data. Discussed the integration of multimodal data to improve predictive accuracy and patient outcomes. Explored current trends, methodologies, and challenges, emphasizing AI's role in enhancing diagnostic accuracy and early detection. Addressed limitations and ethical concerns of AI in HD diagnosis while proposing future research directions. Positioned the review as a vital resource for advancing AI applications in neurodegenerative disorder management.",
            btnText: "See More",
            btnUrl: "https://www.mdpi.com/2075-4418/13/23/3592",
        },
        {
            img: udemy,
            cardTitle:
                "Martian Terrain Classification through Federated Learning: A Decentralized Approach for Understanding the Mars",
            cardText: "Developed a federated learning approach using DenseNet-121 to classify Mars' topography into seven categories, including impact ejecta, dunes, craters, and spider formations. Leveraged the HiRISE dataset from the Mars Reconnaissance Orbiter, enhancing insights into Mars' geological processes and supporting safer mission planning. This approach enables collaborative learning across institutions while preserving data confidentiality and efficiently utilizing diverse datasets. This research aids in selecting optimal landing sites and ensuring secure navigation for future Mars missions. Positioned as a breakthrough in decentralized machine learning for space exploration while preserving data privacy.",
            btnText: "See More",
            btnUrl:
                "https://ieeexplore.ieee.org/abstract/document/10434826",
        },
        {
            img: unim,
            cardTitle:
                "Classification of Pavements into Bleeding and Non-Bleeding using Deep Architectures: A Comparative Study",
            cardText: "Conducted a comparative analysis of state-of-the-art deep learning models, including VGG16, InceptionV3, EfficientNet, and ResNet50, for the classification of bleeding and non-bleeding roads. The study focused on detecting bleeding roads, a pavement distress condition caused by the upward movement of asphalt, which creates a smooth surface posing safety risks. Leveraged transfer learning techniques to fine-tune each model on a self-collected labeled dataset of road images. This research provides valuable insights into the effectiveness of deep learning models for road condition analysis, contributing to the advancement of automated road maintenance systems and enhancing road safety.",
            btnText: "See More",
            btnUrl:
                "https://ieeexplore.ieee.org/abstract/document/10397052",
        },
    ];

    return (
        <section id="publications" className="about background-alt">
            <div className="container" data-aos="fade-up">
                <div className="section-title text-center">
                    <h2>Publications</h2>
                </div>
                <div className="row justify-content-center" >
                    {items.map((data, i) => (
                        <div
                            className="col-md-4 d-flex justify-content-center mb-4"
                            key={i}
                        >
                            <Card
                                style={{
                                    width: "22rem",
                                    background: "#343a40",
                                    padding: "20px",
                                }}
                                className="text-center"
                            >
                                <Card.Img variant="top" src={data.img} />
                                <Card.Body>
                                    <Card.Title
                                        style={{
                                            color: "rgba(255, 255, 255, 0.7)",
                                            fontSize: "18px",
                                        }}
                                    >
                                        {data.cardTitle}
                                    </Card.Title>
                                    <br />
                                    <Card.Text style={{ color: "#74808a" }}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: data.cardText,
                                            }}
                                        ></div>
                                    </Card.Text>
                                    {data.btnText && (
                                        <Button
                                            variant="contained"
                                            color="default"
                                            target="_blank"
                                            href={data.btnUrl}
                                        >
                                            {data.btnText}
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Publications;
