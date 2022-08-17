import React from "react";
import ReactDOM from "react-dom/client";

import IMAGEM_MEDICO from "./images/doctor1.jpg";

import "./index.css";

const App = () => {
    const styleContainer = () => {
        return {
            display: 'flex',
            flexDirection: "column",
            backgroundColor: '#eee',
            width: 1280,
            margin: 'auto',
            border: "1px solid #000",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
            paddingLeft: 12,
            paddingRight: 12,
        }
    }

    const medicos = [
        {
            nome: "José da Silva",
            imagem: IMAGEM_MEDICO,
        },
        {
            nome: "Maria da Silva",
            imagem: process.env.PUBLIC_URL + "/doctor2.jpg",
        },
        {
            nome: "Jaqueline Mendes",
            imagem: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9jdG9yc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
    ]

    return (
        <div
            style={styleContainer()}
        >
            <h3>Profissionais de saúde</h3>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    border: "1px solid #ccc",
                    borderRadius: 8,
                    marginBottom: 8,
                    alignItems: "center",
                    justifyContent: "space-around",
                    padding: 12,
                }}
            >
                {medicos.map(medico => {
                    return (
                        <div className="card">
                            <div className="card-img">
                                <img src={medico.imagem} alt="" />
                            </div>
                            <p className="card-title">{medico.nome}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);