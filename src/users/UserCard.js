import { useDispatch } from "react-redux";
import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";
import { deleteUserAction } from "../toolkitStore/toolkitSlice";

const CardBody = styled.div`
  margin: 0px 30px 30px 0px;
  padding:15px 0px 15px 0px;
  background-color: lightblue;
  border: 3px dotted cyan;
`;

const getInitials = (name, lastname) => {
  let initials = name.substr(0, 1) + lastname.substr(0, 1);
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
  font-size: 30px;
  display: flex;
  align-items: center;
`;

const IconX = styled(VscChromeClose)`
`;
const UserCard = ({ name, surname, id }) => {
  const dispatch = useDispatch();
  const DeleteUser = (id) => {
    const User = {
      name,
      surname,
      id
    }
    dispatch(deleteUserAction({User}));
  };
  return (
    <CardBody className="row col-4">
      <Initials className="col-3">
        <Ring>
          <Info>{getInitials(name, surname)}</Info>
        </Ring>
      </Initials>
      <UserInfo className="col-8">
        <p>{`${name} ${surname}`}</p>
      </UserInfo>
      <div className="col-1">
        <IconX onClick={() => DeleteUser(id)} />
      </div>
    </CardBody>
  );
};

export default UserCard;
