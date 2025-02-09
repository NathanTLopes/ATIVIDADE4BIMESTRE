'use client'
import React, { useState, useEffect } from "react";
const urlPadrao = "https://api-clinica-2a.onrender.com";
import styles from "./medicos.module.css";

export default function Medicos() {
    const [medicos, setMedicos] = useState([]);
    const [medicosPorNome, setMedicosPorNome] = useState([]);
    const [showListaDePesquisa, setShowListaDePesquisa] = useState(false);

    async function apresetarTodosMedicos() {
        try {
            const response = await fetch(`${urlPadrao}/medicos`);
            if (!response.ok) {
                throw new Error("Erro ao buscar dados:" + response.statusText);
            }
            const data = await response.json();
            setMedicos(data);
        } catch (error) {
            console.log("Ocorreu algum erro:" + error);
        }
    }

    async function pesquisarMedicoPorNome(nome) {
        try {
            const response = await fetch(`${urlPadrao}/medicos?nome=${nome}`);
            if (!response.ok) {
                throw new Error("Erro ao buscar dados:" + response.statusText);
            }
            const data = await response.json();
            setMedicosPorNome(data);
        } catch (error) {
            console.log("Ocorreu algum erro:" + error);
        }
    }

    useEffect(() => {
        apresetarTodosMedicos();
        pesquisarMedicoPorNome("");
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Lista de Médicos</h2>
            <div className={styles.containerPesquisa}>
                <button className={styles.botaoPesquisar} onClick={() => { setShowListaDePesquisa(!showListaDePesquisa); }}>Buscar médico</button>
                {showListaDePesquisa && (
                    <>
                        <div className={styles.fundoPopUp} onClick={() => setShowListaDePesquisa(false)}></div>
                        <div className={styles.containerListaPesquisa}>
                            <div className={styles.containerInput}>
                                <input type="text" onChange={(e) => pesquisarMedicoPorNome(e.target.value)} placeholder="Pesquisar médico" className={styles.input} onInput={(e) => e.target.value = e.target.value.replace(/['"]/g, '')} />
                            </div>
                            <ul className={styles.listaPesquisa}>
                                {medicosPorNome.map((medico) => (
                                    <li className={styles.linhaListaPesquisa} key={medico.id}>{medico.nome}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
            </div>
            <div className={styles.tabelaContainer}>
                <table className={styles.tabela}>
                    <thead className={styles.cabecalho}>
                        <tr className={styles.linhaCabecalho}>
                            <th>ID</th>
                            <th>NOME</th>
                            <th>TELEFONE</th>
                            <th>EMAIL</th>
                            <th>ESPECIALIZADOS</th>
                        </tr>
                    </thead>
                    <tbody className={styles.corpoTabela}>
                        {medicos.map((medico) => (
                            <tr className={styles.linhaCorpo} key={medico.id}>
                                <td>{medico.id}</td>
                                <td>{medico.nome}</td>
                                <td>{medico.telefone}</td>
                                <td>{medico.email}</td>
                                <td>{medico.especialidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
