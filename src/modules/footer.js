import "../styles/footer.css";
import github from "../img/github.png";

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <div className="footer_container">
      <h3 className="footer--text">
        Copyright © {year}{" "}
        <a href="https://github.com/zach-huang" target="_blank">
          zach.huang
        </a>
      </h3>
      <a href="https://github.com/zach-huang" target="blank">
        <img className="footer-githubIcon" src={github}></img>
      </a>
    </div>
  );
}
