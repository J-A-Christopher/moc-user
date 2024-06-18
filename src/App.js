import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    const userData = { name: uName, age: uAge, id:Math.random().toString()};
    setUsersList((prevUsersList) => {
      return [...prevUsersList, userData];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList  users={usersList} />
    </div>
  );
}

export default App;
