import "./Styles.css";
import { useState } from "react";

const Card = ({ title, text, className }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`card__container ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h3 className="subtitulo subtitulo-hover">{title}</h3>
      {hover && <p className="texto">{text}</p>}
    </div>
  );
};

export default Card;
