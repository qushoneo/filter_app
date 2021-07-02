import { addClientAction } from "./toolkitStore/toolkitSlice";
import styled from "styled-components";
import UserList from "./users/UserList";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Users = styled.div`
  padding-top: 2%;
`;

const AddNewClient = styled.div`
margin-bottom: 15px;
display:flex;
justify-content: space-evenly;
`

function App() {
  const [_name, set_name] = useState("");
  const [_surname, set_surname] = useState("");
  const dispatch = useDispatch();

  const AddUser = () => {
    const myUser = {
      name: _name,
      surname: _surname,
      id: Date.now(),
    };
    dispatch(addClientAction(myUser));
  };

  return (
    <div className="App row">
      <Users className="row offset-2 col-8">
        <AddNewClient className="col-6">
          <input type="text" onChange={(e) => set_name(e.target.value)}></input>
          <input type="text" onChange={(e) => set_surname(e.target.value)}></input>
          <Button onClick={() => AddUser()}>Add Client</Button>
        </AddNewClient>
        <UserList />
      </Users>
    </div>
  );
}

export default App;
