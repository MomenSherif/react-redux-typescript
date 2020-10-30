import React, { useState } from 'react';

interface IUser {
  name: string;
  age: number;
}

interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

// export const UserContext = React.createContext<IUserContext>(null!);
export const UserContext = React.createContext<IUserContext>(
  {} as IUserContext
);

const UserProvider: React.FC = (props) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
