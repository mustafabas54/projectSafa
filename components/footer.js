import '../styles/footer.scss'
import { 
    Container,
    Row,
    Col
 } from 'reactstrap';


const Footer = () => {
    let d = new Date()
    return (
        <div className='footer mt-5'>
        <Container className='container'>
            <Row className='row'>
                <Col sm='4'>
                    <h5>Ürünlerimiz</h5>
                    <ul>
                        <li><a href="#">Et Döneri</a></li>
                        <li><a href="#">Tavuk Döneri</a></li>
                        <li><a href="#">Dana ( Arnavut ) Ciğeri</a></li>
                    </ul>
                </Col>
                <Col sm='4'>
                    <h5>Fiyat Listemiz</h5>
                    <ul>
                        <li><a href="#">Fiyat Listemiz için tıklayınız</a></li>
                    </ul>
                </Col>
                <Col sm='4'>
                    <h5>İletişim</h5>
                    <ul>
                        <li><a href="#">Sosyal Medya</a></li>
                        <li><a href="#">Telefon</a></li>
                        <li><a href="#">Adres</a></li>
                    </ul>
                    </Col>
                </Row>
        </Container>
        <div class="footer-copyright mt-3">
            <p>© {d.getFullYear()} Copyright Tüm Hakları Saklıdır. Mustafa BAŞ ~ </p>
        </div>
        </div>
    )
}
export default Footer