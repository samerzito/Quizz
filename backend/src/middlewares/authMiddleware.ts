import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, 'secret_key');
    req.user = decoded; // Armazena as informações do usuário no request
    next(); // Passa para o próximo middleware ou rota
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

export default authMiddleware;
