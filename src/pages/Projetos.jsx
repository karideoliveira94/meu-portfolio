import React, { useEffect, useState } from "react";
import geniusImg from "../assets/GitHub/Genius.png";
import portifolioImg from "../assets/GitHub/Portifolio.png";
import "../styles/Projetos.css";

// Repositórios em destaque (manuais)
const destaques = [
  {
    name: "Meu Portfolio",
    description: "Meu portfólio pessoal feito em React.",
    image: portifolioImg,
    link: "https://github.com/karideoliveira94/meu-portfolio",
  },
  {
    name: "Jogo Genius ETEP",
    description: "Este foi meu TCC da faculdade de Análise e Desenvolvimento de Sistemas na ETEP",
    image: geniusImg,
    link: "https://github.com/karideoliveira94/jogogeniusetep",
  },
];

const Projetos = () => {
  const [repos, setRepos] = useState([]);
  const [recentes, setRecentes] = useState([]);
  const [restantes, setRestantes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/karideoliveira94/repos")
      .then((res) => res.json())
      .then((data) => {
        // Ordena pelos mais recentes
        const ordenados = data.sort(
          (a, b) => new Date(b.pushed_at) - new Date(a.pushed_at)
        );

        // Remove duplicatas com os destaques
        const semDestaques = ordenados.filter(
          (repo) => !destaques.some((dest) => dest.name === repo.name)
        );

        // Separa os 3 mais recentes
        setRecentes(semDestaques.slice(0, 3));
        setRestantes(semDestaques.slice(3));
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar repositórios:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold mb-5">Meus Projetos no GitHub</h2>

      {/* Projetos em destaque (manual) */}
      {destaques.length > 0 && (
        <>
          <h3 className="fw-bold mb-4">Projetos em Destaque</h3>
          <div className="row g-4 mb-5">
            {destaques.map((proj, index) => (
              <div className="col-12 col-sm-6 col-md-4" key={index}>
                <div className="card h-100 shadow-sm border-0 rounded-4">
                  <img
                    src={proj.image}
                    className="card-img-top rounded-top-4"
                    alt={proj.name}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{proj.name}</h5>
                    <p className="card-text flex-grow-1">{proj.description}</p>
                    <a
                      href={proj.link}
                      className="btn btn-outline-dark mt-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no GitHub →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* 3 repositórios mais recentes */}
      {recentes.length > 0 && (
        <>
          <h3 className="fw-bold mb-4">Últimos Projetos</h3>
          <div className="row g-4 mb-5">
            {recentes.map((repo) => (
              <div className="col-12 col-sm-6 col-md-4" key={repo.id}>
                <div className="card h-100 shadow-sm border-0 rounded-4">
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{repo.name}</h5>
                    <p className="card-text flex-grow-1">
                      {repo.description || "Sem descrição."}
                    </p>
                    <p className="text-muted mb-2">
                      Linguagem: {repo.language || "Não especificada"}
                    </p>
                    <a
                      href={repo.html_url}
                      className="btn btn-outline-primary mt-auto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no GitHub →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Lista com os restantes */}
      {restantes.length > 0 && (
        <>
          <h4 className="fw-bold mb-3">Outros Repositórios</h4>
          <ul className="list-group">
            {restantes.map((repo) => (
              <li
                key={repo.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>{repo.name}</span>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary"
                >
                  Ver
                </a>
              </li>
            ))}
          </ul>
        </>
      )}

      {loading && <p>Carregando repositórios...</p>}
    </section>
  );
};

export default Projetos;
