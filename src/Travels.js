import React from "react";
import Travel from "./Travel";

const travels = [
  {
    id: 0,
    destination:
      "Madrid. Une ville dotée d'élégants boulevards et de vastes parcs très bien entretenus comme le Retiro",
    country: "Espagne",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/CollageMadrid.jpg/280px-CollageMadrid.jpg",
    distance: "1 271 km"
  },
  {
    id: 1,
    destination: "Bruxelles. Siège de l'Union européenne",
    country: "Belgique",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/00_Bruxelles_-_Mont_des_Arts.jpg/280px-00_Bruxelles_-_Mont_des_Arts.jpg",
    distance: "312 km"
  },
  {
    id: 2,
    destination: "Munich. Abrite des bâtiments plusieurs fois centenaires et de nombreux musées.",
    country: "Allemagne",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Munich_skyline.jpg/267px-Munich_skyline.jpg",
    distance: ""
  },
  {
    id: 3,
    destination:
      "Berne. Bâtie sur une péninsule entourée par la rivière",
    country: "Suisse",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/City_of_Berne.jpg/280px-City_of_Berne.jpg",
    distance: "572 km"
  },
  {
    id: 4,
    destination:
      "Moscou. Son centre historique est le Kremlin, résidence du Président et complexe abritant les trésors des tsars dans l'Armurerie.",
    country: "Russie",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%D0%92%D0%B8%D0%B4_%D0%BD%D0%B0_%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9_%D0%B2_%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%83_%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B9_%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D0%B8.jpg/330px-%D0%92%D0%B8%D0%B4_%D0%BD%D0%B0_%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D0%BC%D1%83%D0%B7%D0%B5%D0%B9_%D0%B2_%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D1%83_%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B9_%D0%BF%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D0%B8.jpg",
    distance: "2 850 km"
  }
]

const Travels = () => (
  <div>
    {travels.map(travel => (
      <div key={travel.id}>
        <Travel destination={travel.destination} country={travel.country} photo={travel.photo} distance={travel.distance} />
      </div>
    ))}
    
  </div>
);

export default Travels;