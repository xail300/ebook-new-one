import Button from "@/_components/Button";
import TopForm from "@/_components/TopForm";
import TopSlider from "@/_components/TopSlider";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";


export default function Home() {
  return (
    <>
      {/* top banner */}
      <section className="top-banner">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col xl={6} lg={8} md={12}>
              <div className="center-col">
                <h1>Let Us Help You Write Best Selling Business Books</h1>
                <Button />
                <div className="rating-sec">
                  <Image src="/assets/images/img-1.png" alt="" width={107} height={30} />
                  <div className="mb-0">
                    <p>Trusted by 200K+ Readers worldwide</p>
                    <div className="d-flex align-items-center gap-2">
                      <span>Excellent</span>
                      <div className="star">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-half-line"></i>
                      </div>
                      <span>4.8/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <TopSlider />
        </Container>
      </section>
      {/* end */}
      {/* sec-two */}

      <section className="sec-two">
        <Container>
          <Row className="align-items-center">
            <Col xl={6} lg={6} md={6}>
              <div className="section-title">
                <h2>Well Known Book <span>Cover Illustration</span> Services</h2>
                <p>Our team's illustrators have made many book covers. They are professionally
                  trained to handle any job, regardless of genre. We will do great work on your
                  book without cutting any corners.</p>
                <p>Our illustrations speak for themselves, even though we can say how beautiful
                  they are. This is because all of our illustrators work as full-time, independent
                  benefits who are very good at what they do. Additionally, we work closely with
                  our clients and take the time to fully understand their goals. These steps help us
                  be sure that they will enjoy our illustrations and be happy with our work.</p>
                <Button />
              </div>
            </Col>
            <Col xl={6} lg={6} md={6}>
              <div className="right">
                <TopForm />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end */}
    </>
  );
}
