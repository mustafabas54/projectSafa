import Layout from '../components/layout'
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../styles/modaltwo.scss'

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  return (
  <div>
    <Layout>
    <Button className='buton' color="info" onClick={toggle}>{buttonLabel}GÜNÜN MENÜSÜNÜ GÖRMEK İÇİN TIKLAYINIZ!! </Button>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle} close={closeBtn}>ET İSKENDER !</ModalHeader>
      <ModalBody>
        <img src='/img/etiskender.jpg' className='etisk'></img>
        <h5>Enfes yaprak dönerinin tadını siz değerli müşterilerimize özel menü şeklinde servis ediyoruz. Bu günümüzün menüsü ET İSKENDER ! İçecek + tatlı konseptimizle sadece 25TL!</h5>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>Kapat</Button>
      </ModalFooter>
    </Modal>
    <img className='balkon' src='/img/balkon.jpg'></img>
    <img className='balkon2' src='/img/dukkan.jpg'></img>
    </Layout>
  </div>
  
);
}

export default ModalExample;