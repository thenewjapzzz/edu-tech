import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import './ProgressPage.css';

// Fake Data
const fakeProgressData = [
  { studentName: "João Silva", progressPercentage: 75, completedAssignments: 6, totalAssignments: 8 },
  { studentName: "Maria Oliveira", progressPercentage: 90, completedAssignments: 9, totalAssignments: 10 },
  { studentName: "Carlos Pereira", progressPercentage: 65, completedAssignments: 13, totalAssignments: 20 },
];

const ProgressPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate loading process
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // Fake loading delay
    }, 1000);
  }, []);

  return (
    <>
      <div className="progress-screen">
        <Sidebar />
        <div className="main-content">
          <div className="progress-title">Progresso dos Estudantes</div>

          {loading ? (
            <p className="loading-text">Carregando dados...</p>
          ) : (
            <div className="students-progress">
              {fakeProgressData.map((student) => (
                <div key={student.studentName} className="student-card">
                  <div className="student-name">{student.studentName}</div>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${student.progressPercentage}%` }}
                    />
                  </div>
                  <div className="progress-info">
                    <p className="progress-text">Progresso: {student.progressPercentage}%</p>
                    <p className="tasks-completed">
                      {student.completedAssignments} / {student.totalAssignments} Tarefas Concluídas
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProgressPage;
