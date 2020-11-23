const Characters = ({ characterList }) => {
  return characterList.map(({ name }, index) => <div key={index}>{name}</div>);
};

export default Characters;
