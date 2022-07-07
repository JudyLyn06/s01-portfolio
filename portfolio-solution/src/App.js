import React from 'react'

import Navbar from './components/Navbar'
import Card from './components/Card'
import Jumbotron from './components/Jumbo'

import { Container, Row, Col } from 'react-bootstrap'

export default function App() {
    return (
        <>
            <Navbar/>
            <Jumbotron/>
            <Container>
                <Row>
                    <Col><Card/></Col>
                    <Col><Card/></Col>
                    <Col><Card/></Col>
                </Row>
            </Container>
        </>
    )
}