import { useTranslation } from "react-i18next";

const Changer = () => {
  const { i18n } = useTranslation();

  function handleChangeLang(language) {
    i18n.changeLanguage(language);
  }

  return (
    <div className="change__container">
      <p className="subtitulo subtitulo-hover">Linguagem de visualização: </p>
      <p
        className="subtitulo subtitulo-hover"
        onClick={() => handleChangeLang("pt-BR")}
      >
        Português
      </p>

      <p
        className="subtitulo subtitulo-hover"
        onClick={() => handleChangeLang("en-US")}
      >
        Inglês
      </p>
    </div>
  );
};

export default Changer;
