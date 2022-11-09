import { useContext, useEffect } from "react";
import {
  AiOutlineClockCircle,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { FaWallet, FaWindowClose } from "react-icons/fa";
import { FiMapPin, FiUsers } from "react-icons/fi";
import { ImExit } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { DashboardContext } from "../../../contexts/dashboard";
import api from "../../../services/api";
import { Aside } from "./style";

export interface IAsideComponent {
  setMenu?: any;
  menu?: boolean;
}

export const AsideComponent = () => {
  const { getUserInfo, userImg, userName, menu, setMenu }: any =
    useContext(DashboardContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <Aside rigth={menu ? "auto" : "-300px"}>
        <div className="userName">
          <img src={userImg} alt="" />
          <h2>{userName}</h2>
          <button
            onClick={(event) => {
              event.preventDefault();
              setMenu(!menu);
            }}
          >
            <FaWindowClose />
          </button>
        </div>
        <div className="container__menu">
          <ul className="menu">
            <li>
              <button
                onClick={async () => {
                  let Token = window.localStorage.getItem("@WorkingUser_Token");
                  let Id = window.localStorage.getItem("@WorkingUser_Id");
                  api
                    .get(`/users/${Id}`, {
                      headers: {
                        Authorization: `Bearer ${Token}`,
                      },
                    })
                    .then((response) => {
                      if (response.data.user_type === "worker") {
                        navigate("/dashboard-worker");
                      } else {
                        navigate("/dashboard");
                      }
                    });
                }}
              >
                <AiOutlineHome className="iconMenu" />
                <p>Home</p>
              </button>
            </li>
            <li>
              {/* Alterar redirecionamento */}
              <Link to="/profile">
                <AiOutlineUser />
                <p>Perfil</p>
              </Link>
            </li>
            <li>
              {/* Alterar redirecionamento */}
              <Link to="/location">
                <FiMapPin />
                <p>Localização</p>
              </Link>
            </li>
            <li>
              {/* Alterar redirecionamento */}
              <Link to="/wallet">
                <FaWallet />
                <p>Carteira</p>
              </Link>
            </li>

            <li>
              {/* Alterar redirecionamento */}
              <Link to="/historic">
                <AiOutlineClockCircle />
                <p>Histórico</p>
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  window.localStorage.clear();
                  navigate("/");
                }}
              >
                <ImExit />
                <p>Logout</p>
              </button>
            </li>
            <li>
              <Link to="/about-us">
                <FiUsers />
                <p>Sobre nós</p>
              </Link>
            </li>
          </ul>
        </div>
      </Aside>
    </>
  );
};
