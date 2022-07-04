import "./Card.scss";

const Card = ({ user }) => {
  const {
    name: { title, first, last },
    email,
    cell,
    location: { city, country },
    dob: { age },
    registered: { date },
  } = user;

  return <div></div>;
};

export default Card;
