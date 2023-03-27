import "./App.css";

import Card from "./Components/Card/Index";
import Changer from "./Components/Changer/Index";

function App() {
  return (
    <>
      <header>
        <h1 className="titulo titulo-hover">Terra Brasil</h1>
        <Changer />
      </header>
      <main className="App">
        <h2 className="titulo titulo-hover">São Paulo</h2>
        <div className="main-card__container">
          <Card title="Embu das Artes" textPath="sp.textF" className="card_1" />
          <Card title="São Roque" textPath="sp.textS" className="card_1" />
          <Card title="Itu" textPath="sp.textT" className="card_1" />
        </div>

        <h2 className="titulo titulo-hover">Bahia</h2>
        <div className="main-card__container">
          <Card title="Corumbau" textPath="ba.textF" className="card_2" />
          <Card title="Taipus de Fora" textPath="ba.textS" className="card_2" />
          <Card
            title="Santa Cruz Cabrália"
            textPath="ba.textT"
            className="card_2"
          />
        </div>

        <h2 className="titulo titulo-hover">Rio de Janeiro</h2>
        <div className="main-card__container">
          <Card title="Petrópolis" textPath="rj.textF" className="card_3" />
          <Card
            title="Visconde de Mauá"
            textPath="rj.textS"
            className="card_3"
          />
          <Card title="Paraty" textPath="rj.textT" className="card_3" />
        </div>
      </main>
    </>
  );
}

export default App;
