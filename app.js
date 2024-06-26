// local reviews data
const reviews = [
  {
    id: 1,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 2,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let currentPerson = 0;

const photo = document.getElementById("person-img");
const name = document.getElementById("name");
const job = document.getElementById("job");
const info = document.getElementById("info");

const previousBtn = document.querySelector(".previous-button");
const nextBtn = document.querySelector(".next-button");

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

nextBtn.addEventListener("click", function () {
  currentPerson++;

  if (currentPerson > reviews.length - 1) {
    currentPerson = 0;
  }
  showPerson(currentPerson);
});

previousBtn.addEventListener("click", function () {
  currentPerson--;

  if (currentPerson < 0) {
    currentPerson = reviews.length - 1;
  }
  showPerson(currentPerson);
});

function showPerson(number) {
  const person = reviews[number];
  photo.src = person.img;
  name.textContent = person.name;
  job.textContent = person.job;
  info.textContent = person.text;
}
