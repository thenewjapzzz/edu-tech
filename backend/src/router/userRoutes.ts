import AuthController from "../controllers/AuthController";
import router from "./defaultRoutes";

router.post('/', async(req, res) => {
    await AuthController.loginUser(req, res)
})

export default router;
