const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];

function List() {
  console.log("list");
  const listItems = people
    .filter((person) => person.profession == "chemist")
    .map((el) => {
      return (
        <li key={el.id}>
          {el.name} ({el.profession})
        </li>
      );
    });

  return (
    <div className="rendering-list">
      <ul>{listItems}</ul>
    </div>
  );
}

export default List;
