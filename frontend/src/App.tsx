import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import LessonPlanScreen from './pages/LessonPlanScreen/LessonPlanScreen';
import ProtectedRoute from './components/ProtectedRoute/ProtoctedRoute';
import { AppProvider } from './context/AppContext';
import BibliotecaPage from './pages/BibliotecaScreen/BibliotecaPage';

// Aulas de Matemática 1
import Aula1OperacoesBasicas from './pages/BibliotecaScreen/Matematica1/Aula1';
import Aula2ExpressoesAlgebricas from './pages/BibliotecaScreen/Matematica1/Aula2';
import Aula3Fatoracao from './pages/BibliotecaScreen/Matematica1/Aula3';
import Aula4EquacoesLineares from './pages/BibliotecaScreen/Matematica1/Aula4';
import Aula5Inequacoes from './pages/BibliotecaScreen/Matematica1/Aula5';
import Aula6Polinomios from './pages/BibliotecaScreen/Matematica1/Aula6';
import Aula7Radicais from './pages/BibliotecaScreen/Matematica1/Aula7';
import Aula8SistemasLineares from './pages/BibliotecaScreen/Matematica1/Aula8';
import Aula9FuncoesAfins from './pages/BibliotecaScreen/Matematica1/Aula9';
import Aula10ProgressaoAritmetica from './pages/BibliotecaScreen/Matematica1/Aula10';
import DashboardPage from './pages/DashboardTeacher/DashboardPage';
import ProgressPage from './pages/Progress/ProgressPage';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route 
            path='/dashboard-teacher' 
            element={
              <ProtectedRoute role='teacher'>
                <DashboardPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path='/biblioteca' 
            element={
              <ProtectedRoute role='teacher'>
                <BibliotecaPage />
              </ProtectedRoute>
            } 
          />
          {/* Aulas de Matemática 1 */}
          <Route 
            path='/biblioteca/aula/operacoesbasicas' 
            element={<Aula1OperacoesBasicas />} 
          />
          <Route 
            path='/biblioteca/aula/expressoesalgebricas' 
            element={<Aula2ExpressoesAlgebricas />} 
          />
          <Route 
            path='/biblioteca/aula/fatoracao' 
            element={<Aula3Fatoracao />} 
          />
          <Route 
            path='/biblioteca/aula/equacoeslineares' 
            element={<Aula4EquacoesLineares />} 
          />
          <Route 
            path='/biblioteca/aula/inequacoes' 
            element={<Aula5Inequacoes />} 
          />
          <Route 
            path='/biblioteca/aula/polinomios' 
            element={<Aula6Polinomios />} 
          />
          <Route 
            path='/biblioteca/aula/radicais' 
            element={<Aula7Radicais />} 
          />
          <Route 
            path='/biblioteca/aula/sistemaslineares' 
            element={<Aula8SistemasLineares />} 
          />
          <Route 
            path='/biblioteca/aula/funcaoafins' 
            element={<Aula9FuncoesAfins />} 
          />
          <Route 
            path='/biblioteca/aula/progressoesaritmeticas' 
            element={<Aula10ProgressaoAritmetica />} 
          />
          <Route 
            path='/plano-aula' 
            element={
              <ProtectedRoute role='teacher'>
                <LessonPlanScreen />
              </ProtectedRoute>
            } 
          />
          <Route 
          path='/progresso'
          element={<ProgressPage />}
          >
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
