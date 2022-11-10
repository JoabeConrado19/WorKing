import { AsideComponent } from "../Components/AboutUsPage/aside";
import { FiEdit2 } from "react-icons/fi";
import { useForm } from "react-hook-form";
import {
  StyledInput,
  StyledProfile,
} from "../styles/StyledProfilePage";
import api from "../services/api";
import { useContext } from "react";
import { DashboardContext } from "../contexts/dashboard";
import { toast } from "react-toastify";

interface IUser {
  name?: string;
  profile_pic?: string;
  age?: number;
  password?: string;
  contact?: number;
}

export const ProfilePage = () => {
  const { userImg, userName, email, userAge, userContact }: any =
    useContext(DashboardContext);

  const {
    register,
    handleSubmit,
  } = useForm({
  });

  const token = localStorage.getItem("@WorkingUser_Token");
  const id = window.localStorage.getItem("@WorkingUser_Id");

  const editUserInfo = async (data: IUser) => {
    api
      .patch(`users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        if (resp.status == 200) {
          toast.success("Dados atualizados com sucesso", { autoClose: 3000 });
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <AsideComponent />

      <StyledProfile>
        <form onSubmit={handleSubmit(editUserInfo)}>
          <div className="containerUsuario">
            <div className="containerImage">
              <h2>Foto de perfil</h2>
              <img src={userImg} alt="imagem Usuario" />
            </div>
            <div className="infos">
              <div className="input-name">
                <label>Nome:</label>
                <StyledInput
                  type="text"
                  placeholder={userName}
                  {...register("name")}
                />
              </div>
              <div className="date-sex">
                <div className="input-date">
                  <label className="date">Idade:</label>
                  <StyledInput
                    type="number"
                    placeholder={userAge}
                    {...register("age")}
                  />
                </div>
                <div className="input-sex">
                  <label>Sexo:</label>
                  <div className="sex">
                    <input
                      type="radio"
                      value="masculino"
                      {...register("male")}
                    />{" "}
                    Masculino
                    <input
                      type="radio"
                      value="feminino"
                      {...register("female")}
                    />{" "}
                    Feminino
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="input-container">
            <div className="input-email">
              <label>Email:</label>
              <div className="button-email">
                <StyledInput
                  type="email"
                  placeholder={email}
                  {...register("email")}
                />
              </div>
            </div>
            <div className="input-tel">
              <label>Telefone:</label>
              <div className="button-tel">
                <StyledInput
                  type="tel"
                  placeholder={userContact}
                  {...register("contact")}
                />
              </div>
            </div>
            <div className="input-password">
              <label>Senha:</label>
              <div className="button-password">
                <StyledInput
                  type="password"
                  placeholder="senho do usuario"
                  {...register("password")}
                />
                <button type="submit">
                  <FiEdit2 />
                  Editar dados
                </button>
              </div>
            </div>
          </div>
        </form>
      </StyledProfile>
    </>
  );
};
