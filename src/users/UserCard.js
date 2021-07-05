import { useDispatch } from "react-redux";
import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";
import { deleteUserAction } from "../toolkitStore/toolkitSlice";

const CardBody = styled.div`
  height:100px;
  margin: 0px 30px 30px 0px;
  padding:0px 0px 0px 0px;
  background-color: lightblue;
  border: 3px dotted cyan;
`;

const getInitials = (name) => {
  let initials = (name.split(' ')[0]).substr(0, 1) + ((name.split(' ')[1]) == undefined ? '' : (name.split(' ')[1]).substr(0, 1))
  return initials;
};

const Initials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Ring = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75%;
  width: 75%;
  border-radius: 50% 50% 50% 50%;
  background-color: blue;
`;

const Info = styled.div`
  font-size: 30px;
  text-align: center;
  color: white;
`;

const UserInfo = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const IconX = styled(VscChromeClose)`
`;
const UserCard = ({ name, surname, id }) => {
  const dispatch = useDispatch();
  const User = {
    name,
    surname,
    id
  }
  const DeleteUser = (User) => {
    dispatch(deleteUserAction(User))
  };
  return (
    <CardBody className="row col-4">
      <Initials className="col-3">
        <Ring>
          <Info>{getInitials(User.name, User.surname)}</Info>
        </Ring>
      </Initials>
      <UserInfo className="col-8">
        <p>{`${(User.name.split(' ')[0])} ${(User.name.split(' ')[1] == undefined ? '' : User.name.split(' ')[1])}`}</p>
      </UserInfo>
      <div className="col-1">
        <IconX onClick={() => DeleteUser(User)}/>
      </div>
    </CardBody>
  );
};

export default UserCard;
