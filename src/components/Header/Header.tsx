// components/Header.js

export function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__content-container">
            <div className="header__content-logo">
              <img src="/logo-code-start.svg" alt="logo" />
              <a href="#offer" className="btn-buy">
                <button>Quero trabalhar de casa</button>
              </a>
            </div>
          </div>
          <div className="header__content-titles">
            <h1 className="header__content-titles-title">
              Ganhe salário de médico com programação
            </h1>
            <h2 className="header__content-titles-subtitle">
              Existem mais de <strong>15.000 vagas</strong> disponíveis hoje e
              uma delas pode ser sua,{" "}
              <span>mesmo que você não saiba nada de programação!</span>
            </h2>
          </div>
          <a href="#offer" className="btn-buy" style={{ marginTop: "2em" }}>
            <button>
              Quero trabalhar de casa
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
