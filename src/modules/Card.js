import sampleDog from "../img/sample_dog.png";
import "../styles/Card.css";

export default function Card() {
  const dogArray = [
    { id: 0, breed: "Terrier", img: "" },
    { id: 1, breed: "Bull Dog", img: "" },
    { id: 2, breed: "Black Labrador", img: "" },
    { id: 3, breed: "Pug", img: "" },
    { id: 4, breed: "Australian Shepard", img: "" },
    { id: 5, breed: "Blue Heeler", img: "" },
    { id: 6, breed: "German Shepard", img: "" },
    { id: 7, breed: "Greyhound", img: "" },
    { id: 8, breed: "Golden Retriever", img: "" },
    { id: 9, breed: "Poodle", img: "" },
    { id: 10, breed: "Pitbull", img: "" },
    { id: 11, breed: "Dalmatian", img: "" },
    { id: 12, breed: "Basset Hound", img: "" },
  ];

  function shuffleDogArray() {
    dogArray.sort((a, b) => 0.5 - Math.random());
    return dogArray;
  }
  function createDogCards() {
    return dogArray.map((dogArray) => {
      return (
        <div className="card">
          <img className="card_image" src={sampleDog}></img>
          <h3 className="card_name">{dogArray.breed}</h3>
        </div>
      );
    });
  }

  return <div className="card_container">{createDogCards()}</div>;
}

//     <div className="card_container">
//       <div className="card">
//         <img className="card_image" src={sampleDog}></img>
//         <h3 className="card_name">Dog Name</h3>
//       </div>
//       <div className="card">
//         <img className="card_image" src={sampleDog}></img>
//         <h3 className="card_name">Dog Name</h3>
//       </div>
//       <div className="card">
//         <img className="card_image" src={sampleDog}></img>
//         <h3 className="card_name">Dog Name</h3>
//       </div>
//       <div className="card">
//         <img className="card_image" src={sampleDog}></img>
//         <h3 className="card_name">Dog Name</h3>
//       </div>
//       <div className="card">
//         <img className="card_image" src={sampleDog}></img>
//         <h3 className="card_name">Dog Name</h3>
//       </div>
//       <div className="card">
//         <img className="card_image" src={sampleDog}></img>
//         <h3 className="card_name">Dog Name</h3>
//       </div>
//       <div className="card">
//         <img className="card_image" src={sampleDog}></img>
//         <h3 className="card_name">Dog Name</h3>
//       </div>
//       <div className="card">
//         <img className="card_image" src={sampleDog}></img>
//         <h3 className="card_name">Dog Name</h3>
//       </div>
//       <div className="card">
//         <img className="card_image" src={sampleDog}></img>
//         <h3 className="card_name">Dog Name</h3>
//       </div>
//       <div className="card">
//         <img className="card_image" src={sampleDog}></img>
//         <h3 className="card_name">Dog Name</h3>
//       </div>
//       <div className="card">
//         <img className="card_image" src={sampleDog}></img>
//         <h3 className="card_name">Dog Name</h3>
//       </div>
//       <div className="card">
//         <img className="card_image" src={sampleDog}></img>
//         <h3 className="card_name">Dog Name</h3>
//       </div>
//     </div>
//   );
