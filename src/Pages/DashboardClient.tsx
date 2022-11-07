import { useContext, useEffect, useState } from "react";
import { AiFillDelete, AiOutlineMenu } from "react-icons/ai";
import { BsPinMapFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { number } from "yup/lib/locale";
import { AsideComponent } from "../Components/AboutUsPage/aside";
import { DashboardContext } from "../contexts/dashboard";
import api from "../services/api";

import {
  StyledBody,
  StyledClientDash,
  StyledForm,
} from "../styles/StyledClientDash";

interface IJobsUser {
  map<T>(
    arg0: ({
      userId,
      Job: { Job_Name, Description, Lat, Int, Category },
      id
    }: IJobsUser) => JSX.Element
  ): import("react").ReactNode;
  userId: number;
  Job: {
    Job_Name: string;
    Description: string;
    Lat: number;
    Int: number;
    Category: string;
  };
  id: number;
}

export const DashboardClient = () => {
  const [jobsUser, setJobsUser] = useState<IJobsUser | null>(null);

  const getJobsUser = async (id: any) => {
    await api(`/jobs?userId=${id}`)
      .then((resp) => {
        console.log(resp.data);
        resp.data.length < 1 ? setJobsUser(null) : setJobsUser(resp.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getJobsUser(window.localStorage.getItem("@WorkingUser_Id"));
  }, []);

  return (
    <>
      <StyledBody>
        <AsideComponent />
        <StyledClientDash>
          <header>
            <AiOutlineMenu />
            <h1>Home</h1>
          </header>
          <main>
            <div className="input-div">
              <input placeholder="Digite aqui sua pesquisa" />
              <h2>Lista de oportunidades </h2>
            </div>
            <section>
              <StyledForm>
                <div>
                  <input type="text" placeholder="Titulo da solicitação" />
                  <select name="" id="">
                    <option value=""                           >Categoria               </option>
                    <option value="Agronegócios"               >Agronegócios            </option>
                    <option value="Assistência técnica"        >Assistência técnica     </option>
                    <option value="Automotivo"                 >Automotivo              </option>
                    <option value="Construção"                 >Construção              </option>
                    <option value="Consultoria"                >Consultoria             </option>
                    <option value="Design"                     >Design                  </option>
                    <option value="Educação"                   >Educação                </option>
                    <option value="Energias"                   >Energias                </option>
                    <option value="Entretenimento"             >Entretenimento          </option>
                    <option value="Eventos"                    >Eventos                 </option>
                    <option value="Hotelaria"                  >Hotelaria               </option>
                    <option value="Logística e Transporte"     >Logística e Transporte  </option>
                    <option value="Manufatura Industrial"      >Manufatura Industrial   </option>
                    <option value="Mercado Imobiliário"        >Mercado Imobiliário     </option>
                    <option value="Mídia"                      >Mídia                   </option>
                    <option value="Moda e beleza"              >Moda e beleza           </option>
                    <option value="Saúde"                      >Saúde                   </option>
                    <option value="Serviços ao Consumidor"     >Serviços ao Consumidor  </option>
                    <option value="Serviços Domésticos"        >Serviços Domésticos     </option>
                    <option value="Serviços Financeiros"       >Serviços Financeiros    </option>
                    <option value="Serviços para Empresas"     >Serviços para Empresas  </option>
                    <option value="Tecnologia"                 >Tecnologia              </option>
                    <option value="Telecomunicações"           >Telecomunicações        </option>
                  </select>
                </div>
                <div className="description">
                  <textarea
                    name=""
                    id=""
                    placeholder="Digite aqui a descrição do serviço à solicitar"
                  ></textarea>
                  <button className="publish">Publicar</button>
                </div>
              </StyledForm>
            </section>
            <ul>
              {!jobsUser ? (
                <>
                  <h2>
                    Que pena! Você não solicitou nenhum serviço em nossa
                    plataforma.
                  </h2>
                  <p>
                    Não perca tempo e solicite agora mesmo serviço com um de
                    nossos profissionais cadastrados!
                  </p>
                </>
              ) : (
                jobsUser.map(
                  ({
                    userId,
                    Job: { Job_Name, Description, Lat, Int, Category },
                    id
                  }: IJobsUser) => {
                    return (
                      <li key={id} className="conteiner">
                        <div className="top-conteiner">
                          <h3>{Job_Name}</h3>
                          <span>{Category}</span>
                        </div>
                        <div className="conteudo">
                          <p>{Description}</p>
                          <BsPinMapFill />
                          <div className="div-categoria">
                            <button>
                              <FiEdit2 />
                              Editar
                            </button>
                            <button className="delete">
                              <AiFillDelete />
                              Deletar
                            </button>
                          </div>
                        </div>
                      </li>
                    );
                  }
                )
              )}
            </ul>
          </main>
        </StyledClientDash>
      </StyledBody>
    </>
  );
};
