import { MouseEvent, useContext, useEffect, useState } from "react";
import { AiFillDelete, AiOutlineMenu } from "react-icons/ai";
import { BsPinMapFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
// import { number } from "yup/lib/locale";
import { AsideComponent } from "../Components/AboutUsPage/aside";
// import { DashboardContext } from "../contexts/dashboard";

import { useForm } from "react-hook-form";

import { DashboardContext } from "../contexts/dashboard";
import EditJobModal from "../Components/EditJobModal";
import { number } from "yup/lib/locale";


import api from "../services/api";

import { ClientList } from "../Components/ClientList";
import { InputSearch } from "../Components/InputSearch";
import {
    StyledBody,
    StyledClientDash,
    StyledForm
} from "../styles/StyledClientDash";

interface iJobForm {
    Job_Name: string;
    Description: string;
    Category: string;
    lat?: number | undefined;
    lnt?: number | undefined;
}
interface iDataCreateJob {
    userId: number;
    Job: iJobForm;
}

interface IJobsUser {
    map<T>(
        arg0: ({
            userId,
            Job: { Job_Name, Description, lat, lnt, Category },
            id,
        }: IJobsUser) => JSX.Element
    ): import("react").ReactNode;
    userId: number;
    Job: {
        Job_Name: string;
        Description: string;
        lat: number;
        lnt: number;
        Category: string;
    };
    id: number;
}

export const DashboardClient = () => {
    
  const {setMapLocation, lat, lng, setOpenModal}:any = useContext(DashboardContext)

  const [jobsUser, setJobsUser] = useState<IJobsUser[]>([] as IJobsUser[]);
  const [jobId, setJobId] = useState<null | number>(null);

  const { register, handleSubmit, reset } = useForm<iJobForm>();
 
  const createJob = async (job: iJobForm) => {
    setMapLocation()
    try {
      const dataCorrectFormat: iDataCreateJob = {
        userId: Number(localStorage.getItem("@WorkingUser_Id")),
        Job: {
          ...job,
          lat: lat,
          lnt: lng,
        },
      };
      console.log(dataCorrectFormat);
      const {data} = await api.post("jobs", dataCorrectFormat, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@WorkingUser_Token")}`,
        },
      });
      console.log(data);
      reset()
      setJobsUser([...jobsUser, data]);
    } catch (error) {
      console.log(error);
    } finally { 
       
    }
  };

  const deleteJob = async (event:any) => {
    try {
        const jobId = Number(event.target.id.slice(6))

        await api.delete(`jobs/${jobId}`,
            {  headers: 
                {
                    Authorization: `Bearer ${localStorage.getItem("@WorkingUser_Token")}`
                }
            }
        )
        const filteredUserJobs = jobsUser.filter((job) => job.id !== jobId )
        setJobsUser(filteredUserJobs)
    } catch (error) {
        console.log(error)
    }
}

  useEffect(() => {
    const getJobsUser = async (id: any) => {
        await api(`jobs?userId=${id}`)
          .then((resp) => {
            console.log(resp.data);
            resp.data?.length > 0 && setJobsUser(resp.data);
          })
          .catch((err) => console.log(err));
      };

    getJobsUser(localStorage.getItem("@WorkingUser_Id"));
  }, []);

  return (
    <>
    <EditJobModal jobId={jobId}/>
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
              <StyledForm onSubmit={handleSubmit(createJob)}>
                <div>
                  <input
                    type="text"
                    placeholder="Titulo da solicitação"
                    required
                    {...register("Job_Name")}
                  />
                  <select {...register("Category")} required>
                    <option value="">Categoria </option>
                    <option value="Agronegócios">Agronegócios </option>
                    <option value="Assistência técnica">
                      Assistência técnica{" "}
                    </option>
                    <option value="Automotivo">Automotivo </option>
                    <option value="Construção">Construção </option>
                    <option value="Consultoria">Consultoria </option>
                    <option value="Design">Design </option>
                    <option value="Educação">Educação </option>
                    <option value="Energias">Energias </option>
                    <option value="Entretenimento">Entretenimento </option>
                    <option value="Eventos">Eventos </option>
                    <option value="Hotelaria">Hotelaria </option>
                    <option value="Logística e Transporte">
                      Logística e Transporte{" "}
                    </option>
                    <option value="Manufatura Industrial">
                      Manufatura Industrial{" "}
                    </option>
                    <option value="Mercado Imobiliário">
                      Mercado Imobiliário{" "}
                    </option>
                    <option value="Mídia">Mídia </option>
                    <option value="Moda e beleza">Moda e beleza </option>
                    <option value="Saúde">Saúde </option>
                    <option value="Serviços ao Consumidor">
                      Serviços ao Consumidor{" "}
                    </option>
                    <option value="Serviços Domésticos">
                      Serviços Domésticos{" "}
                    </option>
                    <option value="Serviços Financeiros">
                      Serviços Financeiros{" "}
                    </option>
                    <option value="Serviços para Empresas">
                      Serviços para Empresas{" "}
                    </option>
                    <option value="Tecnologia">Tecnologia </option>
                    <option value="Telecomunicações">Telecomunicações </option>
                  </select>
                </div>
                <div className="description">
                  <input
                    id=""
                    placeholder="Digite aqui a descrição do serviço à solicitar"
                    required
                    {...register("Description")}
                  ></input>
                  <button className="publish" type="submit">
                    Publicar
                  </button>
                </div>
              </StyledForm>
            </section>
            <ul>
              {!jobsUser ? (
                <>
                  <h2>
                    Que pena! Você ainda não solicitou nenhum serviço em nossa
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
                    Job: { Job_Name, Description, lat, lnt, Category },
                    id,
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
                            <button onClick={() => {setOpenModal(true); setJobId(id)}} className="btedit">
                              <FiEdit2 />
                              Editar
                            </button>
                            <button id={`delete${id}`} onClick={(event) => deleteJob(event)} className="delete">
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
