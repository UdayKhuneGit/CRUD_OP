// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;





import React, { useState } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";
import './App.css';

const App = () => {

  const [editingUser, setEditingUser] = useState(null); //initial state
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (user) => {
    setEditingUser(user);
  };
 
  const handleSave = () => {
    setEditingUser(null);
    setRefresh(!refresh);  // Trigger re-render
  };

  return (
     <div className="App">
      <header className="App-header">
      <UserList onEdit={handleEdit} onDelete={handleSave} />
      <UserForm user={editingUser} onSave={handleSave} />
      </header>
    </div>
  );
};

export default App;