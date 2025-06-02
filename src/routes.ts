import { Router, Request, Response } from "express";
import { createUserController } from "./useCases/createUser";

const router = Router();

router.post('/user', async (request: Request, response: Response) => {
    return await createUserController.handle(request, response);
});


export { router };
