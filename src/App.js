import "./styles.css";

function Person(name, pronouns, school, year, color, social, animal, nickname) {
  return (
    <div class="row">
      <div class="red">{name}</div>
      <div>{pronouns}</div>
      <div class="red">{school}</div>
      <div>{year}</div>
      <div class="red">{color}</div>
      <div>{social}</div>
      <div class="red">{animal}</div>
      <div>{nickname}</div>
    </div>
  );
}

function colgate(chicken, drop) {
  return <div>hi</div>;
}

export default function App() {
  const lily = Person(
    "Lilly Minchala",
    "She/Hers",
    "HHSLT",
    2022,
    "purple",
    "Insta",
    "Rats",
    "Lillian"
  );
  const claudia = Person(
    "Luna-Marcelino",
    "She/Hers",
    "P-TECH",
    2022,
    "",
    "",
    "Cats",
    "Luna"
  );
  const Desean = Person(
    "Desean-Blackburn",
    "He/Him",
    "Allen",
    2022,
    "Green",
    "Insta",
    "Dogs",
    "Busta"
  );

  let people = [
    ["lily", "Minchala"],
    ["Luna", "Marcelino"],
    ["Desean", "Blackburn"]
  ];

  let elements = [];
  for (let person of people) {
    // string1 + string2
    // person[0] == first name
    // person[1] == last name
    elements.push(colgate(person));
    // let
  }

  return <div className="App">{elements}</div>;
}

// function displayPerson(first,last)
