import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from "../assets/images/google-icon.svg"

import { Button } from '../components/Button';

import '../styles/auth.scss'
export function NewRoom() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="illustracao simbolizando perguntas e respostas" />
                <strong>Crie Salas de Q&amp;A ao-vivo</strong>
                <p>Tire as Duvidas da sua audiencia em tempo real!</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImg} alt="logo principal" />
                    <h2>Criar uma nova sala</h2>
                    <form >
                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">Criar sala</Button>

                    </form>
                    <p>Quer entrar em uma sala existente?<a href="#">Clique Aqui!</a> </p>
                </div>
            </main>

        </div>
    )
}