import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import Service from '../service/Service';

export default function Provider({ children }) {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  async function fetchList() {
    const array = await Service.readAllTask();
    setList(array);
  }

  useEffect(() => {
    fetchList();
  }, [refresh]);

  const stateGlobal = useMemo(() => ({
    task,
    setTask,
    list,
    setList,
    refresh,
    setRefresh,
  }), [task, list, refresh]);

  return (
    <Context.Provider value={stateGlobal}>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
