import { useContext, useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";

import { AsideComponent } from "../Components/AboutUsPage/aside";

import { useForm } from "react-hook-form";
import { MdMenuOpen } from "react-icons/md";
import EditJobModal from "../Components/EditJobModal";
import { InputSearch } from "../Components/InputSearch";
import api from "../services/api";
import { toast } from "react-toastify";
import {
  StyledBody,
  StyledClientDash,
  StyledForm,
} from "../styles/StyledClientDash";
import { useNavigate } from "react-router-dom";
import { DashboardContext } from "../contexts/dashboard";

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
  const Navigate = useNavigate();

  const {
    setMapLocation,
    lat,
    lng,
    setOpenModal,
    menu,
    setMenu,
    jobsUser,
    search,
    filteredProducts,
    setJobsUser,
    verifyToken,
  }: any = useContext(DashboardContext);

  const [jobId, setJobId] = useState<null | number>(null);

  const { register, handleSubmit, reset } = useForm<iJobForm>();

  const createJob = async (job: iJobForm) => {
    setMapLocation();
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
      const { data } = await api.post("jobs", dataCorrectFormat, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@WorkingUser_Token")}`,
        },
      });
      console.log(data);
      reset();
      setJobsUser([data, ...jobsUser]);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    let Token = window.localStorage.getItem("@WorkingUser_Token");
    let Id = window.localStorage.getItem("@WorkingUser_Id");
    api
      .get(`/users/${Id}`, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((response) => {
        if (response.status !== 200) {
          toast.error("Limite de tempo expirado, faça o login novamente!", {
            autoClose: 3000,
          });
          Navigate("/login");
        } else if (response.data.user_type === "worker") {
          Navigate("/dashboard-worker");
        }
      })
      .catch((err) => Navigate("/login"));
  }, []);

  const deleteJob = async (event: any) => {
    try {
      const jobId = Number(event.target.id.slice(6));

      await api.delete(`jobs/${jobId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@WorkingUser_Token")}`,
        },
      });
      const filteredUserJobs = jobsUser.filter((job: any) => job.id !== jobId);
      setJobsUser(filteredUserJobs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getJobsUser = async (id: any) => {
      await api(`jobs?userId=${id}`)
        .then((resp: any) => {
          resp.data?.length > 0 && setJobsUser(resp.data);
        })
        .catch((err: any) => console.log(err));
    };

    getJobsUser(localStorage.getItem("@WorkingUser_Id"));
  }, [search]);

  return (
    <>
      <EditJobModal jobId={jobId} />
      <StyledBody>
        <AsideComponent />
        <StyledClientDash>
          <header>
            <button
              className="btMenuOpen"
              onClick={(event) => {
                event.preventDefault();
                setMenu(!menu);
              }}
            >
              <MdMenuOpen />
            </button>
            <h1>Home</h1>
          </header>
          <main>
            <div className="input-div">
              <InputSearch />
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
              {search
                ? filteredProducts.map(
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

                            <div className="div-categoria">
                              <button
                                onClick={() => {
                                  setOpenModal(true);
                                  setJobId(id);
                                }}
                                className="btedit"
                              >
                                <FiEdit2 />
                                Editar
                              </button>
                              <button
                                id={`delete${id}`}
                                onClick={(event) => deleteJob(event)}
                                className="delete"
                              >
                                <AiFillDelete />
                                Deletar
                              </button>
                            </div>
                          </div>
                        </li>
                      );
                    }
                  )
                : jobsUser.map(
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

                            <div className="div-categoria">
                              <button
                                onClick={() => {
                                  setOpenModal(true);
                                  setJobId(id);
                                }}
                                className="btedit"
                              >
                                <FiEdit2 />
                                Editar
                              </button>
                              <button
                                id={`delete${id}`}
                                onClick={(event) => deleteJob(event)}
                                className="delete"
                              >
                                <AiFillDelete />
                                Deletar
                              </button>
                            </div>
                          </div>
                        </li>
                      );
                    }
                  )}
            </ul>
          </main>
        </StyledClientDash>
      </StyledBody>
    </>
  );
};
