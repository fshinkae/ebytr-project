import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import Service from '../service/Service';

export default function Provider({ children }) {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  async function fetchList() {
    const array = await Service.readAllTask();
    setList(array);
  }

  useEffect(() => {
    fetchList();
  }, []);

  const stateGlobal = useMemo(() => ({
    task,
    setTask,
    list,
    setList,
  }), [task, list]);

  return (
    <Context.Provider value={stateGlobal}>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
