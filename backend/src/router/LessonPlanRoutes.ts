import { Router } from "express";
import LessonPlanController from "../controllers/LessonPlanController";
import { verifyToken, verifyTeacher } from "../middlewares/AuthMiddlware";

const lessonPlanRouter = Router();

// Rota para criar um novo plano de aula
lessonPlanRouter.post(
  "/lesson-plan",
  verifyToken,
  verifyTeacher,
  LessonPlanController.createLessonPlan.bind(LessonPlanController)  // Métdo bind nos roteadores garante que o contexto(this) seja corretamente preservado
);

// Rota para atualizar um plano de aula
lessonPlanRouter.put(
  "/lesson-plan/:id",
  verifyToken,
  verifyTeacher,
  LessonPlanController.updateLessonPlan.bind(LessonPlanController)
);

// Rota para deletar um plano de aula
lessonPlanRouter.delete(
  "/lesson-plan/:id",
  verifyToken,
  verifyTeacher,
  LessonPlanController.deleteLessonPlan.bind(LessonPlanController)
);

// Rota para listar os planos de aula de professores
lessonPlanRouter.get(
  "/lesson-plans",
  verifyToken,
  verifyTeacher,
  LessonPlanController.getLessonPlans.bind(LessonPlanController)
);

// Rota para obter um plano de aula específico pelo ID
lessonPlanRouter.get(
  "/lesson-plan/:id",
  verifyToken,
  verifyTeacher,
  LessonPlanController.getLessonPlanId.bind(LessonPlanController)
);

export default lessonPlanRouter;
