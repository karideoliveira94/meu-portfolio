import React from "react";
import projetoMove from '../assets/projeto-move.png';
import projetoMusicApp from '../assets/projeto-barbearia.png';
import projetoTodoApp from '../assets/projeto-Todo.png';
import projetoBarber from '../assets/projeto-barbearia.png';

const figmaProjects = [
  {
    title: "Projeto Move",
    description: "Landing page para serviço de mudança.",
    image: projetoMove,
    link: "https://www.figma.com/proto/yStxEFZkW75wZcFTIQkqSz/Move?node-id=10-238&p=f&t=YIj0M4Y5FsVbTHBV-1&scaling=min-zoom&content-scaling=fixed&page-id=10%3A237&starting-point-node-id=10%3A238",
  },
  {
    title: "Music App",
    description: "Aplicativo de músicas",
    image: projetoMusicApp,
    link: "https://www.figma.com/proto/OOKn7rBV58uYAjcMXU7Osw/Curso-Interface?node-id=0-1&t=x4ChJPvFtMOM2zTk-1",
  },
  {
    title: "Todo App",
    description: "Aplicativo de tarefas.",
    image: projetoTodoApp,
    link: "https://www.figma.com/proto/t8KbBFhcUzuvDzBdmcSASm/Todo-App?t=x4ChJPvFtMOM2zTk-1",
  },
  {
    title: "Projeto Barbearia",
    description: "Landing page para serviço de barbearia.",
    image: projetoBarber,
    link: "https://www.figma.com/proto/2b7w4huN5fSAvf1fzJhuuq/LandingPage-Barber-Web?node-id=0-1&t=ej5QY8Kn54cxLlK9-1",
  },
];

const FigmaPortfolio = () => {
  return (
    <section className="container">
      <h2 className="text-center fw-bold mb-5">Meus Projetos no Figma</h2>
      <div className="row g-4">
        {figmaProjects.map((project, index) => (
          <div className="col-12 col-sm-6 col-md-4" key={index}>
            <div className="card h-100 shadow-sm border-0 rounded-4">
              <img
                src={project.image}
                className="card-img-top rounded-top-4"
                alt={project.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text flex-grow-1">{project.description}</p>
                <a
                  href={project.link}
                  className="btn btn-outline-primary mt-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver no Figma →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FigmaPortfolio;
