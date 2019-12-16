import Layout from '../components/layout'
import items from '../components/carditems'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faCamera, faComments, faCalendar } from '@fortawesome/free-solid-svg-icons'
import {useState} from 'react'
import Head from 'next/head'
import Hamburger from '../components/hamburger'
import { 
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
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

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

    return (
        <Layout>
            <Head>
                <title>Anasayfa</title>
            </Head>
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
                            <FontAwesomeIcon icon={faCalendar} className='fontawesome' onClick={toggle} size='5x' />
                            <h4> <a> Günün Menüsü</a></h4>
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
                    <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle} close={closeBtn}>ET İSKENDER !</ModalHeader>
                    <ModalBody>
                        <img src='/img/etiskender.jpg' className='etisk'></img>
                        <h5>Enfes yaprak dönerinin tadını siz değerli müşterilerimize özel menü şeklinde servis ediyoruz. Bu günümüzün menüsü ET İSKENDER ! İçecek + tatlı konseptimizle sadece 25TL!</h5>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={toggle}>Kapat</Button>
                    </ModalFooter>
                    </Modal>
                </Container>
                </div>
            
        </Layout>
    )
}
export default Index