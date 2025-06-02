import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
// import everthing

//create a class that will use the repository
export class CreateUserUseCase {
    constructor (
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider,
    ) {
    }
    
    async execute(data: ICreateUserRequestDTO ) { // when execute
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email); // will check if the email already exists

        if (userAlreadyExists) { // if true, throw a error
            throw new Error("User ja existe");
        }

        const user = new User(data); //else, create a class

        await this.usersRepository.save(user); //and save in the DB

        this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: "Equipe do APP",
                email: "equipe@meuappzao.com"
            },
            subject: "Bem vindo ao APPZAO!",
            body : "<p>Voce ja pode fazer login em nosso APP</p>"
        })
    }
}