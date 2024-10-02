import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import TeacherScreen from './pages/TeacherScreen/TeacherScreen';
import StudentScreen from './pages/StudentScreen/StudentScreen';
import ProtectedRoute from './components/ProtectedRoute/ProtoctedRoute'; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route 
                    path='/teacher' 
                    element={
                        <ProtectedRoute role='teacher'>
                            <TeacherScreen />
                        </ProtectedRoute>
                    } 
                />
                <Route 
                    path='/student' 
                    element={
                        <ProtectedRoute role='student'>
                            <StudentScreen />
                        </ProtectedRoute>
                    } 
                />
            </Routes>
        </Router>
    );
}

export default App;
