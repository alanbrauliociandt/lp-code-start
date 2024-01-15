import AOS from "aos";
import { useEffect } from "react";
import { Range } from "../Benefits/Range";
import { Chip } from "../Chip";
import { WorldProgramInfo } from "./components";
import "./WorldProgram.style.scss";

export function WorldProgram() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const arrayTexts = [
    {
      title: "R$4.472,00",
      text: "Média de salário para <span>desenvolvedor",
      font: "Fonte: GlassDoor",
    },
    {
      title: "78,27%",
      text: "Trabalhando de casa",
      font: "Fonte: Canal Tech",
    },
    {
      title: "+15.000 vagas",
      text: "E uma delas pode ser sua",
      font: "Fonte: LinkedIn",
    },
  ];
  return (
    <div className="world-programming">
      <div className="container__program-info" data-aos="zoom-in">
        <Chip label="Carreira" />
        <h1 className="section-title">A melhor profissão da década</h1>
        <div className="world-program-list">
          {arrayTexts.map((item, index) => {
            return (
              <WorldProgramInfo
                key={index}
                index={index}
                titleCard={item.title}
                text={item.text}
                font={item.font}
              />
            );
          })}
        </div>
        <div className="world-program-list_img">
          <img
            src="/vagas-abertas.png"
            alt="Vagas abertas programador Code Start"
          />
        </div>
        <Range />
        <a href="#offer" className="btn-buy">
          <button>Quero ser um programador</button>
        </a>
      </div>
    </div>
  );
}
