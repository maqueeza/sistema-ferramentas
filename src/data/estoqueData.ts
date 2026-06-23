import { conexao } from "@/lib/conexao"
import { Estoque } from "@/classes/Estoque"

export async function listarEstoques(){
    const [resultado] = await conexao.query(
        "SELECT * FROM estoques"
    );

    return resultado;
}

export async function buscarEstoquePorId(id: number){
    const [resultado]: any = await conexao.query(
        "SELECT * FROM estoques WHERE id = ?",
        [id]
    );

    return resultado[0];
}

export async function cadastrarEstoque(estoques: Estoque){
    const [resultado]: any = await conexao.query(
        "INSERT INTO estoques (ferramenta_id, quantidade, quantidade_minima, localizacao) VALUES (?,?,?,?)",
        [
            estoques.ferramenta_id,
            estoques.quantidade,
            estoques.quantidade_minima,
            estoques.localizacao

        ]
    );

return resultado.insertId;

}

export async function editarEstoque(id:number, estoques: Estoque){
    const [resultado]: any = await conexao.query(
        "UPDATE estoques SET quantidade = ?, quantidade_minima = ?, localizacao = ? WHERE id = ?",
        [
            estoques.quantidade,
            estoques.quantidade_minima,
            estoques.localizacao,
            id
        ]
    );

    return resultado.affectedRows > 0;

}

export async function excluirEstoque(id: number){
    const [resultado]: any = await conexao.query(
        "DELETE FROM estoques WHERE id = ?",
        [id]
    );

    return resultado.affectedRows > 0;
}