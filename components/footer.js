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
            <div className="all ">
                <div className="lefter">
                    <div className="text">İletişim</div>
                </div>
                <div className="left">
                    <div className="text">Çalışma Saatlerimiz</div>
                </div>
                <div className="center">
                    <div className="explainer"><span> AÇ </span></div>
                    <div className="text">Menüler</div>
                </div>
                <div className="right">
                    <div className="text">Müşteri Yorumları</div>
                </div>
                <div className="righter">
                    <div className="text">Arama</div>
                </div>
            </div>
            <a href="http://facebook.com/mustafaxz" target="_blank" className="ref">🔗 Mustafa Baş</a>
        </div>
        
    )
}
export default Footer