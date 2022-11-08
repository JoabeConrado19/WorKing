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
import proifle from "../assets/Group123.png";

export const ProfilePage = () => {
  const schema = yup.object().shape({
    name: yup.string(),
    date: yup.date(),
    email: yup.string().email(),
    tel: yup.number().min(11, "Seu número precisa ter 11 digitos"),
    password: yup
      .string()
      .min(8, "a senha precisa pelo menos 8 caracteres")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "A senha precisa ter no mínimo 8 caracteres, " +
          "uma letra maiúscula e uma letra minúscula, " +
          "um número e um caracter especial"
      ),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <AsideComponent />

      <StyledProfile>
        <form>
          <div className="containerUsuario">
            <div className="containerImage">
              <h2>Alterar foto de perfil</h2>
              <img src={proifle} alt="imagem Usuario" />
              <ProfileButton>
                <FiEdit2 />
                Editar
              </ProfileButton>
            </div>
            <div className="infos">
              <div className="input-name">
                <label>Nome:</label>
                <StyledInput
                  type="text"
                  placeholder="Nome do cliente"
                  {...register("name")}
                />
              </div>
              <div className="date-sex">
                <div className="input-date">
                  <label className="date">Data de nascimento:</label>
                  <StyledInput type="date" {...register("date")} />
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
                  placeholder="emaildocliente@email.com"
                  {...register("email")}
                />
                <ProfileButton>
                  <FiEdit2 />
                  Editar
                </ProfileButton>
              </div>
            </div>
            <div className="input-tel">
              <label>Telefone:</label>
              <div className="button-tel">
                <StyledInput
                  type="tel"
                  placeholder="(xx) xxxx-xxxx"
                  {...register("tel")}
                />
                <ProfileButton>
                  <FiEdit2 />
                  Editar
                </ProfileButton>
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
                <ProfileButton>
                  <FiEdit2 />
                  Editar
                </ProfileButton>
              </div>
            </div>
          </div>
        </form>
      </StyledProfile>
    </>
  );
};
