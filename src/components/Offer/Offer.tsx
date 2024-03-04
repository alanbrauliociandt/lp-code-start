import AOS from "aos";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Chip } from "../Chip";
import { LineOffer } from "./LineOffer";

export function Offer() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const srcParam = params.get("src");
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const courses = [
    { title: "HTML/CSS", price: 129 },
    { title: "Bootstrap", price: 129 },
    { title: "Git/Github", price: 129 },
    { title: "Javascript", price: 147 },
    { title: "React JS", price: 197 },
    { title: "Node JS", price: 197 },
  ];

  const additionalItems = [
    { title: "Conteúdos sobre mercado de trabalho", price: 47 },
    { title: "Exercícios", price: 97 },
    { title: "Projetos desenvolvidos na Code Start", price: 197 },
    { title: "Suporte exclusivo para alunos", price: 97 },
    { title: "Networking com pessoas da profissão", price: 97 },
    { title: "Simulação de entrevistas", price: 197 },
  ];

  const total =
    courses.reduce((acc, course) => acc + course.price, 0) +
    additionalItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <div className="offer" id="offer">
        <div className="container">
          <div className="title-container">
            <Chip label="Investimento" />
            <h1 className="section-title">
              <strong>TUDO O QUE VOCÊ PRECISA</strong> EM UM LUGAR SÓ
            </h1>
          </div>
          <div className="card-offer">
            {courses.map((course, index) => (
              <LineOffer
                key={index}
                title={`Acesso ao curso de ${course.title}`}
                price={`R$ ${course.price},00`}
              />
            ))}
            {additionalItems.map((item, index) => (
              <LineOffer
                key={index}
                title={`Acesso a ${item.title}`}
                price={`R$ ${item.price},00`}
              />
            ))}
            <div className="card-offer__total">
              <p>Total</p>
              <span style={{ color: "red" }}>
                <s
                  style={{
                    textDecorationColor: "#D8D8D8",
                  }}
                >{`R$ ${total},00`}</s>
              </span>
            </div>
            <div className="guarantee_access">
              <h4>Mas hoje você não vai precisar investir isso...</h4>
              <h3>
                Aprenda do zero ao profissional, em um treinamento 100% online e
                tenha acesso imediato por apenas:
              </h3>
              <h1 className="card-offer__price">
                <p style={{ fontSize: "24px" }}>12x de</p>R$59,90
              </h1>
              <p style={{ letterSpacing: "7.4px", color: "#D8D8D8" }}>
                {" "}
                ou 597 à vista
              </p>
              <a
                href={`https://pay.kiwify.com.br/orBxsQS${
                  srcParam ? `?src=${srcParam}` : ""
                }`}
                target="_blank"
                rel="noreferrer"
              >
                <button className="offer_button" data-aos="fade-up">
                  QUERO ME INSCREVER
                </button>
              </a>
            </div>
            <img
              className="cards-accept"
              src="./cartoons.png"
              alt="Cartões aceitos Code Start"
            />
            <div className="guarantee">
              <img src="./seven-days.png" alt="Garantia de 7 dias" />
              <p>
                Você tem até 07 dias para solicitar o cancelamento e receber seu
                investimento de volta. Basta solicitar o seu reembolso enviando
                um simples e-mail para o nosso suporte (contato@icodestart.com)
                dentro do prazo estabelecido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
