// src/pages/LessonPlanScreen/LessonPlanScreen.tsx
import Sidebar from "../../components/Sidebar/Sidebar";
import LessonPlanList from "./LessonPlanList";
import './LessonPlanScreen.css';

const LessonPlanScreen = () => {
    return (
        <div className="lesson_plan_screen">
            <Sidebar />
            <div className="lesson_plan_list">
                <LessonPlanList />
            </div>
        </div>
    );
};

export default LessonPlanScreen;
