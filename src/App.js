import logo from "./logo.svg";
import "./App.css";
import UserCard from "./users/UserCard";
import styled from "styled-components";
import UserList from "./users/UserList";
const Users = styled.div`
  padding-top: 2%;
`;

function App() {
  return (
    <div className="App row">
      <Users className="row offset-2 col-8">
        <UserList/>
      </Users>
    </div>
  );
}

export default App;
