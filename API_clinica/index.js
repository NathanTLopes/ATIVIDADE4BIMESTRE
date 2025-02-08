import express from 'express';
import { buscarTodosMedicos, buscarMedicosPorNome, buscarMedicosPorEspecialidade } from './servico/retornaMedicos_servico.js';

const app = express();

app.get('/medicos', async (req, res) => {
    let resultadoMedicos;

    const nomeBusca = req.query.nome;
    const especialidadeBusca = req.query.especialidade;

    if (typeof nomeBusca === 'undefined' && typeof especialidadeBusca === 'undefined') {
        resultadoMedicos = await buscarTodosMedicos();
    } else if (typeof nomeBusca !== 'undefined') {
        resultadoMedicos = await buscarMedicosPorNome(nomeBusca);
    } else if (typeof especialidadeBusca !== 'undefined') {
        resultadoMedicos = await buscarMedicosPorEspecialidade(especialidadeBusca);
    }

    if (resultadoMedicos.length > 0) {
        res.json(resultadoMedicos);
    } else {
        res.status(404).json({ mensagem: "Nenhum médico encontrado" });
    }
});

app.listen(9000, () => {
    const dataAtual = new Date();
    console.log("Servidor iniciado em " + dataAtual);
});
