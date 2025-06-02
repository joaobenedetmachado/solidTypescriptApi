 interface IAdress {
    email: string;
    name: string;
 }

export interface IMassage {
    to: IAdress;
    from: IAdress;
    subject: string;
    body: string;
}

export interface IMailProvider {
    sendMail(message: IMassage): Promise<void>;
}

//right there i made interfaces that will be used in the CreateUserUseCase, because when the user is created, a email will be send for him by some plataform
