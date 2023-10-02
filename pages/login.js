import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import 'src/styles/about.css';

export default function login(){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const { push } = useRouter();

    function login(e){
        e.preventDefault();
        if (email === "paris.perez.s@gmail.com" && senha === "aaa"){
            push("/");
        } else {
            toast.error("Credenciais Inválidas");
        }
    }

    return (
        <div className="flex h-screen">
            <main className="container m-auto max-w-md p-6 bg-gray-100 border rounded-lg shadow-lg">
                <div className="flex justify-center mb-6">
                    <h1 className="text-2xl font-bold">Login</h1>
                </div>
                <form onSubmit={login} className="flex flex-col space-y-4">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            className="w-full bg-gray-200 p-2 rounded border border-gray-300"
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="senha">Senha</label>
                        <input 
                            className="w-full bg-gray-200 p-2 rounded border border-gray-300"
                            type="password" 
                            id="senha" 
                            value={senha} 
                            onChange={e => setSenha(e.target.value)}
                        />
                    </div>
                    <button 
                        className="bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Entrar
                    </button>
                </form>
            </main>
        </div>
    )
}