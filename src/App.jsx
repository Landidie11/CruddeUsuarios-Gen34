import { useEffect, useState } from 'react';
import './App.css';
import useCrud from './hooks/useCrud';
import FormUser from './components/FormUser';
import CardUser from './components/CardUser';

function App() {
  const [editUser, setEditUser] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const url = 'https:/users-crud.academlo.tech/'
  const [users, getUsers, createUser, deleteUser, updatUser] = useCrud(url);

  useEffect(() => {
    getUsers('/users/');
  }, []);

  const handleOpen = () => {
    setIsOpen(true);

  }
  

  return (
    <div><h1>Crud De usuarios</h1>
    <button onClick={handleOpen}>+ Nuevo Usuario</button>
    <FormUser 
     createUser={createUser}
     editUser={editUser}
     updatUser={updatUser}
     setEditUser={setEditUser}
     isOpen={isOpen}
    setIsOpen={setIsOpen}
    />
    <div>
      {
        users?.map(user => (
          <CardUser 
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          setEditUser={setEditUser}
          setIsOpen={setIsOpen}
          />
        ))
      }
    </div>
    </div>
  )
}

export default App
