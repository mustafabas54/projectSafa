import '../styles/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faCamera, faComments, faFemale } from '@fortawesome/free-solid-svg-icons'
import { 
    Container,
    Row,
    Col
 } from 'reactstrap';


const Footer = () => {
    return (
        <div className='footer'>
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
        <div class="footer-copyright">
            <p>© 2019 Copyright Tüm Hakları Saklıdır. Mustafa BAŞ ~ </p>
        </div>
        </div>
    )
}
export default Footer