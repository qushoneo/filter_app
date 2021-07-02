import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import UserCard from "./UserCard";
import Clients from "./users";
import { addClientAction, sortState } from "../toolkitStore/toolkitSlice";

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

const Group = styled.div`
  border-top: 3px solid black;
`;
let count = 0;
const UserList = () => {
  const dispatch = useDispatch();
  const AddUser = (name, surname) => {
    const myUser = {
      name,
      surname,
      id: count++,
    };
    dispatch(addClientAction(myUser));
  };
  useEffect(() => {
    Clients.forEach((client) => {
      AddUser(client.name, client.surname);
    });
  }, []);

  let users = useSelector(state => state.toolkit.users);
  dispatch(sortState())

  
  let output = [];
  let userGroup = [];
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

  let konets = [];
  userGroup = group(users, "surname");
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
  users.length == 0 ? konets.push(<h1>Not found</h1>) : konets.push(output);

  return konets;
};
export default UserList;
