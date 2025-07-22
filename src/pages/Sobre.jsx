import React, { useEffect, useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFigma,
  FaCode,
  FaCogs,
  FaGitAlt,
  FaMicrosoft
} from "react-icons/fa";
import "../styles/Sobre.css";

const Sobre = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="container sobre-container">
      <div className="text-center">
        <h2 className="text-center fw-bold mb-5">Sobre Mim</h2>
      </div>

      <div className="sobre-texto">
        <p>
          Sou <strong>desenvolvedora front-end</strong> com 3 anos de experiência, 
          formada em análise e desenvolvimento de sistemas. 
          Apaixonada por criar interfaces funcionais, modernas e acessíveis.
          Atuo com foco em <strong>React, HTML, CSS e JavaScript</strong>, além
          de ter vivência prática em projetos com <strong>.NET</strong> (C#,
          Blazor, MVC e WebForms).
        </p>

        <p>
          Tenho experiência tanto com <strong>sistemas modernos</strong> quanto{" "}
          <strong>legados</strong>, o que me permitiu desenvolver flexibilidade
          e habilidade para manter a qualidade visual em diferentes contextos.
          Atualmente, sou a única desenvolvedora front-end da empresa, sendo
          responsável por estruturar, padronizar e orientar o desenvolvimento
          da interface em diversos projetos.
        </p>

        <p>
          Também atuo com <strong>prototipação de alta fidelidade no Figma</strong>,
          colaborando para garantir uma experiência fluida do usuário, da ideia até a entrega.
        </p>
      </div>

      <h4 className="text-center mt-5">Tecnologias e Ferramentas</h4>

      <div className="row mt-4 g-4">
        {/* Card Front-end */}
        <div className={`col-md-4 ${animate ? "fade-in" : ""}`}>
          <div className="sobre-card">
            <h5 className="fw-bold text-center mb-3">Front-end</h5>
            <ul>
              <li><FaReact className="icon react" /> React</li>
              <li><FaJs className="icon js" /> JavaScript</li>
              <li><FaHtml5 className="icon html" /> HTML</li>
              <li><FaCss3Alt className="icon css" /> CSS</li>
              <li><FaFigma className="icon figma" /> Figma</li>
            </ul>
          </div>
        </div>

        {/* Card Integração */}
        <div className={`col-md-4 ${animate ? "fade-in" : ""}`}>
          <div className="sobre-card">
            <h5 className="fw-bold text-center mb-3">Integração / Full Stack</h5>
            <ul>
              <li><FaCode className="icon default" /> Blazor</li>
              <li><FaMicrosoft className="icon microsoft" /> .NET / .NET Framework</li>
              <li><FaCode className="icon default" /> C#</li>
              <li><FaCode className="icon default" /> MVC</li>
              <li><FaCode className="icon default" /> WebForms</li>
            </ul>
          </div>
        </div>

        {/* Card Ferramentas */}
        <div className={`col-md-4 ${animate ? "fade-in" : ""}`}>
          <div className="sobre-card">
            <h5 className="fw-bold text-center mb-3">Ferramentas e DevOps</h5>
            <ul>
              <li><FaCogs className="icon default" /> Visual Studio</li>
              <li><FaCogs className="icon default" /> Visual Studio Code</li>
              <li><FaGitAlt className="icon git" /> Git</li>
              <li><FaMicrosoft className="icon microsoft" /> Azure DevOps</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="mt-5 text-center">
        🎯 Busco continuamente evoluir tecnicamente e contribuir com times que
        valorizem <strong>qualidade visual, usabilidade e boas práticas</strong>.
      </p>
    </section>
  );
};

export default Sobre;
