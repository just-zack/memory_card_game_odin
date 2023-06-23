import australianShepard from "../img/australian_shepard.png";
import terrier from "../img/terrier.png";
import bullDog from "../img/bull_dog.png";
import blackLab from "../img/black_labrador.png";
import pug from "../img/pug.png";
import blueHeeler from "../img/blue_heeler.png";
import germanShepard from "../img/german_shepard.png";
import greyhound from "../img/greyhound.png";
import goldenRetriever from "../img/golden_retriever.png";
import poodle from "../img/poodle.png";
import dalmatian from "../img/dalmatian.png";
import bassetHound from "../img/basset_hound.png";

import "../styles/Card.css";

export default function Card({
  setCurrentScore,
  currentScore,
  setSelectionArray,
  selectionArray,
  setCurrentSelection,
  currentSelection,
}) {
  const dogArray = [
    { id: 0, breed: "Terrier", img: terrier },
    { id: 1, breed: "Bull Dog", img: bullDog },
    { id: 2, breed: "Black Labrador", img: blackLab },
    { id: 3, breed: "Pug", img: pug },
    { id: 4, breed: "Australian Shepard", img: australianShepard },
    { id: 5, breed: "Blue Heeler", img: blueHeeler },
    { id: 6, breed: "German Shepard", img: germanShepard },
    { id: 7, breed: "Greyhound", img: greyhound },
    { id: 8, breed: "Golden Retriever", img: goldenRetriever },
    { id: 9, breed: "Poodle", img: poodle },
    { id: 10, breed: "Dalmatian", img: dalmatian },
    { id: 11, breed: "Basset Hound", img: bassetHound },
  ];

  function shuffleDogArray() {
    dogArray.sort((a, b) => 0.5 - Math.random()); //src: https://www.youtube.com/watch?v=5sNGqsMpW1E
    return dogArray;
  }
  function createDogCards() {
    return dogArray.map((dogArray) => {
      return (
        <div
          className="card"
          key={dogArray.id}
          onClick={() => {
            setCurrentScore(currentScore + 1);
            setCurrentSelection(dogArray.id);
            setSelectionArray((selectionArray) => {
              return [...selectionArray, dogArray.id];
            });
            console.log(currentSelection);
            console.log(selectionArray);
          }}
        >
          <img className="card_image" src={dogArray.img}></img>
          <h3 className="card_name">{dogArray.breed}</h3>
        </div>
      );
    });
  }
  shuffleDogArray();
  return <div className="card_container">{createDogCards()}</div>;
}
