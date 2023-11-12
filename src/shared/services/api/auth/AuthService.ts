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

const singup = async (username: string, email: string, password: string) => {
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

export const AuthService = {
    login,
    singup,
};