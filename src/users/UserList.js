import styled from "styled-components";
import UserCard from "./UserCard";
import users from "./users";

const FisrtLetter = styled.div`
position:relative;
right:50px;
bottom: 20px;
font-size:30px;
color:Red;
`

const List = styled.div`
display:flex;
flex-wrap:wrap;
`

const Group = styled.div`
border-top:3px solid black;
`

const UserList = () => {
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
  }

  users.sort((a,b) => {
    return a.surname < b.surname ? -1 : 1;
   })

  userGroup = group(users, "surname");

  for (const key in userGroup) {
    let arr = [];
    let el = userGroup[key];
    el.forEach((chel) =>{
      arr.push(<UserCard name={chel.name} surname={chel.surname}></UserCard>)
    })
    output.push(<Group className="col-12"><FisrtLetter>{key}</FisrtLetter><List className="col-12">{arr}</List></Group>)   
  }



  return output;
};
export default UserList;
