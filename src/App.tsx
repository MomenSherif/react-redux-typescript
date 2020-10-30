import React, { useContext, useEffect } from 'react';
import UserProvider, { UserContext } from './context/UserContext';

const ChildComponent: React.FC = (props) => {
  const userContext = useContext(UserContext);
  const { name, age } = userContext.user ?? {};

  return (
    <h1 className='text-center'>
      {name} {age} {age && 'years'}
    </h1>
  );
};

const Login: React.FC = (props) => {
  const userContext = useContext(UserContext);

  return (
    <h1 className='text-center'>
      <button
        className='btn btn-primary'
        onClick={() => userContext.setUser({ name: "Mo'men", age: 24 })}
      >
        Login
      </button>
    </h1>
  );
};

function App() {
  const userContext = useContext(UserContext);

  return (
    <div className='App'>
      <UserProvider>
        <Login />
        <ChildComponent />
      </UserProvider>
    </div>
  );
}

export default App;
