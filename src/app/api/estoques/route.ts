import { NextResponse } from "next/server";
import { Estoque } from "@/classes/Estoque";
import { listarEstoques, cadastrarEstoque } from "@/data/estoqueData";

export async function GET(){
    const estoques = await listarEstoques();

    return NextResponse.json(estoques, {status: 200});
}

export async function POST(request: Request){
    const body = await request.json();

    console.log(body);

    const estoque = new Estoque(
        0,
        Number(body.ferramenta_id),
        Number(body.quantidade),
        Number(body.quantidade_minima),
        body.localizacao
    );

    console.log(estoque);

    const erro = estoque.validar();

    if(erro){
        return NextResponse.json(
            {erro: erro},
            {status: 400}
        );
    }

    const idNovoEstoque = await cadastrarEstoque(estoque);

    return NextResponse.json(
        {mensagem: "Estoque cadastrado com sucesso!",
        id: idNovoEstoque
        },
        {status: 201}
    )


}

