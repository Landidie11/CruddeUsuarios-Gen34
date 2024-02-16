import React from 'react';

const CardUser = ({user, deleteUser, setEditUser, setIsOpen}) => {
    //console.log(user);
    const handleDelete = () => {
      deleteUser('/users', user.id);

    }

    const handleEdit = () => {
      setEditUser(user);
      setIsOpen(true);

    }


  return (
    <article>
      <h3>{user.first_name} {user.last_name}</h3>
      <ul>
        <li><span><box-icon name='mail-send'></box-icon> </span><span>{user.email}</span></li>
        <li><span><box-icon name='gift'></box-icon> </span><span>{user.birthday}</span></li>
      </ul>
      <button onClick={handleDelete}><box-icon name='trash'></box-icon></button>
      <button onClick={handleEdit}><box-icon name='edit-alt'></box-icon></button>
    </article>
  )
}

export default CardUser