import Layout from '../components/layout'
import '../styles/urunler.scss'
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

const Urunler = () => {
    return (
        <Layout>
            <div className='urunler'>
                <Container>
                <h3>Siz Değerli Müşterilerimizi Ürünümüzün Görselleri ile Başbaşa Bırakalım..</h3>
                <Row>
                    <Col sm='4'>
                        <Card>
                            <CardBody>
                                <CardImg className='card-imgg' src='/img/ciger.jpg'></CardImg>
                               <CardText></CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm='4'>
                        <Card>
                            <CardBody>
                                <CardImg className='card-imgg' src='/img/pilavciger.jpg'></CardImg>
                               <CardText></CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm='4'>
                        <Card>
                            <CardBody>
                                <CardImg className='card-imgg' src='/img/ekmekciger.jpg'></CardImg>
                               <CardText></CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm='4'>
                        <Card className='cardd'>
                            <CardBody>
                                <CardImg className='card-imgg' src='/img/etdoner.jpg'></CardImg>
                               <CardText></CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm='4'>
                        <Card>
                            <CardBody>
                                <CardImg className='card-imgg' src='/img/etdurum.jpg'></CardImg>
                               <CardText></CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm='4'>
                        <Card>
                            <CardBody>
                                <CardImg className='card-imgg' src='/img/pideet.jpg'></CardImg>
                               <CardText></CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col sm='4'>
                        <Card>
                            <CardBody>
                                <CardImg className='card-imgg' src='/img/pidetavuk.jpg'></CardImg>
                               <CardText></CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm='4'>
                        <Card>
                            <CardBody>
                                <CardImg className='card-imgg' src='/img/pilavustutavuk.jpg'></CardImg>
                               <CardText></CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm='4'>
                        <Card>
                            <CardBody>
                                <CardImg className='card-imgg' src='/img/durumtavuk.jpg'></CardImg>
                               <CardText></CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                </Container>
            </div>
        </Layout>
    )
}
export default Urunler