import React, { useContext } from 'react';
import {
  Form,
  Container, Button, InputGroup,
} from 'react-bootstrap';
import Context from '../context/Context';
import Service from '../service/Service';

import '../style.css';

export default function TodoForm() {
  const {
    task, setTask, refresh, setRefresh,
  } = useContext(Context);

  const handleChange = ({ target }) => {
    setTask(
      target.value,
    );
    if (refresh === false) setRefresh(true);
  };

  const onClick = () => {
    Service.createTask(task);
    if (refresh === false) setRefresh(true);
  };

  return (
    <Container className="formGroup">
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="What you to do?"
          as="textarea"
          type="text"
          onChange={handleChange}
          style={{ height: '100px' }}
        />
        <Button
          variant="secondary"
          type="button"
          onClick={onClick}
        >
          Add
        </Button>
      </InputGroup>
    </Container>

  );
}
