import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
const ProductModal = (props) => {
  const {
    modal,
    toggle,
    url,
    name,
    price,
    next,
    prev
  } = props;

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className='product-modal'>
        <ModalHeader toggle={toggle}>{name}</ModalHeader>
        <ModalBody>
            <div className='img-area'>
              <img src={url} alt='photo'/>
              <button className='bttn prev' onClick={prev}>
                <FontAwesomeIcon icon={faArrowLeft} size='3x' />
              </button>
              <button className='bttn next' onClick={next}>
                <FontAwesomeIcon icon={faArrowRight} size='3x' />
              </button>
            </div>
            <h4>{price}</h4>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>Kapat</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ProductModal;