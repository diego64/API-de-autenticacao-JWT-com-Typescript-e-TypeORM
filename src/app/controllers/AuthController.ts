import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/User';

class AuthController {
    async authenticate(req: Request, res: Response) {
        const repository = getRepository(User);
        const { email, password } = req.body;

        const user = await repository.findOne({ where: { email }});

        if(!user) {
            return res.sendStatus(401);
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if(!isValidPassword) {
            console.log(user.password)
            return res.sendStatus(401);
        }

        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d'});

        delete user.password;

        return res.json({
            user,
            token,
        });
    }
}

export default new AuthController();

/*Fluxo do sistema:
    - Verificação de e-mail (Se é cadastrado)
    - Comparação da senha digitada com a senha cadastrada para aquele usuário
    - Se aprovado nas duas estapas, o suuário pode seguir no sistema
*/ 