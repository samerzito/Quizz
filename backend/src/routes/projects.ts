import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();

// Essa rota está protegida, só pode ser acessada por usuários autenticados
router.get('/projects', authMiddleware, (req, res) => {
  const projects = [
    { id: 1, name: 'Projeto 1' },
    { id: 2, name: 'Projeto 2' },
  ];
  res.json(projects);
});

export default router;
