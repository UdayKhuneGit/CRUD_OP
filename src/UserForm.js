import React, { useState, useEffect } from "react";
import axios from "axios";

const UserForm = ({ user, onSave }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email };

    if (user) {
      // Update existing user
      axios.put
      (`http://localhost:8080/api/users/${user.id}`, newUser)
        .then(response => onSave())
        .catch(error => console.error(error));
    } else {
      // Create new user
      axios.post("http://localhost:8080/api/users", newUser)
        .then(response => onSave())
        .catch(error => console.error(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{user ? "Edit User" : "Add User"}</h3>
      <label>Name</label>&nbsp;
<input type="text" value={name} 
onChange={(e) => setName(e.target.value)} />
     &nbsp;&nbsp; <label>Email</label>&nbsp;
      
      <input type="email" value={email} 
      onChange={(e) => setEmail(e.target.value)} />
      &nbsp;&nbsp;<button type="submit" 
      class="btn">{user ? "Update" : "Add"}</button>
    </form>
  );
};


export default UserForm;
