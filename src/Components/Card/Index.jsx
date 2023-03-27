import "./Styles.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Card = ({ title, textPath, className }) => {
  const [hover, setHover] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      className={`card__container ${className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h3 className="subtitulo subtitulo-hover">{title}</h3>
      {hover && <p className="texto">{t(textPath)}</p>}
    </div>
  );
};

export default Card;
