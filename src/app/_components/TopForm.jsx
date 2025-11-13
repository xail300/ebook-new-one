'use client'
import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import toast from 'react-hot-toast';

const TopForm = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setValidated(true);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            toast.error('Please fill out all required fields.');
            return;
        }

        try {
            if (true) {
                toast.success('Form submitted successfully!');
                form.reset()
            }
        } catch (error) {

        }

        // form sending to email
        const formData = new FormData(form);
        await sendMail(formData);
        // end
    };

    return (
        <>
            <h3>AVAIL 30% OFF</h3>
            <div className="form-sec">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                        <Col md={12}>
                            <div className="mb-4">
                                <Form.Control required type="text" id="name" name='name' placeholder="Enter Name*" />
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="mb-4">
                                <Form.Control required type="email" id="email" name='email' placeholder="Enter Email Address*" pattern="[^\s@]+@[a-zA-Z]+[^0-9@]+\.[cC][oO][mM]$" />
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="mb-4">
                                <Form.Control type="number" id="contact" name="phone" placeholder="Enter Phone Number*" required />
                            </div>
                        </Col>
                        <Col md={12}>
                            <div className="mb-4">
                                <Form.Control as="textarea" rows={4} />
                            </div>
                        </Col>
                        <Col md={12}>
                            <button type="submit" className="btn btn-theme w-100">Submit</button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    )
}

export default TopForm
