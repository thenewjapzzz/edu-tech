import { Request, Response  } from "express";
import { LessonPlanService } from "../services/LessonPlanService";

class LessonPlanController {
    private lessonPlanService = new LessonPlanService();

    async createLessonPlan(req: Request, res: Response) {
        try {
            const { title, description} = req.body;
            const teacherId = req.user?.id ?? 0;
            const lessonPlan = await this.lessonPlanService.createLessonPlan(teacherId, title, description);
            return res.status(201).json(lessonPlan);
        }catch (error) {
            return res.status(400).json({ message: (error as Error).message})
        }
    }

    // Método de atualizar plano de aula com base no id
    async updateLessonPlan(req: Request, res: Response) {
        try {
            const { title, description } = req.body; // Dados enviados no corpo da requisição
            const { id } = req.params;
            const updatedLessonPlan = await this.lessonPlanService.updateLessonPlan(parseInt(id), title, description);
            return res.json(updatedLessonPlan);
        }catch (error) {
            return res.status(400).json({ message: (error as Error).message })
        }
    }

    // Método para deletar plano de aula com base no id
    async deleteLessonPlan(req: Request, res: Response) {
        try {
            const { id } = req.params
            await this.lessonPlanService.deleteLessonPlan(parseInt(id));
            return res.status(204).send();
        }catch (error) {
            return res.status(400).json({ message:  (error as Error).message })
        }
    }
}