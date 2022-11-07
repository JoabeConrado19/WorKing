import { AiFillDelete, AiOutlineMenu } from "react-icons/ai";
import { BsPinMapFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { AsideComponent } from "../Components/AboutUsPage/aside";

import {
  StyledBody,
  StyledClientDash,
  StyledForm,
} from "../styles/StyledClientDash";
export const DashboardClient = () => {
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
              <li className="conteiner">
                <div className="top-conteiner">
                  <h3>Titulo do serviço</h3>
                  <span>Categoria</span>
                </div>
                <div className="conteudo">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iure laboriosam, tenetur voluptas sed illum quidem eveniet
                    dolore veniam eligendi non error libero, laborum quae ipsam
                    atque quod rerum aliquam cum?
                  </p>
                  <BsPinMapFill />
                  <div className="div-categoria">
                    <button>
                      <FiEdit2 />
                      Editar
                    </button>
                    <button className="delete">
                      {" "}
                      <AiFillDelete />
                      Deletar
                    </button>
                  </div>
                </div>
              </li>
              <li className="conteiner">
                <div className="top-conteiner">
                  <h3>Titulo do serviço</h3>
                  <span>Categoria</span>
                </div>
                <div className="conteudo">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iure laboriosam, tenetur voluptas sed illum quidem eveniet
                    dolore veniam eligendi non error libero, laborum quae ipsam
                    atque quod rerum aliquam cum?
                  </p>
                  <BsPinMapFill />

                  <div className="div-categoria">
                    <button>
                      <FiEdit2 />
                      Editar
                    </button>
                    <button className="delete">
                      {" "}
                      <AiFillDelete />
                      Deletar
                    </button>
                  </div>
                </div>
              </li>
              <li className="conteiner">
                <div className="top-conteiner">
                  <h3>Titulo do serviço</h3>
                  <span>Categoria</span>
                </div>
                <div className="conteudo">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iure laboriosam, tenetur voluptas sed illum quidem eveniet
                    dolore veniam eligendi non error libero, laborum quae ipsam
                    atque quod rerum aliquam cum?
                  </p>
                  <BsPinMapFill />

                  <div className="div-categoria">
                    <button>
                      <FiEdit2 /> Editar
                    </button>
                    <button className="delete">
                      {" "}
                      <AiFillDelete />
                      Deletar
                    </button>
                  </div>
                </div>
              </li>
              <li className="conteiner">
                <div className="top-conteiner">
                  <h3>Titulo do serviço</h3>
                  <span>Categoria</span>
                </div>
                <div className="conteudo">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iure laboriosam, tenetur voluptas sed illum quidem eveniet
                    dolore veniam eligendi non error libero, laborum quae ipsam
                    atque quod rerum aliquam cum?
                  </p>
                  <BsPinMapFill />

                  <div className="div-categoria">
                    <button>
                      <FiEdit2 />
                      Editar
                    </button>
                    <button className="delete">
                      {" "}
                      <AiFillDelete />
                      Deletar
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </main>
        </StyledClientDash>
      </StyledBody>
    </>
  );
};
