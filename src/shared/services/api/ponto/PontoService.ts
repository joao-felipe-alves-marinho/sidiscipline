import { Api } from '../axios';

interface IPontoGetAllPontos {
    user: number;
    pontos: [
        {
            data: string;
            horario_entrada: string;
            location_entrada: {
                latidude: number;
                longidude: number;
            },
            horario_saida: string;
            location_saida: {
                latidude: number;
                longidude: number;
            }
        }
    ];
    faltas: {
        data: string;
        situacao: string;
        justificado: string;
    }[];
    status_code: string;
}

const getAllPontos = async (id: number): Promise<IPontoGetAllPontos | Error> => {
    try {
        const url = `/pontos/${id}`;
        const { data } = await Api.get(url);
        if (data) {
            return data;
        }
        return new Error('Erro getAllPontos');
    } catch (error) {
        console.log(error);
        return new Error((error as { message: string }).message || 'Erro getAllPontos');
    }
};

export const PontoService = {
    getAllPontos,
};