export interface IRequestRegisterUser {
    user: string;
    password: string;
    email: string;
    genre: 'M' | 'F'
}

export interface IRequestLoginUser {
    password: string;
    email: string;
}

export interface IAccount {
    userid: string;
    sex: 'F' | 'M';
    email: string;
    char: IChar[]
    state: string;
}

export interface IChar {
    userid: string;
    sex: string;
    state: number;
    name: string;
    class: number;
    base_level: number;
    job_level: number;
    last_map: string;
    last_x: number;
    last_y: number;
    str: number;
    agi: number;
    vit: number;
    int: number;
    dex: number;
    luk: number;
}

export interface IRequestRegisterAccount {
    userid: string;
    user_pass: string;
    sex: string;
    last_ip: string;
}