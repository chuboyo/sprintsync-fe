import React from 'react';
import { ListGroup, Button, DropdownButton, Dropdown, Row, Col } from 'react-bootstrap';

function Tasks({ tasks, onStatusChange, onEdit }) {
  const statuses = ["todo", "inprogress", "done"];

  const formatDuration = (duration = "0:00:00") => {
    if (!duration) return "0m";
    const [h = 0, m = 0, s = 0] = duration.split(":").map(Number);
    const totalMinutes = h * 60 + m + (Math.floor(s) >= 30 ? 1 : 0);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
  };

  return (
    <div className="m-3">
      {/* Header row */}
      <Row className="fw-bold pb-2 mb-2">
        <Col xs={6}>Task</Col>
        <Col xs={2}>Duration</Col>
        <Col xs={2}>Status</Col>
        <Col xs={2}>Actions</Col>
      </Row>

      <ListGroup>
        {tasks && tasks.map((task) => (
          <ListGroup.Item key={task.id} className="py-2">
            <Row className="align-items-center">
              <Col xs={6}>
                <div>
                  <h6 className="mb-1">{task.title}</h6>
                  <small className="text-muted">{task.description}</small>
                </div>
              </Col>
              <Col xs={2}>
                <small className="text-muted">{formatDuration(task.total_minutes)}</small>
              </Col>
              <Col xs={2}>
                <DropdownButton
                  variant="outline-secondary"
                  title={task.status}
                  onSelect={(selectedStatus) => {
                    if (selectedStatus !== task.status) {
                      onStatusChange({
                        title: task.title,
                        description: task.description,
                        status: selectedStatus,
                        task_id: task.id
                      });
                    }
                  }}
                  size="sm"
                >
                  {statuses.map((status) => (
                    <Dropdown.Item
                      key={status}
                      eventKey={status}
                      active={status === task.status}
                    >
                      {status}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </Col>
              <Col xs={2}>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() => onEdit(task)}
                >
                  Edit
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Tasks;
