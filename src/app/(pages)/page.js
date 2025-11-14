import BookList from "@/_components/BookList";
import Button from "@/_components/Button";
import SectionTitle from "@/_components/SectionTitle";
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
              <div className="left">
                <SectionTitle
                  heading="Well Known"
                  colorHeading="Book Cover Illustration Services"
                  descOne="Our team's illustrators have made many book covers. They are professionally
                  trained to handle any job, regardless of genre. We will do great work on your
                  book without cutting any corners."
                  descTwo="Our illustrations speak for themselves, even though we can say how beautiful
                  they are. This is because all of our illustrators work as full-time, independent
                  benefits who are very good at what they do. Additionally, we work closely with
                  our clients and take the time to fully understand their goals. These steps help us
                  be sure that they will enjoy our illustrations and be happy with our work."
                />
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
      {/* sec-three */}
      <section className="sec-three">
        <div className="left-img">
          <Image src="/assets/images/left-img.png" alt="" fill sizes="(max-width: 767px) 100vw" />
        </div>
        <div className="right-img">
          <Image src="/assets/images/right-img.png" alt="" fill sizes="(max-width: 767px) 100vw" />
        </div>
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xl={7} lg={7} md={8}>
              <div className="center-col">
                <SectionTitle
                  heading="Well Known"
                  colorHeading="Impress Your Readers with Ebooks"
                  descOne="We analyse reputed journals to find the perfect match for your research focus. Every recommendation will be based on the Scopus journal selection criteria. Let's explore the top reasons why you should hire us for journal assessment."
                  HeadingTag="h3"
                />
                <div className="book-list">
                  <BookList />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end */}
      {/* sec-four */}
      <section className="sec-four">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col xl={8} lg={8} md={8}>
              <SectionTitle
                heading="We're Your Go-To Platform"
                colorHeading="for All Your Ghostwriting & Publishing Needs"
                descOne="Looking for top-notch ghostwriting services led by industry experts? Our premium quality work
                ensures your legacy is marked with the finest words crafted by our experts. Whether you need eBook
                ghostwriting or book writing service, we've got you covered. From concept to manuscript to the final
                product on shelves, we ensure a seamless transition."
                HeadingTag="h3"
              />
            </Col>
          </Row>
          <Row className="g-3">
            <Col xl={4} lg={4} md={4}>
              <div className="sec-four-box">
                <i className="ri-checkbox-circle-fill"></i>
                <h4>Article Writing</h4>
                <p>Let our skilled writers at Ghostwriting Squad
                  breathe life into your ideas with captivating
                  and informative articles tailored to your
                  needs.</p>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4}>
              <div className="sec-four-box">
                <i className="ri-checkbox-circle-fill"></i>
                <h4>Article Writing</h4>
                <p>Let our skilled writers at Ghostwriting Squad
                  breathe life into your ideas with captivating
                  and informative articles tailored to your
                  needs.</p>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4}>
              <div className="sec-four-box">
                <i className="ri-checkbox-circle-fill"></i>
                <h4>Article Writing</h4>
                <p>Let our skilled writers at Ghostwriting Squad
                  breathe life into your ideas with captivating
                  and informative articles tailored to your
                  needs.</p>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4}>
              <div className="sec-four-box">
                <i className="ri-checkbox-circle-fill"></i>
                <h4>Article Writing</h4>
                <p>Let our skilled writers at Ghostwriting Squad
                  breathe life into your ideas with captivating
                  and informative articles tailored to your
                  needs.</p>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4}>
              <div className="sec-four-box">
                <i className="ri-checkbox-circle-fill"></i>
                <h4>Article Writing</h4>
                <p>Let our skilled writers at Ghostwriting Squad
                  breathe life into your ideas with captivating
                  and informative articles tailored to your
                  needs.</p>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4}>
              <div className="sec-four-box">
                <i className="ri-checkbox-circle-fill"></i>
                <h4>Article Writing</h4>
                <p>Let our skilled writers at Ghostwriting Squad
                  breathe life into your ideas with captivating
                  and informative articles tailored to your
                  needs.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end */}
    </>
  );
}
