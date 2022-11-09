import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsPinMapFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { DashboardContext } from "../../contexts/dashboard";

export const ClientList = () => {

    const { setJobsUser, jobsUser, workers, newJobsUser, setNewJobsUser, getJobsUser, filteredProducts }: any = useContext(DashboardContext)

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

    return (
        <ul>

            {


                filteredProducts.map(
                    ({
                        userId,
                        Job: { Job_Name, Description, Category },
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
            }
        </ul>
    )
}



