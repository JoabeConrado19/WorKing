import { Div } from "./style";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdMenuOpen } from "react-icons/md";

import imgEduardo from "../../../assets/team/eduardo.png";
import imgLeonardo from "../../../assets/team/leonardo.png";
import imgJoabe from "../../../assets/team/joabe.png";
import imgRamon from "../../../assets/team/ramon.png";
import imgAnibal from "../../../assets/team/anibal.png";
import imgGabriel from "../../../assets/team/gabriel.png";
import imgFilipe from "../../../assets/team/filipe.png";
import { DashboardContext } from "../../../contexts/dashboard";
import { useContext } from "react";

interface IMain {
  setMenu: any;
  menu: boolean;
}

export const Main = () => {
  const { menu, setMenu }: any = useContext(DashboardContext);

  return (
    <>
      <Div>
        <div>
          <div className="container__informacoes">
            <div className="container__informacoes__header">
              <button
                onClick={(event) => {
                  event.preventDefault();
                  setMenu(!menu);
                }}
              >
                <MdMenuOpen />
              </button>
              <h2>Sobre</h2>
            </div>
            <p>
              Bem vindo á WorKing. Uma plataforma desenvolvida para atender
              tanto a demanda quanto a oferta de mão de obra.
            </p>
            <p>
              Voltada para facilitar o dia a dia de quem precisa de serviços
              domésticos, na contrução civil entre outros..
            </p>
          </div>
          <div className="container__lista__criadores">
            <h2>Criadores</h2>
            <div>
              <ul className="listaDeUsuarios">
                <li className="card">
                  <div>
                    <img src={imgEduardo} alt="Foto de perfil do Eduardo" />
                    <a
                      className="icone"
                      href="https://www.linkedin.com/in/eduardo-henrique-9b4a911a6/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      className="icone"
                      href="https://github.com/eduardohenri22"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                  </div>
                  <h3>Eduardo Henrique</h3>
                  <p>Product Owner</p>
                </li>
                <li className="card">
                  <div>
                    <img src={imgLeonardo} alt="Foto de perfil do Leonardo" />
                    <a
                      href="https://www.linkedin.com/in/leonardo-miranda-do-nascimento/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      href="https://github.com/miranda-Leonardo"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                  </div>
                  <h3>Leonardo Miranda</h3>
                  <p>Scrum Master</p>
                </li>
                <li className="card">
                  <div>
                    <img src={imgJoabe} alt="Foto de perfil do Joabe" />
                    <a
                      href="https://www.linkedin.com/in/joabe-conrado-borges-cavalcante-b77919218/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      href="https://github.com/JoabeConrado19"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                  </div>
                  <h3>Joabe Conrado</h3>
                  <p>Tech Leader</p>
                </li>
                <li className="card">
                  <div>
                    <img src={imgRamon} alt="Foto de perfil do Ramon" />
                    <a
                      href="https://www.linkedin.com/in/ramon-gato/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      href="https://github.com/ramon-gato"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                  </div>
                  <h3>Ramon gato</h3>
                  <p>Quality Ass.</p>
                </li>
                <li className="card">
                  <div>
                    <img src={imgAnibal} alt="Foto de perfil do Anibal" />
                    <a
                      href="https://www.linkedin.com/in/anibal-farias-28a25a163/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      href="https://github.com/anibalmoraes"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                  </div>
                  <h3>Anibal Farias</h3>
                  <p>Quality Ass.</p>
                </li>
                <li className="card">
                  <div>
                    <img src={imgGabriel} alt="Foto de perfil do Gabriel" />
                    <a
                      href="https://www.linkedin.com/in/gabrielmelo98dev/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      href="https://github.com/g4br1elm3l0"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                  </div>
                  <h3>Gabriel Melo</h3>
                  <p>Quality Ass.</p>
                </li>
                <li className="card">
                  <div>
                    <img src={imgFilipe} alt="Foto de perfil do Filipe" />
                    <a
                      href="https://www.linkedin.com/in/filipe-de-lucena-paiva/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      href="https://github.com/filipelucena1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                  </div>
                  <h3>Filipe Lucena</h3>
                  <p>Quality Ass.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Div>
    </>
  );
};
