import express from "express";
import { buscarTodosMedicos, buscarMedicoPorNome, buscarMedicoPorEspecialidade, cadastrarMedico } from "./retornaMedicos_servico.js";

const app = express();
app.use(express.json());

app.post("/medicos", async (req, res) => {
    const { nome, telefone, email, especialidade } = req.body;

    if (!nome || !telefone || !email || !especialidade) {
        return res.status(400).json({ erro: "Todos os campos são obrigatórios" });
    }

    try {
        await cadastrarMedico(nome, telefone, email, especialidade);
        res.status(201).json({ mensagem: "Médico cadastrado com sucesso!" });
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao cadastrar médico", detalhes: erro.message });
    }
});

app.get("/medicos", async (req, res) => {
    let medicos;
    const { nome, especialidade } = req.query;

    try {
        if (!nome && !especialidade) {
            medicos = await buscarTodosMedicos();
        } else if (nome) {
            medicos = await buscarMedicoPorNome(nome);
        } else if (especialidade) {
            medicos = await buscarMedicoPorEspecialidade(especialidade);
        }

        if (medicos.length > 0) {
            res.json(medicos);
        } else {
            res.status(404).json({ mensagem: "Nenhum médico encontrado" });
        }
    } catch (erro) {
        res.status(500).json({ erro: "Erro ao buscar médicos", detalhes: erro.message });
    }
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...");
});
