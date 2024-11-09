import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Sidebar from '../../components/Sidebar/Sidebar';
import './DashboardPage.css';

const DashboardPage = () => {
  const data = [
    { name: 'Jan', alunosMatriculados: 50, alunosConcluidos: 30 },
    { name: 'Fev', alunosMatriculados: 60, alunosConcluidos: 40 },
    { name: 'Mar', alunosMatriculados: 70, alunosConcluidos: 50 },
    { name: 'Abr', alunosMatriculados: 80, alunosConcluidos: 60 },
    { name: 'Mai', alunosMatriculados: 100, alunosConcluidos: 70 },
    { name: 'Jun', alunosMatriculados: 110, alunosConcluidos: 80 },
    { name: 'Jul', alunosMatriculados: 120, alunosConcluidos: 90 },
  ];

  return (
    <div className="teacher-screen">
      <Sidebar />
      <div className="content">

        <div className="dashboard-cards">
          <div className="card">
            <h3>Total de Alunos</h3>
            <p>150</p>
          </div>
          <div className="card">
            <h3>Alunos Matriculados</h3>
            <p>120</p>
          </div>
          <div className="card">
            <h3>Alunos Concluídos</h3>
            <p>90</p>
          </div>
          <div className="card">
            <h3>Progresso de Cursos</h3>
            <p>85%</p>
          </div>
        </div>

        <div className="chart-container">
          <h3>Comparativo de Alunos</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="alunosMatriculados" stroke="#82ca9d" />
              <Line type="monotone" dataKey="alunosConcluidos" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
