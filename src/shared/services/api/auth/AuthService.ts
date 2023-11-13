import { Api } from '../axios';

interface IAuthLogin {
    message: string,
    status_code: string,
    user: {
        id: number,
        email: string,
        name: string,
        password: string,
    };
}

interface IAuthSingUp {
    message: string,
    status_code: string,
}

interface IAuthGetEmails {
    emails: string[],
    status_code: string
}

const login = async (email: string, password: string): Promise<IAuthLogin | Error> => {
    try {
        const { data } = await Api.post('/login', { email: email, password: password });
        if (data) {
            return data;
        }
        return new Error('Erro no login.');
    } catch (error) {
        console.log(error);
        return new Error((error as { message: string }).message || 'Erro no Login');
    }
};

const singUp = async (username: string, email: string, password: string): Promise<IAuthSingUp | Error> => {
    try {
        const { data } = await Api.post('/cadastro', { name: username, email: email, password: password });
        if (data) {
            return data;
        }
        return new Error('Erro no Cadastro');
    } catch (error) {
        console.log(error);
        return new Error((error as { message: string }).message || 'Erro no Cadastro');
    }
};

const getEmails = async (): Promise<IAuthGetEmails | Error> => {
    try {
        const { data } = await Api.get('/emails');
        if (data) {
            return data;
        }
        return new Error('Erro result get emails');
    } catch (error) {
        console.log(error);
        return new Error((error as { message: string }).message || 'Erro get Emails');
    }
};

export const AuthService = {
    login,
    singUp,
    getEmails
};