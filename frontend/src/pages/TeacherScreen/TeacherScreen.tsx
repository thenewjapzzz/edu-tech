import Sidebar from "../../components/Sidebar/Sidebar";
import './TeacherScreen.css'

const TeacherScreen = () => { 
    return (
        <div className="teacher-screen">
            <Sidebar />
            <div className="content">
                <h2>Olá, professor!</h2>            
            </div>
        </div>
    )
};

export default TeacherScreen;
