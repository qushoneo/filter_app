import styled from "styled-components";

const CardBody = styled.div`
  margin:0px 30px 30px 0px;
  padding: 0px;
  height: 100px;
  background-color: lightblue;
  border:1px dotted cyan;
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
  height: 55%;
  width: 70%;
  border-radius: 50% 50% 50% 50%;
  background-color: blue;
`;

const Info = styled.div`
  font-size: 30px;
  text-align: center;
  color: white;
`;

const UserInfo = styled.div`
  background-color: lightblue;
  font-size: 30px;
  display: flex;
  align-items: center;
`;

const IconX = styled.div`
  text-align: right;
`;

const UserCard = ({ name, surname }) => {
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
      <IconX className="col-1">
        X
      </IconX>
    </CardBody>
  );
};

export default UserCard;
