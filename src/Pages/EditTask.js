import { Button, Modal, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { edittask } from "../Features/task";

function EditTask(props) {
  const state = useSelector((state) => state.task.List);
  const [input, setInput] = useState();
  const [show, setShow] = useState();
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      edittask({
        id: props.id,
        Description: input,
      })
    );
  };
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="name"
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default EditTask;