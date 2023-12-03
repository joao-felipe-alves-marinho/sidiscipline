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
        anexo: string[];
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

interface IUploadAvatar {
    message: string;
    avatar: string;
    status_code: string;
}

interface IUpdateUser {
    message: string,
    status_code: string,
    user: {
        id: number,
        email: string,
        name: string,
        password: string,
    };
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

const postSaveEntrada = async (id: number, date: string, entrada: string,
    location: { latitude: number, longitude: number } | undefined): Promise<IPontoSave | Error> => {
    try {
        const url = `/pontos/${id}`;
        const { data } = await Api.post(url, { date: date, entrada: entrada, location: location });
        if (data) {
            return data;
        }
        return new Error('Erro postSaveEntrada');
    } catch (error) {
        console.log(error);
        return new Error((error as { message: string }).message || 'Erro postSaveEntrada');
    }
};

const putSaveSaida = async (id: number, date: string, saida: string,
    location: { latitude: number, longitude: number } | undefined): Promise<IPontoSave | Error> => {
    try {
        const url = `/pontos/${id}`;
        const { data } = await Api.put(url, { date: date, saida: saida, location: location });
        if (data) {
            return data;
        }
        return new Error('Erro putSaveSaida');
    } catch (error) {
        console.log(error);
        return new Error((error as { message: string }).message || 'Erro putSaveSaida');
    }
};

const putAjustrarPonto = async (id: number, date: string, horario: string, justificativa: string, ent: boolean | undefined,
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
        return new Error('Erro putSaveSaida');
    } catch (error) {
        console.log(error);
        return new Error((error as { message: string }).message || 'Erro putSaveSaida');
    }
};

const postUploadAnexoFalta = async (id: number, date: string, file: FormData): Promise<IPontoSave | Error> => {
    try {
        const url = `/pontos/${id}/?dt=${date}`;
        const { data } = await Api.post(url, file);
        if (data) {
            return data;
        }
        return new Error('Erro postUploadAnexoFalta');
    } catch (error) {
        console.log(error);
        return new Error((error as { message: string }).message || 'Erro postUploadAnexoFalta');
    }
};

const postUploadAvatar = async (id: number, file: FormData): Promise<IUploadAvatar | Error> => {
    try {
        const url = `/${id}`;
        const { data } = await Api.post(url, file);
        if (data) {
            return data;
        }
        return new Error('Erro postpostUploadAvatar');
    } catch (error) {
        console.log(error);
        return new Error((error as { message: string }).message || 'Erro postpostUploadAvatar');
    }
};

const putUpdateUser = async (id: number, username: string, email: string, password: string): Promise<IUpdateUser | Error> => {
    try {
        const url = `/${id}`;
        const { data } = await Api.put(url, { username: username, email: email, password: password });
        if (data) {
            return data;
        }
        return new Error('Erro putUpdateUser');
    } catch (error) {
        console.log(error);
        return new Error((error as { message: string }).message || 'Erro putUpdateUser');
    }
};

export const PontoService = {
    getAllPontos,
    getPontoData,
    postSaveEntrada,
    putSaveSaida,
    putAjustrarPonto,
    postUploadAnexoFalta,
    postUploadAvatar,
    putUpdateUser
};