import Layout from '../components/layout'
import {useState} from 'react'
import { 
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
} from 'reactstrap';
 import ProductModal from '../components/modal'

const photos = [
    {
        id: 1,
        url: '/img/ciger.jpg',
        name: 'Nefis Ciğer',
        price: ' 18 TL'
    },
    {
        id: 2,
        url: '/img/pilavciger.jpg',
        name: 'Porsiyon Ciğer',
        price: ' 18 TL'
    },
    {
        id: 3,
        url: '/img/ekmekciger.jpg',
        name: 'Ekmek Arası Ciğer',
        price: ' 12 TL'
    },
    {
        id: 4,
        url: '/img/etdoner.jpg',
        name: 'Pilav Üstü Et Döner',
        price: ' 24 TL'
    },
    {
        id: 5,
        url: '/img/etdurum.jpg',
        name: 'Et Dürüm',
        price: ' 13 TL'
    },
    {
        id: 6,
        url: '/img/pideet.jpg',
        name: 'Pide Et',
        price :' 13 TL'
    },
    {
        id: 7,
        url: '/img/pidetavuk.jpg',
        name: 'Pide Tavuk',
        price: ' 8 TL'
    },
    {
        id: 8,
        url: '/img/pilavustutavuk.jpg',
        name: 'Pilav Üstü Tavuk',
        price: ' 15 TL'
    },
    {
        id: 9,
        url: '/img/durumtavuk.jpg',
        name: 'Dürüm Tavuk',
        price: ' 8 TL'
    },
]


const Urunler = () => {
    const [showProductModal,setShowModal]= useState(false)
    const [clickedPhotoId,setId] = useState(0)
    const toggleProductModal = e => {
        setShowModal(!showProductModal)
    }
    const handleClick = e => {
        toggleProductModal()
        let id = e.target.id - 1
        setId(id)
    }

    const next = e => {
        if(clickedPhotoId === 8){
            setId(0)
        }else{
            setId(clickedPhotoId + 1)
        }
    }
    const prev = e => {
        if(clickedPhotoId === 0){
            setId(8)
        }else{
            setId(clickedPhotoId - 1)
        }
    }
    
    const ImgCards = (photos) => {
        return (
            photos.map(photo => {
                return (
                    <Col key={photo.id} sm='4'>
                        <Card className='mb-3'>
                            <CardBody>
                                <CardImg className='card-imgg' id={photo.id} onClick={handleClick} src={photo.url}></CardImg>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                    </Col>
                )
            })
        )
    }
    return (
        <Layout>
            <div className='urunler'>
                <Container>
                <h3>Siz Değerli Müşterilerimizi Ürünümüzün Görselleri ile Başbaşa Bırakalım..</h3>
                <Row>
                    {ImgCards(photos)}
                </Row>
                </Container>
            </div>
            <ProductModal 
                modal = {showProductModal}
                toggle = {toggleProductModal}
                url = {photos[clickedPhotoId].url}
                name = {photos[clickedPhotoId].name}
                price = {photos[clickedPhotoId].price}
                next = {next}
                prev = {prev}
            />
        </Layout>
    )
}
export default Urunler