import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import UserCard from "./UserCard";
import {
  addClientAction,
  clearState,
  deleteUserAction,
  getState,
  sortState,
} from "../toolkitStore/toolkitSlice";
import axios from "axios";
import { Button } from "react-bootstrap";

const URL = "https://swapi.dev/api/people/?page=";
let i = 0;

const FisrtLetter = styled.div`
  position: relative;
  right: 50px;
  bottom: 20px;
  font-size: 30px;
  color: Red;
`;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PrevNextBtn = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
`

const Group = styled.div`
  border-top: 3px solid black;
`;

const group = (arr, property) => {
  let result = {};
  for (const obj of arr) {
    let key = obj[property].substr(0, 1);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(obj);
  }
  return result;
};




const UserList = () => {
  const [Page, setPage] = useState(1);
  let output = [];
  let userGroup = [];

  output.push(
    <PrevNextBtn className="col-6">
      <p>Страница {Page}</p>
      <div>
      <Button onClick={() => setPage(Page-1)}> {"<"} </Button>
      <Button onClick={() => setPage(Page+1)}> {">"} </Button>
      </div>
    </PrevNextBtn>
  );

  const dispatch = useDispatch();

  const AddUser = (User) => {
    User.id = i++;
    dispatch(addClientAction(User));
  };

  useEffect(() => {
    dispatch(clearState())
    axios.get(`${URL+Page}`).then((response) => {
      response.data.results.forEach((user) => AddUser(user));
    });
  }, [Page]);
  let UserData = useSelector((state) => state.toolkit.users);
  dispatch(sortState());

  userGroup = group(UserData, "name");
  for (const key in userGroup) {
    let arr = [];
    let el = userGroup[key];
    el.forEach((chel) => {
      arr.push(
        <UserCard
          name={chel.name}
          surname={chel.surname}
          id={chel.id}
        ></UserCard>
      );
    });
    output.push(
      <Group className="col-12">
        <FisrtLetter>{key}</FisrtLetter>
        <List className="col-12">{arr}</List>
      </Group>
    );
  }

  return output;
};
export default UserList;
