// src/services/LessonPlanService.ts
import axios from 'axios';
import { LessonPlan } from '../types/LessonPlan'; // Importando a interface

const API_URL = "http://localhost:3000/lesson-plans";

const getLessonPlans = async (): Promise<LessonPlan[]> => {
    const response = await axios.get(API_URL);
    return response.data;
}

const createLessonPlan = async (lessonPlan: LessonPlan): Promise<LessonPlan> => {
    const response = await axios.post(API_URL, lessonPlan);
    return response.data;
}

const updateLessonPlan = async (id: number, lessonPlan: LessonPlan): Promise<LessonPlan> => {
    const response = await axios.put(`${API_URL}/${id}`, lessonPlan);
    return response.data;
}

const deleteLessonPlan = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
}

export { getLessonPlans, createLessonPlan, updateLessonPlan, deleteLessonPlan };
