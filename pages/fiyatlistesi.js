import Layout from '../components/layout'
import fiyats from '../components/fiyatlar'
import '../styles/ayrinti.scss'
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

const Cards = fiyats => {
    return (
        fiyats.map(fiyat => {
            return (
                
                <Col sm='4' key={fiyat.id} className='mt-5'>
                    <Card className='flip-card'>
                        <div className='flip-card-inner'>
                            <div className='flip-card-front'>
                                <CardImg className='card-img' src={fiyat.url} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>{fiyat.title}</CardTitle>
                                        <CardText>{fiyat.description}</CardText>
                                    </CardBody>
                            </div>
                            <div className='flip-card-back'>
                            <CardImg className='card-img' src={fiyat.url} alt="Card image cap" />
                            <CardBody>
                                    <CardText>{fiyat.urun1}</CardText>
                                    <CardText>{fiyat.porFiyat}</CardText>
                                    <CardText>{fiyat.ekFiyat}</CardText>
                                    <CardText>{fiyat.dürFiyat}</CardText>
                                    <CardText>{fiyat.pidFiyat}</CardText>
                                </CardBody>
                            </div>
                        </div>
                    </Card>
                </Col>
                
            )
        })
    )
}


const fiyatListesi = () => {
    return (
        <Layout>
            <div className='cards'>
                <Container>
                    <Row> 
                        {Cards(fiyats)}
                    </Row>
                </Container>
                </div> 
        </Layout>
    )
}
export default fiyatListesi