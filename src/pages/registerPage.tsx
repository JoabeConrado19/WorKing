import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import RegisterBtnIco from "../assets/RegisterBtnIco.svg";
import RegisterLogo from "../assets/RegisterLogo.svg";
import api from "../services/api";
import { RegisterStyles } from "../styles/register";



export const Register = () => {

  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    contact: yup
      .number()
      .required("Número de contato obrigatório")
      .min(11, "Seu número precisa ter 11 digitos"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "a senha precisa pelo menos 8 caracteres")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "A senha precisa ter no mínimo 8 caracteres, " +
        "uma letra maiúscula e uma letra minúscula, " +
        "um número e um caracter especial"
      ),
    password2: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password"), null], "As senhas precisam ser iguais."),
    age: yup
      .number()
      .required("Idade Obrigatória")
      .min(1, "Campo inválido")
      .max(120, "Campo inválido"),
    profile_pic: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (data: any) => {
    delete data.password2;
    data['user_type'] = 'client';

    await api
      .post("/users", data)
      .then((response: any) => {
        console.log(response);
        if (response.status === 201) {
          toast.success("Sucesso, Redirecionando!", { autoClose: 3000 });
          navigate("/login");
        }
      })
      .catch((error) =>  toast.error("Email já existente", { autoClose: 3000 }));
  };
  console.log(errors);

  return (
    <RegisterStyles>
      <main>
        <figure>
          <img src={RegisterLogo} alt="Logo" />
        </figure>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <>
            <input type="text" placeholder="Nome" {...register("name")} />
            {errors.name && errors.name.message}
            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email && errors.email.message}
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            {errors.password && errors.password.message}
            <input
              type="password"
              placeholder="Confirmar Senha"
              {...register("password2")}
            />
            {errors.password2 && errors.password2.message}
            <input type="text" placeholder="Idade" {...register("age")} />
            {errors.age && errors.age.message}
            <input
              type="text"
              placeholder="Link da Foto"
              {...register("profile_pic")}
            />
            {errors.profile_pic && errors.profile_pic.message}
            <input type="text" placeholder="Contato" {...register("contact")} />
            {errors.contact && errors.contact.message}
            <p>Registrar</p>
            <button type="submit">
              <img src={RegisterBtnIco} alt="" />
            </button>
          </>
        </form>
      </main>
    </RegisterStyles>
  );
};
