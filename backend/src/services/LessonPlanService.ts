import { DataSource } from "typeorm";
import { LessonPlan } from "../models/LessonPlanModel";
import AppDataSource from "../config/database";

export class LessonPlanService {
    // Permissão para operações de banco de dados no modelo LessonPlan
    private lessonPlanRepository = AppDataSource.getRepository(LessonPlan)
    
    // Método para criar LessonPlan
    async createLessonPlan(teacher_id: number, title: string, description: string) {
        const lessonPlan = this.lessonPlanRepository.create({
            teacher: { user_id: teacher_id }, // Relacionamento entre LessonPLan e User
            title,
            description,
        });
        await this.lessonPlanRepository.save(lessonPlan);
        return lessonPlan;
    }

    // Método de atualizar, que busca um plano de aula pelo seu lessonPlanId
    async updateLessonPlan(lessonPlanId: number, title: string, description: string) {
        const lessonPlan = await this.lessonPlanRepository.findOneBy({ lesson_plan_id: lessonPlanId });;
        if(!lessonPlan) {
            throw new Error("Lesson plan not found"); 
        }
        lessonPlan.title = title;
        lessonPlan.description = description;
        lessonPlan.updated_at = new Date();
        await this.lessonPlanRepository.save(lessonPlan);
        return lessonPlan;
    }

    // Método para deletar plano de aula pelo lessonPlanID
    async deleteLessonPlan(lessonPlanId: number) {
        const result = await this.lessonPlanRepository.delete({ lesson_plan_id: lessonPlanId });
        if(result.affected === 0) {
            throw new Error("Lesson plan not foud");
        }
    }

    // Método para listar LessonPlan pelo teacherId
    async getLessonPlansByTeacher(teacherId: number) {
        return this.lessonPlanRepository.find({ where: { teacher: {user_id: teacherId } } });
    }

    // Método para listar LessonPlan pelo lessonPlanId
    async getLessonPlanById(lessonPlanId: number) {
        return this.lessonPlanRepository.findOne({ where: { lesson_plan_id: lessonPlanId } })
    }
}