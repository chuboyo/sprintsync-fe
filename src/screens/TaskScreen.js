import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Tasks from "../components/Tasks";
import TaskModal from "../components/TaskModal";
import {
    listTasks,
    createTask, 
    editTask, 
    getAIDesc
} from "../actions/taskActions";
import { logout } from "../actions/userActions";
import Message from "../components/Message";

function TaskScreen(){
    // Modal states
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(""); // "edit", "create", "ai"
    const [selectedTask, setSelectedTask] = useState(null);
    const [aiDescription, setAIDescription] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const taskList = useSelector((state) => state.listTasks);

    const taskCreate = useSelector((state) => state.createTask);

    const taskEdit = useSelector((state) => state.editTask);

    const login = "/login"

    useEffect(
        () => {
            dispatch(listTasks());
        }, [taskCreate.task, taskEdit.task, dispatch]
    )

  

  // Handlers
  const handleStatusChange = (title, description, task_id) => {
    dispatch(editTask(title, description, task_id));
  };

  const handleEdit = (task) => {
    setSelectedTask(task);
    setModalType("edit");
    setShowModal(true);
  };

  const handleCreate = () => {
    setModalType("create");
    setShowModal(true);
  };

  const handleAISuggest = () => {
    setModalType("ai");
    setShowModal(true);
  };

  const handleLogout = () => {
    dispatch(logout())
    navigate(login)
  };

  const handleModalSubmit = (data) => {
    if (modalType === "edit") {
      dispatch(editTask({ ...data, status: selectedTask.status,task_id: selectedTask.id,  }));
    } else if (modalType === "create") {
      dispatch(createTask(data));
    } else if (modalType === "ai") {
      dispatch(getAIDesc(data)).then((response) => {
        console.log(response)
        if (response?.payload?.description) {
          setAIDescription(response.payload.description);
        }
      });
      return; // AI flow does not close modal immediately
    }
    setShowModal(false);
    setSelectedTask(null);
  };

  return (
    <>
      <NavBar onLogout={handleLogout}/>
      <Container className="mt-4">

        {taskList.error && <Message>{taskList.error}</Message>}
        <Tasks
          tasks={taskList.tasks}
          onStatusChange={handleStatusChange}
          onEdit={handleEdit}
        />

        <Row className="mb-3">
          <Col className="d-flex justify-content-between">
            <Button variant="primary" onClick={handleCreate}>
              Create New Task
            </Button>
            <Button variant="info" onClick={handleAISuggest}>
              AI Suggest
            </Button>
          </Col>
        </Row>

        <TaskModal
          show={showModal}
          onHide={() => setShowModal(false)}
          type={modalType}
          task={selectedTask}
          aiDescription={aiDescription}
          onSubmit={handleModalSubmit}
        />
      </Container>
    </>
  );
};

export default TaskScreen;
