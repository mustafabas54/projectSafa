import Layout from '../components/layout'
import items from '../components/carditems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faCamera, faComments, faCalendar } from '@fortawesome/free-solid-svg-icons'
import '../styles/ayrinti.scss'
import {useState} from 'react'
import Hamburger from '../components/hamburger'
import { 
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle
 } from 'reactstrap';
const Cards = items => {
    return (
        items.map(item => {
            return (
                <Col sm='4' key={item.id} className='mt-5'>
                    <Card className='flip-card'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <CardImg className='card-img' src={item.url} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardText>{item.description}</CardText>
                                    </CardBody>
                            </div>
                            <div className='flip-card-back'>
                            <CardImg className='card-img' src={item.url} alt="Card image cap" />
                            <CardBody>
                                    <CardText>{item.urun1}</CardText>
                                    <CardText>{item.porFiyat}</CardText>
                                    <CardText>{item.ekFiyat}</CardText>
                                    <CardText>{item.dürFiyat}</CardText>
                                    <CardText>{item.pidFiyat}</CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                </Col>
            )
        })
    )
}


const Index = () => {
    return (
        <Layout>
            <div className='cards'>
                <Container>
                    <Row>
                        {Cards(items)}
                    </Row>
                </Container>
                </div>
                <div className='ayrinti'>
                <Container>
                    <Row>
                        <Col sm='3' className='Calendar'>
                            <FontAwesomeIcon icon={faCalendar} className='fontawesome' size='5x' />
                            <h4> <a href='/modaltwo'> Günün Menüsü</a></h4>
                        </Col>
                        <Col sm='3' className='Calendar'>
                            <FontAwesomeIcon icon={faCamera} className='fontawesome' size='5x' />
                            <h4>Galeri</h4>
                        </Col>
                        <Col sm='3' className='Calendar'>
                            <FontAwesomeIcon icon={faNewspaper} className='fontawesome' size='5x' />
                            <h4>Basında Biz</h4>
                        </Col>
                        <Col sm='3' className='Calendar'>
                            <FontAwesomeIcon icon={faComments} className='fontawesome' size='5x' />
                            <h4>Müşteri Yorumları</h4>
                        </Col>
                    </Row>
                </Container>
                </div>
            
        </Layout>
    )
}
export default Index