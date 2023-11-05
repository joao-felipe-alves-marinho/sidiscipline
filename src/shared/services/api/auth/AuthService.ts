import { Api } from '../axios';

interface IAuthLogin {
    
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

export const AuthService = {
    login,
};