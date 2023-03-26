import "./Styles.css";
import { useState } from "react";

const Card = () => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="card__container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h2 className="subtitulo subtitulo-hover">Placeholder Card Individual</h2>
      {hover && (
        <p className="texto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id semper
          massa, molestie hendrerit quam. Nam vel pretium augue. Cras quis
          varius odio. Pellentesque fermentum ligula tortor. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Donec at venenatis ligula. Sed ut accumsan ipsum, eu
          tincidunt neque. Nam consequat placerat sapien scelerisque vestibulum.
          Donec molestie augue sed mauris vehicula sagittis.
        </p>
      )}
    </div>
  );
};

export default Card;
