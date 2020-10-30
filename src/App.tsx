import React from 'react';
import Alert from './components/Alert/Alert-3';

const App = () => {
  return (
    <div className='App container'>
      <Alert message=' A simple danger alert!' type='danger' closeable={false}>
        <h1>Hello, WOrld!</h1>
      </Alert>
    </div>
  );
};
export default App;
