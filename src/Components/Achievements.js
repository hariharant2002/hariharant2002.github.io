import aws from "./images/aws.png";
import udemy from "./images/udemy.png";
import postman from "./images/postman.png";
import unim from "./images/unim.png";
import Button from "@material-ui/core/Button";
import Card from "react-bootstrap/Card";

const Achievements = () => {
    const items = [
        {
            img: aws,
            cardTitle: "AWS Certified Solutions Architect - Associate",
            cardText: "Issued on: <br/> December 27, 2024",
            btnText: "See Credential",
            btnUrl: "https://www.credly.com/badges/e99b394d-869a-4d71-935f-fcbff6d08078",
        },
        {
            img: udemy,
            cardTitle: "The Complete Machine Learning Course with Python",
            cardText: "Issued on: <br/> July 26, 2024",
            btnText: "See Credential",
            btnUrl: "https://www.udemy.com/certificate/UC-8b671ec0-4e4a-49c2-8c5b-1030e08994c1/",
        },
        {
            img: postman,
            cardTitle: "Postman API Fundamentals Student Expert",
            cardText: "Issued on: <br/> June 30, 2024",
            btnText: "See Credential",
            btnUrl: "https://badgr.com/public/assertions/LTmfbbuOTNmvU7l5NQP6AQ?identity__email=sowmiyalakshmig@gmail.com",
        },
        {
            img: unim,
            cardTitle: "Programming for Everybody",
            cardText: "Issued on: <br/> June 27, 2022",
            btnText: "See Credential",
            btnUrl: "https://www.coursera.org/account/accomplishments/verify/7G4MVFV4TRP9",
        },

    ];
    return (
        <section id="achievements" class="about background-alt">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <h2>Achievements</h2>
                </div>
                <div class="row">
                    {items.map((data, i) => (
                        <div
                            class="col-sm-3 d-flex justify-content-center"
                            key={i}
                        >
                            {/* <div class="card shadow-large h-100 achievement-card" style={{maxWidth: "270px", background: "#343a40", padding: "20px"}}>
                    <img class="card-img-top responsive" src={data.img} height="50%" width="30%"/>
                  <div class="card-body">
                    <h5 class="card-title" style={{color: "rgba(255, 255, 255, 0.8)", fontSize: "16px"}}>{data.cardTitle}</h5>
                    <p class="card-text" style={{color: "#74808a"}}>{data.cardText}</p>
                    <a href="https://www.credential.net/bef2570d-7d63-4f07-be28-57ec4da87373" target="_blank" class="btn btn-primary">See Credential</a>
                  </div>
                </div> */}
                            <Card
                                style={{
                                    width: "16rem",
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
                                    <br></br>
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
                            <br></br>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
