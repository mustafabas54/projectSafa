import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ProductModal = (props) => {
  const {
    modal,
    toggle,
    className,
    url,
    name,
    price
  } = props;

console.log(className)
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className='product-modal'>
        <ModalHeader toggle={toggle}>{name}</ModalHeader>
        <ModalBody>
            <img src={url} alt='photo'/>
        </ModalBody>
        <h4 toggle={toggle}>{price}</h4>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>Kapat</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ProductModal;