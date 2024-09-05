import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Implementação de login aqui
  // Por exemplo, validar o usuário e gerar um token

  if (email === 'user@example.com' && password === 'password') {
    const token = jwt.sign({ email }, 'secret_key', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }

  res.json({ message: 'Login realizado com sucesso' });

  
});



export default router;


/*const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
  
    if (!token) {
      return res.status(401).json({ message: 'Token não fornecido' });
    }
  
    try {
      const decoded = jwt.verify(token, 'secret_key');
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Token inválido' });
    }
  };
  
  router.get('/projects', authMiddleware, (req, res) => {
    // Buscar e retornar projetos
  });
  */