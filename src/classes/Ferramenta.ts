export class Ferramenta {
    
    id: number;
    nome: string;
    codigo: number;
    setor: string;
    status: string

    constructor(
    
        id: number,
        nome: string,
        codigo: number,
        setor: string,
        status: string
    ){
        this.id = id;
        this.nome = nome;
        this.codigo = codigo;
        this.setor = setor;
        this.status = status;
    }

    validar(): string | null {
        if(!this.nome || this.nome.trim().length === 0 ){
            return "É obrigatório preencher o nome."
        }
        if(this.codigo <= 0 ){
            return "É obrigatório preencher o código."
        }
        if(!this.setor || this.setor.trim().length === 0 ){
            return "É obrigatório preencher o setor."
        }
        if(!this.status || this.status.trim().length === 0 ){
            return "É obrigatório preencher o status."
        }

        return null;
    }

}