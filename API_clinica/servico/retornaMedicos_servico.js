import pool from "./conexao";

//  Busca todos os médicos ordenados pelo nome
async function buscarTodosMedicos() {
    const conexao = await pool.getConnection();
    const query = "SELECT id, nome, telefone, email, especialidade FROM medicos ORDER BY nome ASC";
    const [resultado] = await conexao.execute(query);
    conexao.release();
    return resultado;
}

//  Busca médicos pelo nome (busca parcial)
async function buscarMedicoPorNome(nome) {
    const conexao = await pool.getConnection();
    const query = "SELECT id, nome, telefone, email, especialidade FROM medicos WHERE nome LIKE ? ORDER BY nome ASC";
    const [resultado] = await conexao.execute(query, [`%${nome}%`]);
    conexao.release();
    return resultado;
}

//  Busca médicos pela especialidade (exata)
async function buscarMedicoPorEspecialidade(especialidade) {
    const conexao = await pool.getConnection();
    const query = "SELECT id, nome, telefone, email, especialidade FROM medicos WHERE especialidade = ? ORDER BY nome ASC";
    const [resultado] = await conexao.execute(query, [especialidade]);
    conexao.release();
    return resultado;
}

// Cadastra um novo médico
async function cadastrarMedico(nome, telefone, email, especialidade) {
    const conexao = await pool.getConnection();
    const query = "INSERT INTO medicos (nome, telefone, email, especialidade) VALUES (?, ?, ?, ?)";
    const [resultado] = await conexao.execute(query, [nome, telefone, email, especialidade]);
    conexao.release();
    return resultado;
}

export { buscarTodosMedicos, buscarMedicoPorNome, buscarMedicoPorEspecialidade, cadastrarMedico };
