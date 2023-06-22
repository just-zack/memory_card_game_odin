import sampleDog from "../img/sample_dog.png";
import "../styles/Card.css";

export default function Card() {
  const dogArray = [{ id: 0, breed: "Terrier", img: "../s" }];

  return (
    <div className="card_container">
      <div className="card">
        <img className="card_image" src={sampleDog}></img>
        <h3 className="card_name">Dog Name</h3>
      </div>
      <div className="card">
        <img className="card_image" src={sampleDog}></img>
        <h3 className="card_name">Dog Name</h3>
      </div>
      <div className="card">
        <img className="card_image" src={sampleDog}></img>
        <h3 className="card_name">Dog Name</h3>
      </div>
      <div className="card">
        <img className="card_image" src={sampleDog}></img>
        <h3 className="card_name">Dog Name</h3>
      </div>
      <div className="card">
        <img className="card_image" src={sampleDog}></img>
        <h3 className="card_name">Dog Name</h3>
      </div>
      <div className="card">
        <img className="card_image" src={sampleDog}></img>
        <h3 className="card_name">Dog Name</h3>
      </div>
      <div className="card">
        <img className="card_image" src={sampleDog}></img>
        <h3 className="card_name">Dog Name</h3>
      </div>
      <div className="card">
        <img className="card_image" src={sampleDog}></img>
        <h3 className="card_name">Dog Name</h3>
      </div>
      <div className="card">
        <img className="card_image" src={sampleDog}></img>
        <h3 className="card_name">Dog Name</h3>
      </div>
      <div className="card">
        <img className="card_image" src={sampleDog}></img>
        <h3 className="card_name">Dog Name</h3>
      </div>
      <div className="card">
        <img className="card_image" src={sampleDog}></img>
        <h3 className="card_name">Dog Name</h3>
      </div>
      <div className="card">
        <img className="card_image" src={sampleDog}></img>
        <h3 className="card_name">Dog Name</h3>
      </div>
    </div>
  );
}
