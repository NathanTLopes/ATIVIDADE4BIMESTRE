import pool from './conexao.js';

export async function buscarTodosMedicos() {
    const conexaoDB = await pool.getConnection();
    const [listaMedicos] = await conexaoDB.query(`SELECT m.id, m.nome, m.telefone, m.email, e.especialidade FROM medicos m JOIN especialidades e ON m.especialidade = e.id ORDER BY m.nome`);
    conexaoDB.release();
    return listaMedicos;
}

export async function buscarMedicosPorNome(nome) {
    const conexaoDB = await pool.getConnection();
    const [listaMedicos] = await conexaoDB.query(`SELECT m.id, m.nome, m.telefone, m.email, e.especialidade FROM medicos m JOIN especialidades e ON m.especialidade = e.id WHERE m.nome LIKE ? ORDER BY m.nome`, [`%${nome}%`]);
    conexaoDB.release();
    return listaMedicos;
}

export async function buscarMedicosPorEspecialidade(especialidade) {
    const conexaoDB = await pool.getConnection();
    const [listaMedicos] = await conexaoDB.query(`SELECT m.id, m.nome, m.telefone, m.email, e.especialidade FROM medicos m JOIN especialidades e ON m.especialidade = e.id WHERE e.especialidade = ? ORDER BY m.nome`, [especialidade]);
    conexaoDB.release();
    return listaMedicos;
}