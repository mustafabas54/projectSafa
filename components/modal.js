import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ProductModal = (props) => {
  const {
    modal,
    toggle,
    className,
    url,
    name
  } = props;

console.log(className)
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className='product-modal'>
        <ModalHeader toggle={toggle}>{name}</ModalHeader>
        <ModalBody>
            <img src={url} alt='photo'/>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ProductModal;