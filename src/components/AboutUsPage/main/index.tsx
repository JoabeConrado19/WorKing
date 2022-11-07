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

interface IMain {
  setMenu: any;
  menu: boolean;
}

export const Main = ({ setMenu, menu }: IMain) => {
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
              domésticos, na contrução civil ou até mesmo uma acessoria.
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
                      href="https://br.linkedin.com/?src=go-pa&trk=sem-ga_campid=12619604099_asid=122510712920_crid=509739556235_kw=linked_d=c_tid=kwd-103941963_n=g_mt=e_geo=1031947_slid=&mcid=6821526239111716925&cid=&gclid=CjwKCAjwzY2bBhB6EiwAPpUpZu_-1p71n1luHJsp1yagudOlujNBOvm2HlYK5lNiQEH7WoGkcc4r5xoCwE4QAvD_BwE&gclsrc=aw.ds"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      className="icone"
                      href="https://github.com/"
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
                      href="https://br.linkedin.com/?src=go-pa&trk=sem-ga_campid=12619604099_asid=122510712920_crid=509739556235_kw=linked_d=c_tid=kwd-103941963_n=g_mt=e_geo=1031947_slid=&mcid=6821526239111716925&cid=&gclid=CjwKCAjwzY2bBhB6EiwAPpUpZu_-1p71n1luHJsp1yagudOlujNBOvm2HlYK5lNiQEH7WoGkcc4r5xoCwE4QAvD_BwE&gclsrc=aw.ds"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      href="https://github.com/"
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
                      href="https://br.linkedin.com/?src=go-pa&trk=sem-ga_campid=12619604099_asid=122510712920_crid=509739556235_kw=linked_d=c_tid=kwd-103941963_n=g_mt=e_geo=1031947_slid=&mcid=6821526239111716925&cid=&gclid=CjwKCAjwzY2bBhB6EiwAPpUpZu_-1p71n1luHJsp1yagudOlujNBOvm2HlYK5lNiQEH7WoGkcc4r5xoCwE4QAvD_BwE&gclsrc=aw.ds"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      href="https://github.com/"
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
                      href="https://br.linkedin.com/?src=go-pa&trk=sem-ga_campid=12619604099_asid=122510712920_crid=509739556235_kw=linked_d=c_tid=kwd-103941963_n=g_mt=e_geo=1031947_slid=&mcid=6821526239111716925&cid=&gclid=CjwKCAjwzY2bBhB6EiwAPpUpZu_-1p71n1luHJsp1yagudOlujNBOvm2HlYK5lNiQEH7WoGkcc4r5xoCwE4QAvD_BwE&gclsrc=aw.ds"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      href="https://github.com/"
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
                      href="https://br.linkedin.com/?src=go-pa&trk=sem-ga_campid=12619604099_asid=122510712920_crid=509739556235_kw=linked_d=c_tid=kwd-103941963_n=g_mt=e_geo=1031947_slid=&mcid=6821526239111716925&cid=&gclid=CjwKCAjwzY2bBhB6EiwAPpUpZu_-1p71n1luHJsp1yagudOlujNBOvm2HlYK5lNiQEH7WoGkcc4r5xoCwE4QAvD_BwE&gclsrc=aw.ds"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      href="https://github.com/"
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
                      href="https://br.linkedin.com/?src=go-pa&trk=sem-ga_campid=12619604099_asid=122510712920_crid=509739556235_kw=linked_d=c_tid=kwd-103941963_n=g_mt=e_geo=1031947_slid=&mcid=6821526239111716925&cid=&gclid=CjwKCAjwzY2bBhB6EiwAPpUpZu_-1p71n1luHJsp1yagudOlujNBOvm2HlYK5lNiQEH7WoGkcc4r5xoCwE4QAvD_BwE&gclsrc=aw.ds"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      href="https://github.com/"
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
                      href="https://br.linkedin.com/?src=go-pa&trk=sem-ga_campid=12619604099_asid=122510712920_crid=509739556235_kw=linked_d=c_tid=kwd-103941963_n=g_mt=e_geo=1031947_slid=&mcid=6821526239111716925&cid=&gclid=CjwKCAjwzY2bBhB6EiwAPpUpZu_-1p71n1luHJsp1yagudOlujNBOvm2HlYK5lNiQEH7WoGkcc4r5xoCwE4QAvD_BwE&gclsrc=aw.ds"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillLinkedin />
                    </a>
                    <a
                      href="https://github.com/"
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
