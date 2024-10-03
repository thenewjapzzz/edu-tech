import { Request, Response } from "express";
import { LessonPlanService } from "../services/LessonPlanService";

export class LessonPlanController {
    private lessonPlanService: LessonPlanService;

    constructor() {
        this.lessonPlanService = new LessonPlanService();
    }

    async createLessonPlan(req: Request, res: Response): Promise<void> {
        try {
            const { title, description } = req.body;
            const teacherId = req.user?.id ?? 1;
            const lessonPlan = await this.lessonPlanService.createLessonPlan(teacherId, title, description);
            res.status(201).json({ message: "Lesson plan created successfully",lessonPlan});
        } catch (error) {
            console.log("Error creating lesson plan:", error);
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async updateLessonPlan(req: Request, res: Response): Promise<void> {
        try {
            const { title, description } = req.body;
            const { id } = req.params;
            const updatedLessonPlan = await this.lessonPlanService.updateLessonPlan(parseInt(id), title, description);
            res.json({ message: "Lesson plan updated successfully"});
        } catch (error) {
            console.log("Error updating lesson plan:", error)
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async deleteLessonPlan(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            await this.lessonPlanService.deleteLessonPlan(parseInt(id));
            res.json({ message: "Lesson plan deleted successfully", })
            res.status(204).send();
        } catch (error) {
            console.log("Error delecting lesson plan:", error);
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async getLessonPlans(req: Request, res: Response): Promise<void> {
        try {
            const teacherId = req.user?.id ?? 1;
            const lessonPlan = await this.lessonPlanService.getLessonPlansByTeacher(teacherId);
            if(lessonPlan.length === 0) {
                res.status(404).json({ message: "No lessons plans found for this teacher" })
            }else {
                res.json({ message: "Lesson plans retrieved successfully" })
            }
            res.json(lessonPlan);
        } catch (error) {
            console.log("Error fetching lesson plan:", error)
            res.status(400).json({ message: (error as Error).message });
        }
    }

    async getLessonPlanId(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const lessonPlan = await this.lessonPlanService.getLessonPlanById(parseInt(id));
            if (!lessonPlan) {
                res.status(404).json({ message: "Lesson plan not found" });
            } else {
                res.json({ message: "Lesson plan retrivied successfully", lessonPlan  });
            }
        } catch (error) {
            console.log("Error fetching lesson plan:", error)
            res.status(400).json({ message: (error as Error).message });
        }
    }
}

export default new LessonPlanController;
