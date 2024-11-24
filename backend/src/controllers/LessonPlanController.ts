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
      const lessonPlan = await this.lessonPlanService.createLessonPlan(
        teacherId,
        title,
        description
      );
      res
        .status(201)
        .json({ message: "Lesson plan created successfully", lessonPlan });
    } catch (error) {
      console.log("Error creating lesson plan:", error);
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async updateLessonPlan(req: Request, res: Response): Promise<void> {
    try {
      const { title, description } = req.body;
      const { id } = req.params;

      if (!id || isNaN(Number(id))) {
        throw new Error("Invalid lesson plan ID");
      }

      const updatedLessonPlan = await this.lessonPlanService.updateLessonPlan(
        parseInt(id),
        title,
        description
      );
      res.json({
        message: "Lesson plan updated successfully",
        updatedLessonPlan,
      });
    } catch (error) {
      console.error("Error updating lesson plan:", error);
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async deleteLessonPlan(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const parseId = parseInt(id);

      if (isNaN(parseId)) {
        res.status(400).json({ message: "Invalid lesson plan ID" });
      }

      await this.lessonPlanService.deleteLessonPlan(parseId);
      res.json({ message: "Lesson plan deleted successfully" });
    } catch (error) {
      console.log("Error deleting lesson plan:", error);
      res.status(500).json({ message: (error as Error).message });
    }
  }

  async getLessonPlans(req: Request, res: Response): Promise<void> {
    try {
      const teacherId = req.user?.id ?? 1;
      const lessonPlan = await this.lessonPlanService.getLessonPlansByTeacher(
        teacherId
      );

      if (lessonPlan.length === 0) {
        // Retorne uma resposta 404 se nenhum plano de aula for encontrado
        res
          .status(404)
          .json({ message: "No lesson plans found for this teacher" });
      } else {
        // Se os planos de aula forem encontrados, retorne-os
        res.status(200).json({
          message: "Lesson plans retrieved successfully",
          lessonPlans: lessonPlan, // Inclua os planos de aula na resposta
        });
      }
    } catch (error) {
      console.log("Error fetching lesson plan:", error);
      res.status(400).json({ message: (error as Error).message });
    }
  }

  async getLessonPlanId(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const lessonPlan = await this.lessonPlanService.getLessonPlanById(
        parseInt(id)
      );
      if (!lessonPlan) {
        res.status(404).json({ message: "Lesson plan not found" });
      } else {
        res.json({ message: "Lesson plan retrivied successfully", lessonPlan });
      }
    } catch (error) {
      console.log("Error fetching lesson plan:", error);
      res.status(400).json({ message: (error as Error).message });
    }
  }
}

export default new LessonPlanController();
