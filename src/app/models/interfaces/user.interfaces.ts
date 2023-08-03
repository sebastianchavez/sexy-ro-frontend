export interface IRequestRegister {
    user: string;
    password: string;
    email: string;
    genre: 'M' | 'F'
}

export interface IRequestLogin {
    password: string;
    email: string;
}