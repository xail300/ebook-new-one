import BookList from "@/_components/BookList";
import Button from "@/_components/Button";
import FaqsSec from "@/_components/FaqsSec";
import SecFiveContent from "@/_components/SecFiveContent";
import SecFourBoxContent from "@/_components/SecFourBoxContent";
import SectionTitle from "@/_components/SectionTitle";
import Testimonials from "@/_components/Testimonials";
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
                colorHeading="for All Your Ghostwriting & Publishing Needs"
                descOne="Looking for top-notch ghostwriting services led by industry experts? Our premium quality work
                ensures your legacy is marked with the finest words crafted by our experts. Whether you need eBook
                ghostwriting or book writing service, we've got you covered. From concept to manuscript to the final
                product on shelves, we ensure a seamless transition."
                HeadingTag="h3"
              />
            </Col>
          </Row>
          <Row className="g-3">
            <SecFourBoxContent />
          </Row>
        </Container>
      </section>
      {/* end */}
      {/* sec-five */}
      <section className="sec-five">
        <Container>
          <Row className="justify-content-center">
            <Col xl={6} lg={6} md={6}>
              <SectionTitle
                heading="Well Known"
                colorHeading="Impress Your Readers with Ebooks"
                HeadingTag="h3"
              />
            </Col>
          </Row>
          <Row className="align-items-center justify-content-around">
            <SecFiveContent
              image="/assets/images/img-2.webp"
              number="01"
              title="eBook Writing"
              desc="We believe the best way to master makeup skills is through constant practice. Our self makeup course includes Hands on Practice where students actively work on different makeup techniques."
            />

            <SecFiveContent
              image="/assets/images/img-3.webp"
              number="02"
              title="eBook Editing"
              desc="We believe the best way to master makeup skills is through constant practice. Our self makeup course includes Hands on Practice where students actively work on different makeup techniques."
              reverse={true}
              whiteText={true}
            />

            <SecFiveContent
              image="/assets/images/img-4.webp"
              number="03"
              title="eBook Marketing"
              desc="We believe the best way to master makeup skills is through constant practice. Our self makeup course includes Hands on Practice where students actively work on different makeup techniques."
              whiteText={true}
            />

            <SecFiveContent
              image="/assets/images/img-5.webp"
              number="04"
              title="eBook Publishing"
              desc="We believe the best way to master makeup skills is through constant practice. Our self makeup course includes Hands on Practice where students actively work on different makeup techniques."
              reverse={true}
              whiteText={true}
            />

            <SecFiveContent
              image="/assets/images/img-4.webp"
              number="05"
              title="eBook Cover"
              desc="We believe the best way to master makeup skills is through constant practice. Our self makeup course includes Hands on Practice where students actively work on different makeup techniques."
              whiteText={true}
            />

            <SecFiveContent
              image="/assets/images/img-5.webp"
              number="06"
              title="Children Book"
              desc="We believe the best way to master makeup skills is through constant practice. Our self makeup course includes Hands on Practice where students actively work on different makeup techniques."
              reverse={true}
              whiteText={true}
            />
          </Row>
        </Container>
      </section>
      {/* end */}
      {/* sec-six */}
      <section className="sec-six">
        <Container>
          <Row className="justify-content-center">
            <Col xl={8} lg={8} md={8}>
              <SectionTitle
                heading="We're Your Go-To Platform"
                colorHeading="for All Your Ghostwriting & Publishing Needs"
                HeadingTag="h3"
                descOne="Looking for top-notch ghostwriting services led by industry experts? Our premium quality work
                ensures your legacy is marked with the finest words crafted by our experts. Whether you need eBook
                ghostwriting or book writing service, we've got you covered. From concept to manuscript to the final
                product on shelves, we ensure a seamless transition."
              />
            </Col>
          </Row>
          <Row>
            <Col xl={4} lg={4} md={4}>
              <div className="sec-six-inner">
                <Image src="/assets/images/icon-1.png" alt="" width={70} height={70} />
                <h4>100% Ownership and Royalties</h4>
                <p>With us, you retain 100%
                  copyrights and royalties! We
                  handle everything else, from
                  ghostwriting to global publishing
                  and promotion.</p>
              </div>
              <div className="sec-six-inner">
                <h4>Dedicated Ghostwriters For Every Genre</h4>
                <p>From fiction, non-fiction to
                  academic and business, we have
                  ghostwriters for every genre for
                  your book.</p>
              </div>
            </Col>
            <Col xl={4} lg={4} md={4}>
              <div className="sec-six-inner center">
                <h4 className="text-white">E-book Website</h4>
              </div>
              <div className="sec-six-inner pb-0">
                <h4>ROI Centred Book Marketing</h4>
                <p>For new writers, we offer end-to-
                  end book writing services to help
                  them at every stage of their book's
                  journey.</p>
                <Image src="/assets/images/icon-3.png" alt="" className="m-auto" width={231} height={225} />
              </div>
            </Col>
            <Col xl={4} lg={4} md={4}>
              <div className="sec-six-inner">
                <Image src="/assets/images/icon-2.png" alt="" width={70} height={70} />
                <h4>Special Support For First-Time Authors</h4>
                <p>For new writers, we offer end-to-
                  end book writing services to help
                  them at every stage of their book's
                  journey.</p>
              </div>
              <div className="sec-six-inner">
                <h4>Committed Teams For Each Project</h4>
                <p>A dedicated team and project
                  manager to keep you involved and
                  informed at every stage of your
                  book writing project.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* end */}
      {/* faqs */}
      <section className="faqs-sec">
        <Container>
          <Row className="justify-content-center">
            <Col xl={8} lg={8} md={8}>
              <SectionTitle
                heading="Frequently Asked"
                colorHeading="Questions"
                HeadingTag="h3"
                descOne="Looking for top-notch ghostwriting services led by industry experts? Our premium quality work
                ensures your legacy is marked with the finest words crafted by our experts. Whether you need eBook
                ghostwriting or book writing service, we've got you covered. From concept to manuscript to the final
                product on shelves, we ensure a seamless transition."
              />
            </Col>
          </Row>
          <Row>
            <Col xl={12} lg={12} md={12}>
              <FaqsSec />
            </Col>
          </Row>
        </Container>
      </section>
      {/* end */}
      {/* testimonials sec */}
      <section className="testimonial-sec">
        <Container>
          <Row className="justify-content-center">
            <Col xl={6} lg={6} md={6}>
              <SectionTitle
                heading="Happy Clients Of Our"
                colorHeading="eBook Ghostwriting Service"
                HeadingTag="h3"
              />
            </Col>
            <Col xl={6} lg={6} md={6}>
              <SectionTitle
                descOne="The following are the testimonials dropped by the clients for our Scopus paper publication support. We helped them get their research and thesis published on renowned platforms."
              />
            </Col>
          </Row>
          <Row>
            <Col xl={4} lg={4} md={4}>
              <div className="left" style={{ position: "relative", width: "407px", height: "476px" }}>
                <Image src="/assets/images/img-6.png" alt="" fill sizes="(max-width: 767px) 100vw" />
              </div>
            </Col>
            <Col xl={8} lg={8} md={8}>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section >
      {/* end */}
    </>
  );
}
