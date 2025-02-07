import pool from "./conexao.js";

export async function buscarTodosMedicos() {
    const conexao = await pool.getConnection();
    const query = "SELECT id, nome, telefone, email, especialidade FROM medicos ORDER BY nome ASC";
    const resultado = await executaQuery(conexao, query);
    conexao.release();
    return resultado;
}

export async function buscarMedicoPorNome(nome) {
    const conexao = await pool.getConnection();
    const query = `SELECT id, nome, telefone, email, especialidade FROM medicos WHERE nome LIKE ? ORDER BY nome ASC`;
    const resultado = await executaQuery(conexao, query, [`%${nome}%`]);
    conexao.release();
    return resultado;
}

export async function buscarMedicoPorEspecialidade(especialidade) {
    const conexao = await pool.getConnection();
    const query = `SELECT id, nome, telefone, email, especialidade FROM medicos WHERE especialidade = ? ORDER BY nome ASC`;
    const resultado = await executaQuery(conexao, query, [especialidade]);
    conexao.release();
    return resultado;
}

export async function cadastrarMedico(nome, telefone, email, especialidade) {
    const conexao = await pool.getConnection();
    const query = `INSERT INTO medicos (nome, telefone, email, especialidade) VALUES (?, ?, ?, ?)`;
    const resultado = await executaQuery(conexao, query, [nome, telefone, email, especialidade]);
    conexao.release();
    return resultado;
}

async function executaQuery(conexao, query, params = []) {
    const [resultado_query] = await conexao.execute(query, params);
    return resultado_query;
}
