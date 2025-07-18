import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaProjectDiagram, FaCertificate } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home-container text-center py-5">
      <div className="intro mb-5">
        <h1 className="fw-bold">Olá, eu sou Karina de Oliveira</h1>
        <p className="lead">
          Desenvolvedora Front-End apaixonada por criar interfaces modernas e funcionais.
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        <div className="col-12 col-sm-6 col-md-4">
          <div className="card shadow-sm border-0 rounded-4 p-4 home-card"
               onClick={() => navigate("/sobre")}>
            <FaUser size={40} className="mb-3 text-primary" />
            <h5 className="fw-bold">Sobre Mim</h5>
            <p>Saiba mais sobre minha trajetória e tecnologias que utilizo.</p>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <div className="card shadow-sm border-0 rounded-4 p-4 home-card"
               onClick={() => navigate("/projetos")}>
            <FaProjectDiagram size={40} className="mb-3 text-success" />
            <h5 className="fw-bold">Projetos</h5>
            <p>Veja meus projetos no GitHub e destaques criados em React.</p>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <div className="card shadow-sm border-0 rounded-4 p-4 home-card"
               onClick={() => navigate("/certificados")}>
            <FaCertificate size={40} className="mb-3 text-warning" />
            <h5 className="fw-bold">Certificados</h5>
            <p>Confira meus cursos e formações com visualização ampliada.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
