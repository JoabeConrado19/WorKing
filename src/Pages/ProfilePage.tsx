import { AsideComponent } from "../Components/AboutUsPage/aside";
import { FiEdit2 } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ProfileButton,
  StyledInput,
  StyledProfile,
} from "../styles/StyledProfilePage";
import api from "../services/api";
import { useContext, useState } from "react";
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
  const schema = yup.object().shape({
    name: yup.string().required(),
    date: yup.date().required(),
    email: yup.string().email().required(),
    tel: yup.number().min(11, "Seu número precisa ter 11 digitos").required(),
    password: yup
      .string()
      .min(8, "a senha precisa pelo menos 8 caracteres")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

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
          console.log(resp);
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
                    {...register("idade")}
                  />
                </div>
                <div className="input-sex">
                  <label>Sexo:</label>
                  <div className="sex">
                    <input
                      type="radio"
                      value="masculino"
                      {...register("sexo")}
                    />{" "}
                    Masculino
                    <input
                      type="radio"
                      value="feminino"
                      {...register("sexo")}
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
                  {...register("tel")}
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
