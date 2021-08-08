const Router = require("express").Router;

const { userController, authController } = require("../controllers");
const {
  authMiddleware: { checkToken, isAdmin },
} = require("../middlewares");

const userRouter = Router();

// Movies requests
// userRouter.get("/", userController.fetchPersons);
userRouter.post("/signin", authController.signIn);
userRouter.post("/signup", [checkToken, isAdmin], userController.signUp);
userRouter.get("/", [checkToken, isAdmin], userController.fetchUsers);
userRouter.get("/:id", userController.fetchUserById);
// userRouter.patch("/:id", userController.patchPerson);
// userRouter.delete("/:id", userController.deletePerson);

module.exports = {
  userRouter,
};
