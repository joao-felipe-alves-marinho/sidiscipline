import { Api } from '../axios';

interface IPontoGetAllPontos {
    user: number;
    pontos:
    {
        data: string;
        horario_entrada: string;
        location_entrada: {
            latitude: number;
            longitude: number;
        },
        horario_saida: string;
        location_saida: {
            latitude: number;
            longitude: number;
        }
    }[];
    faltas: {
        data: string;
        situacao: string;
        justificado: string;
    }[];
    status_code: string;
}

interface IPontoGetPontoData {
    ponto:
    {
        data: string;
        horario_entrada: string;
        location_entrada: {
            latitude: number;
            longitude: number;
        },
        horario_saida: string;
        location_saida: {
            latitude: number;
            longitude: number;
        }
    };
    status_code: string;
}

interface IPontoSave {
    message: string;
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

const getPontoData = async (id: number, date: string): Promise<IPontoGetPontoData | Error> => {
    try {
        const url = `/pontos/${id}/?dt=${date}`;
        const { data } = await Api.get(url);
        if (data) {
            return data;
        }
        return new Error('Erro getPontoData');
    } catch (error) {
        console.log(error);
        return new Error((error as { message: string }).message || 'Erro getPontoData');
    }
};

const saveEntrada = async (id: number, date: string, entrada: string,
    location: { latitude: number, longitude: number } | undefined): Promise<IPontoSave | Error> => {
    try {
        const url = `/pontos/${id}`;
        const { data } = await Api.post(url, { date: date, entrada: entrada, location: location });
        if (data) {
            return data;
        }
        return new Error('Erro saveEntrada');
    } catch (error) {
        console.log(error);
        return new Error((error as { message: string }).message || 'Erro saveEntrada');
    }
};

const saveSaida = async (id: number, date: string, saida: string,
    location: { latitude: number, longitude: number } | undefined): Promise<IPontoSave | Error> => {
    try {
        const url = `/pontos/${id}`;
        const { data } = await Api.put(url, { date: date, saida: saida, location: location });
        if (data) {
            return data;
        }
        return new Error('Erro saveSaida');
    } catch (error) {
        console.log(error);
        return new Error((error as { message: string }).message || 'Erro saveSaida');
    }
};

const ajustrarPonto = async (id: number, date: string, horario: string, justificativa: string, ent: boolean | undefined,
    location: { latitude: number, longitude: number } | undefined): Promise<IPontoSave | Error> => {
    try {
        let url = '';
        ent ?
            url = `/pontos/${id}/?dt=${date}&ent=${ent}` :
            url = `/pontos/${id}/?dt=${date}`;
        const { data } = await Api.put(url, { horario: horario, justificativa: justificativa, location: location });
        if (data) {
            return data;
        }
        return new Error('Erro saveSaida');
    } catch (error) {
        console.log(error);
        return new Error((error as { message: string }).message || 'Erro saveSaida');
    }
};

export const PontoService = {
    getAllPontos, getPontoData, saveEntrada, saveSaida, ajustrarPonto
};