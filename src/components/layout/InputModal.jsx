import { Modal } from 'react-bootstrap';
import AddForm from '../form/AddForm';

function InputModal({ show, handleClose, setShow }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='modal-background'>
          <Modal.Title className='title-background'>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Row>
            <Col>
              <AddForm />
            </Col>
          </Row> */}
          <AddForm setShow={setShow} />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='primary' onClick={handleClose} on>
            Publish
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default InputModal;
