'use client'
import React from 'react'
import { Accordion, Col, Row } from 'react-bootstrap'

const faqContent = [
    {
        question: "How do your ghostwriting services work?",
        answer: `With us, you retain 100%
                copyrights and royalties! We
                handle everything else, from
                ghostwriting to global publishing
                and promotion.`
    },
    {
        question: "Do you provide book editing services?",
        answer: `With us, you retain 100%
                copyrights and royalties! We
                handle everything else, from
                ghostwriting to global publishing
                and promotion.`
    },
    {
        question: "Do you offer standalone book writing services?",
        answer: `With us, you retain 100%
                copyrights and royalties! We
                handle everything else, from
                ghostwriting to global publishing
                and promotion.`
    },
    {
        question: "How do your book publishing services work?",
        answer: `With us, you retain 100%
                copyrights and royalties! We
                handle everything else, from
                ghostwriting to global publishing
                and promotion.`
    },
    {
        question: "Can I hire a ghostwriter for my specific genre?",
        answer: `With us, you retain 100%
                copyrights and royalties! We
                handle everything else, from
                ghostwriting to global publishing
                and promotion.`
    },
    {
        question: "How do you market books effectively?",
        answer: `With us, you retain 100%
                copyrights and royalties! We
                handle everything else, from
                ghostwriting to global publishing
                and promotion.`
    }
]

const FaqsSec = () => {
    return (
        <div className="faq-body">
            <Accordion>
                <Row className='g-4'>
                    {faqContent.map((item, index) => (
                        <Col xl={6} lg={6} md={6} key={index}>
                            <Accordion.Item eventKey={index.toString()}>
                                <Accordion.Header>{item.question}</Accordion.Header>
                                <Accordion.Body>
                                    <p>{item.answer}</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Col>
                    ))}
                </Row>
            </Accordion>
        </div>
    )
}

export default FaqsSec
