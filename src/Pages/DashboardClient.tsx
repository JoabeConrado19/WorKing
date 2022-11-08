import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineMenu } from "react-icons/ai";
import { AsideComponent } from "../Components/AboutUsPage/aside";

import { DashboardContext } from "../contexts/dashboard";


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
    const { setMapLocation, lat, lng, searchResult, setJobsUser, jobsUser, setNewJobsUser }: any = useContext(DashboardContext)

    // const [jobsUser, setJobsUser] = useState<IJobsUser[]>([] as IJobsUser[]);

    const { register, handleSubmit, reset } = useForm<iJobForm>();

    const getJobsUser = async (id: any) => {
        await api(`jobs?userId=${id}`)
            .then((resp) => {

                resp.data.length > 1 && setJobsUser(resp.data);
            })
            .catch((err) => console.log(err));
    };


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


            const { data } = await api.post("jobs", dataCorrectFormat, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("@WorkingUser_Token")}`,
                },
            });
            setJobsUser([...jobsUser, data])
            setNewJobsUser([...jobsUser, data])
            reset()
        } catch (error) {
            console.log(error);
        } finally {
        }
    };

    useEffect(() => {
        getJobsUser(localStorage.getItem("@WorkingUser_Id"));
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
                        <InputSearch />
                        <section>
                            <StyledForm onSubmit={handleSubmit(createJob)}>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Titulo da solicitação"
                                        {...register("Job_Name")}
                                    />
                                    <select {...register("Category")}>
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
                                    <textarea
                                        id=""
                                        placeholder="Digite aqui a descrição do serviço à solicitar"
                                        {...register("Description")}
                                    ></textarea>
                                    <button className="publish" type="submit">
                                        Publicar
                                    </button>
                                </div>
                            </StyledForm>
                        </section>
                        <ClientList />
                    </main>
                </StyledClientDash>
            </StyledBody>
        </>
    );
};
