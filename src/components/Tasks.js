// src/components/TaskList.js
import React from 'react';
import { ListGroup, Badge, Button } from 'react-bootstrap';

function Tasks({ tasks, onStatusChange, onEdit }) {
  return (
    <ListGroup className="m-3">
      {tasks.map((task) => (
        <ListGroup.Item
          key={task.id}
          className="d-flex justify-content-between align-items-center"
        >
          <div>
            <h6>{task.title}</h6>
            <small className="text-muted">{task.description}</small>
          </div>
          <div className="d-flex align-items-center">
            <Badge
              bg={
                task.status === 'todo'
                  ? 'secondary'
                  : task.status === 'inprogress'
                  ? 'warning'
                  : 'success'
              }
              className="me-2"
            >
              {task.status}
            </Badge>
            <Button
              variant="outline-primary"
              size="sm"
              className="me-2"
              onClick={() => onStatusChange(task.id)}
            >
              Next
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => onEdit(task)}
            >
              Edit
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Tasks;
