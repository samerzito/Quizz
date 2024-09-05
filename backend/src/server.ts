import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';
import projectRoutes from './routes/projects';

const app = express();

app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', projectRoutes);

app.listen(5000, () => {
  console.log('Servidor está rodando na porta 5000');

});
