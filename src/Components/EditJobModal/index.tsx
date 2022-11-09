import { useForm } from "react-hook-form";
import { useContext } from "react";
import { StyledForm } from "../../styles/StyledClientDash";
import { StyledModal } from "./StyledModal";
import { DashboardContext } from "../../contexts/dashboard";
import { StyledButton } from "../../styles/StyledButton";
import api from "../../services/api";

export default function EditJobModal({jobId}:any){

    const {openModal, setOpenModal, lat, lnt, jobsUser, setJobsUser}:any = useContext(DashboardContext)

    const {
        register,
        handleSubmit,
    } = useForm();

    const editJob = async (inputs:any) => {
        try {
            const correctFormatData = {
                userId: localStorage.getItem("@WorkingUser_Id"),
                Job: {
                    ...inputs,
                    lat: lat,
                    lnt: lnt
                },
                id: Number(jobId)
        }
            const {data} = await api.patch(`jobs/${Number(jobId)}`, correctFormatData, {  
                headers:
                    {
                        Authorization: `Bearer ${localStorage.getItem("@WorkingUser_Token")}`
                    }
                }
            )
            setJobsUser(jobsUser.map((job:any) => {return job.id === data.id ? data : job}))
            setOpenModal(false);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <StyledModal id="techAdd" open={openModal? "flex" : "none"}>
            <StyledForm className="modalForm" onSubmit={handleSubmit(editJob)}>
                <div className="modalHeader">
                    <h4>Editar Trabalho ou Serviço</h4>
                    <button className="modalClose" onClick={() => setOpenModal(false)}>x</button>
                </div>

                <label htmlFor="jobTitle">Título</label>
                <input id="jobTitle" placeholder="Insira um título" required {...register("Job_Name")}/>

                <label htmlFor="jobCategory">Selecionar Categoria</label>
                <select id="jobCattegory" {...register("Category")} required>
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

                <label htmlFor="modalDesciption">Descrição</label>
                <input
                    id="modalDescription"
                    placeholder="Descrição do serviço"
                    required
                    {...register("Description")}
                ></input>

                <StyledButton type="submit">Salvar</StyledButton>
            </StyledForm>
        </StyledModal>
    );
}