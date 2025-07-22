import React, { useState, useEffect, useCallback } from "react";
import { Modal, Button } from "react-bootstrap";
import certificadoFullStack from '../assets/certificados/Certificado-fullstack.jpg';
import certificadoFrontEnd from '../assets/certificados/Certificado-frontend.jpg';
import certificadoHTMLCSS from '../assets/certificados/Certificado-htmlcss.jpg';
import certificadoJS from '../assets/certificados/Certificado-js.jpg';
import certificadoWebDeveloper from '../assets/certificados/Certificado-WebDeveloper.jpg';
import certificadoIngles from '../assets/certificados/Certificado-Ingles.jpg';
import certificadoGitEGithub from '../assets/certificados/Introdução-GIT-e-GitHub.jpg';
import certificadoLogicaDeProgramacao from '../assets/certificados/Logica-de-Programação.jpg';
import certificadoReactParaInternet from '../assets/certificados/React-aplicações-para-internet.jpg';
import certificadoReactAvancado from '../assets/certificados/React-avançado.jpg';
import certificadoReactComponentes from '../assets/certificados/React-Componentes.jpg';
import certificadoReactHooks from '../assets/certificados/React-Hook.jpg';
import certificadoReactIntroducao from '../assets/certificados/ReactJS-Introdução.jpg';
import '../styles/Certificados.css';

const certificados = [
  { title: "Certificado FullStack", image: certificadoFullStack },
  { title: "Certificado Front End", image: certificadoFrontEnd },
  { title: "Certificado Html e Css", image: certificadoHTMLCSS },
  { title: "Certificado Introdução à programação com JS", image: certificadoJS },  
  { title: "Certificado Git e GitHub", image: certificadoGitEGithub },    
  { title: "Certificado React - Introdução", image: certificadoReactIntroducao },
  { title: "Certificado React - Componentes", image: certificadoReactComponentes },
  { title: "Certificado React - Hooks", image: certificadoReactHooks },
  { title: "Certificado React - Aplicações para Internet", image: certificadoReactParaInternet },
  { title: "Certificado React - Práticas Avançadas", image: certificadoReactAvancado },
  { title: "Certificado Lógica de Programação", image: certificadoLogicaDeProgramacao },
  { title: "Certificado WebDeveloper", image: certificadoWebDeveloper },
  { title: "Certificado Língua Inglesa", image: certificadoIngles },
];

const Certificados = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
    setFadeKey((prev) => prev + 1);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0 ? certificados.length - 1 : prevIndex - 1;
      setFadeKey((prev) => prev + 1);
      return newIndex;
    });
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === certificados.length - 1 ? 0 : prevIndex + 1;
      setFadeKey((prev) => prev + 1);
      return newIndex;
    });
  }, []);

  // Suporte ao teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showModal) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showModal, handlePrev, handleNext]);

  return (
    <section className="container">
      <div className="text-center">
        <h2 className="text-center fw-bold mb-5">Meus Certificados</h2>
      </div>
      
      <div className="row g-4">
        {certificados.map((cert, index) => (
          <div className="col-12 col-sm-6 col-md-4" key={index}>
            <div
              className="card h-100 shadow-card border-0 rounded-4"
              onClick={() => handleOpen(index)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={cert.image}
                className="card-img-top rounded-top-4"
                alt={cert.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{cert.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal com animação de fade */}
      <Modal
        show={showModal}
        onHide={handleClose}
        centered
        size="xl"
        dialogClassName="fade-modal"
      >
        <Modal.Body
          className="d-flex flex-column align-items-center justify-content-center position-relative"
          style={{
            maxHeight: "80vh",
            overflow: "auto",
            padding: 0,
            backgroundColor: "#000",
          }}
        >
          {certificados[currentIndex] && (
            <img
              key={fadeKey}
              src={certificados[currentIndex].image}
              alt={certificados[currentIndex].title}
              className="fade-image"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "8px",
              }}
            />
          )}

          {/* Botões de navegação */}
          <Button
            variant="light"
            className="position-absolute start-0 top-50 translate-middle-y"
            style={{ opacity: 0.7 }}
            onClick={handlePrev}
          >
            ‹
          </Button>
          <Button
            variant="light"
            className="position-absolute end-0 top-50 translate-middle-y"
            style={{ opacity: 0.7 }}
            onClick={handleNext}
          >
            ›
          </Button>

          {/* Indicadores */}
          <div
            className="position-absolute bottom-0 mb-3 d-flex justify-content-center gap-2"
            style={{ width: "100%" }}
          >
            {certificados.map((_, idx) => (
              <span
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setFadeKey((prev) => prev + 1);
                }}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor:
                    idx === currentIndex ? "#fff" : "rgba(255,255,255,0.5)",
                  cursor: "pointer",
                  display: "inline-block",
                }}
              ></span>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Certificados;
