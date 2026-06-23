export class Estoque {

    id: number;
    ferramenta_id: number;
    quantidade: number;
    quantidade_minima: number;
    localizacao: string;

    constructor(
        id: number,
    ferramenta_id: number,
    quantidade: number,
    quantidade_minima: number,
    localizacao: string
    ){
        this.id = id;
        this.ferramenta_id = ferramenta_id;
        this.quantidade = quantidade;
        this.quantidade_minima = quantidade_minima;
        this.localizacao = localizacao;

    }

    validar(): string | null{
        if(this.ferramenta_id < 0){
            return "O ID da ferramenta é obrigatório!"
        }

        if(this.quantidade < 0){
            return "Quantidade inválida!"

        }

        if(this.quantidade_minima < 0){
            return "Quantidade inválida!"
        }

        if(!this.localizacao || this.localizacao.trim().length === 0){
            return "A localização é obrigatória!"
        }

        return null;

    }

}