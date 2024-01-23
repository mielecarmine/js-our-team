const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

// MILESTONE 1-2

const containerElement = document.getElementById("container");

for (let persona of team) {
  console.log(persona.name, persona.role, persona.image);

  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.innerHTML =
    "<p>" +
    persona.name +
    "" +
    persona.role +
    "" +
    "" +
    "" +
    persona.image +
    "<p>";
  cardElement.innerHTML = `<img src="./img/${persona.image}" class="slide" alt=""></img>`;
  containerElement.append(cardElement);
}
