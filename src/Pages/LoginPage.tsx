import { StyledLoginPage } from "../styles/StyledLoginPage";
import logo from "../assets/logo.png";

import { CgProfile } from "react-icons/cg";
import { MdWorkOutline } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";

import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

import { useNavigate } from "react-router-dom";
import api from "../services/api";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

export const LoginPage = () => {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().required("email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (data: any) => {
    console.log(data);
    await api
      .post("/login", data)
      .then((response: any) => {
        if (response.status == 200) {
          toast.success("Logado com sucesso!", { autoClose: 3000 });
          console.log(response);
          window.localStorage.setItem(
            "@WorkingUser_Token",
            `${response.data.accessToken}`
          );
          window.localStorage.setItem(
            "@WorkingUser_Id",
            `${response.data.user.id}`
          );

          if (response.data.user.user_type !== "worker") {
            navigate("/dashboard");
          } else {
            navigate("/dashboard-worker");
          }
        }
      })
      .catch(function (error) {
        console.log(error);
        if (error.response.status == 400) {
          toast.error("Email ou senha Incorreto", { autoClose: 3000 });
        }
      });
  };

  return (
    <StyledLoginPage>
      <figure>
        <img src={logo} alt="" />
      </figure>
      <div className="divContainer">
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <>
            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email && errors.email.message}
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            {errors.password && errors.password.message}
          </>
          <div className="divLabelBt">
            <label htmlFor="btEntrar">Entrar</label>
            <button>
              <BiLogIn className="iconEntrar" />
            </button>
            <GoogleLogin
              onSuccess={(credentialResponse: any) => {
                const decode: any = jwt_decode(
                  `${credentialResponse.credential}`
                );
                console.log(decode.email);
                navigate("/dashboard");
              }}
              onError={() => {
                console.log("login failed");
              }}
            />
          </div>
        </form>
        <span className="spanJaRegistrado">
          Ainda não possui registro? Clique abaixo
        </span>

        <div className="divBtsNavigate">
          <div className="divRegistros">
            <span className="spanRegistroProf">Profissional</span>
            <button onClick={() => navigate("/worker-register")}>
              <MdWorkOutline className="maletaIcon" />
            </button>
          </div>
          <div className="divRegistros">
            <span className="spanRegistroCliente">Cliente</span>
            <button onClick={() => navigate("/client-register")}>
              <CgProfile className="clienteIcon" />
            </button>
          </div>
        </div>
      </div>
    </StyledLoginPage>
  );
};
