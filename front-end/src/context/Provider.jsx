import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

export default function Provider({ children }) {
  const [task, setTask] = useState('');

  const stateGlobal = useMemo(() => ({
    task,
    setTask,
  }), [task]);

  return (
    <Context.Provider value={stateGlobal}>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
