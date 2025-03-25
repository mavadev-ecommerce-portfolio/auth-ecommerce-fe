'use client'

import {auth, provider, signInWithPopup, signOut} from "../../../utils/firebase";
import {useState} from "react";


export default function LoginPage() {
    const [user, setUser] = useState<any>(null);

    async function login() {
        try {
            const result = await signInWithPopup(auth, provider);
            const token = await result.user.getIdToken();
            debugger;
            setUser(result.user);

            // Enviar el token al backend
            const res = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token }),
            });

            const data = await res.json();
            console.log("JWT del backend:", data.jwt);
        } catch (error) {
            console.error("Error en login:", error);
        }
    }

    async function logout() {
        await signOut(auth);
        setUser(null);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {user ? (
                <div className="text-center">
                    <h2 className="text-xl font-bold">Bienvenido, {user.displayName}</h2>
                    <button onClick={logout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                        Cerrar Sesión
                    </button>
                </div>
            ) : (
                <button onClick={login} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Iniciar sesión con Google
                </button>
            )}
        </div>
    );
}