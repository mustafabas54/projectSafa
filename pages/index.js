import Layout from '../components/layout'
import items from '../components/carditems'
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
                                    <Button>Button</Button>
                                </CardBody>
                            </div>
                            <div className='flip-card-back'>
                            <CardImg className='card-img' src={item.url} alt="Card image cap" />
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
        </Layout>
    )
}
export default Index