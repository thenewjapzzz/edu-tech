import { FaTachometerAlt, FaBook, FaChalkboardTeacher, FaChartLine, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import './Sidebar.css'; 
import { useLocation, useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        // Remove o token de armazenamento
        localStorage.removeItem('token');
        localStorage.removeItem('userRole')
        navigate('/');
    };

    // Determina a classe do item ativo
    const getMenuItemClass = (path) => {
        return location.pathname === path || (location.pathname === '/teacher' && path === '/dashboard') ? 'menu-item active' : 'menu-item';
    };

    // Recupera o papel do usuário no localStorage
    const userRole = localStorage.getItem('userRole')

    return (
        <div className='sidebar'>
            <div className='logo'>edutech</div>

            <div className='profile'>
                <FaUserCircle className='profile-icon' /> 
                <span className='profile-text'>{userRole === 'teacher' ? 'Professor' : 'Aluno'}</span>
            </div>

            <ul className='menu'>
                <li className={getMenuItemClass('/dashboard-teacher')} onClick={() => navigate('/dashboard-teacher')}>
                    <FaTachometerAlt />
                    <span className='dashboard'>Dashboard</span>
                </li>
                <li className={getMenuItemClass('/plano-aula')} onClick={() => navigate('/plano-aula')}>
                    <FaChalkboardTeacher />
                    <span className='plano'>Plano de aula</span>
                </li>
                <li className={getMenuItemClass('/biblioteca')} onClick={() => navigate('/biblioteca')}>
                    <FaBook />
                    <span className='biblioteca'>Biblioteca</span>
                </li>
                <li className={getMenuItemClass('/progresso')} onClick={() => navigate('/progresso')}>
                    <FaChartLine />
                    <span className='progresso'>Progresso</span>
                </li>
            </ul>
            <div className='logout'>
                <ul>
                    <li className='menu-item' onClick={handleLogout}>
                        <FaSignOutAlt />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
