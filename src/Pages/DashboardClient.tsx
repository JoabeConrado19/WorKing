import { AiFillDelete, AiOutlineClockCircle, AiOutlineHome, AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'
import { BsPinMapFill } from 'react-icons/bs'
import { FaWallet } from 'react-icons/fa'
import { FiEdit2, FiMapPin, FiUsers } from 'react-icons/fi'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { ImExit } from 'react-icons/im'
import { AsideComponent } from "../components/AboutUsPage/aside";

import { StyledAside, StyledBody, StyledClientDash, StyledForm } from '../styles/StyledClientDash'
export const DashboardClient = () => {

    return (
        <StyledBody>
            <StyledClientDash>
                <header>
                    <AiOutlineMenu />
                    <h1>Home</h1>
                </header>
                <main>
                    <div className='input-div'>
                        <input placeholder='Digite aqui sua pesquisa' />
                        <h2>Lista de oportunidades </h2>
                    </div>

                    <section>
                        <StyledForm>
                            <div>
                                <input type="text" placeholder='Titulo da solicitação' />
                                <select name="" id="">
                                    <option value="">Categoria</option>
                                    <option value="TI">Área de TI</option>
                                    <option value="mecanico">Área de mecânica</option>
                                </select>
                            </div>
                            <div className='description'>
                                <textarea name="" id="" placeholder='Digite aqui a descrição do serviço à solicitar'></textarea>
                                <button className='publish'>Publicar</button>
                            </div>
                        </StyledForm>
                    </section>
                    <ul>
                        <li className='conteiner'>
                            <div className='top-conteiner' >
                                <h3>Titulo do serviço</h3>
                                <span>Categoria</span>
                            </div>
                            <div className='conteudo'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure laboriosam, tenetur voluptas sed illum quidem eveniet dolore veniam eligendi non error libero, laborum quae ipsam atque quod rerum aliquam cum?</p>
                                <BsPinMapFill />

                                <div className='div-categoria'>

                                    <button><FiEdit2 />Editar</button>
                                    <button className='delete'> <AiFillDelete />Deletar</button>
                                </div>





                            </div>
                        </li>
                        <li className='conteiner'>
                            <div className='top-conteiner' >
                                <h3>Titulo do serviço</h3>
                                <span>Categoria</span>
                            </div>
                            <div className='conteudo'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure laboriosam, tenetur voluptas sed illum quidem eveniet dolore veniam eligendi non error libero, laborum quae ipsam atque quod rerum aliquam cum?</p>
                                <BsPinMapFill />

                                <div className='div-categoria'>

                                    <button><FiEdit2 />Editar</button>
                                    <button className='delete'> <AiFillDelete />Deletar</button>
                                </div>





                            </div>
                        </li>
                        <li className='conteiner'>
                            <div className='top-conteiner' >
                                <h3>Titulo do serviço</h3>
                                <span>Categoria</span>
                            </div>
                            <div className='conteudo'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure laboriosam, tenetur voluptas sed illum quidem eveniet dolore veniam eligendi non error libero, laborum quae ipsam atque quod rerum aliquam cum?</p>
                                <BsPinMapFill />

                                <div className='div-categoria'>
                                    <button><FiEdit2 /> Editar</button>
                                    <button className='delete'> <AiFillDelete />Deletar</button>
                                </div>

                            </div>
                        </li>
                        <li className='conteiner'>
                            <div className='top-conteiner' >

                                <h3>Titulo do serviço</h3>
                                <span>Categoria</span>
                            </div>
                            <div className='conteudo'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure laboriosam, tenetur voluptas sed illum quidem eveniet dolore veniam eligendi non error libero, laborum quae ipsam atque quod rerum aliquam cum?</p>
                                <BsPinMapFill />

                                <div className='div-categoria'>

                                    <button><FiEdit2 />Editar</button>
                                    <button className='delete'> <AiFillDelete />Deletar</button>
                                </div>





                            </div>
                        </li>

                    </ul>
                </main>
            </StyledClientDash>

           <AsideComponent/>
        </StyledBody>


    )
}