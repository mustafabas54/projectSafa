import Layout from '../components/layout'
import React from 'react';
import { 
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
 } from 'reactstrap';

const Index = () => {
    return (
        <Layout>
            <div className='cards'>
                <Container>
                    <Row>
                        <Col sm='4'>
                            <Card>
                                <CardImg top width="100%" src="/img/ciger.jpg" alt="Card image cap" />
                                <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col sm='4'>
                        </Col>
                        <Col sm='4'>
                        </Col>
                    </Row>
                </Container>  
                
            </div>
        </Layout>
    )
}
export default Index