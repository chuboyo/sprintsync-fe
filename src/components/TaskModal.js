import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";


const TaskModal = ({ show, onHide, type, task, aiDescription, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

 

  useEffect(() => {
    if (type === "edit" && task) {
      setTitle(task.title);
      setDescription(task.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [type, task]);

  const handleSubmit = () => {
    if (type === "ai") {
      onSubmit({title});
    } else {
      onSubmit({title, description});
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {type === "edit" ? "Edit Task" : type === "create" ? "Create Task" : "AI Suggestion"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Task Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          {type !== "ai" && (
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          )}
          {type === "ai" && aiDescription && (
            <Form.Group>
              <Form.Label>AI Suggested Description</Form.Label>
              <Form.Control as="textarea" rows={3} readOnly value={aiDescription} />
            </Form.Group>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {type === "ai" ? "Get Suggestion" : "Submit"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskModal;
