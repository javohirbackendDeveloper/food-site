const {Router} = require("express")
const { getFood , postFood, deleteFood, updateFood } = require("../controller/food_ctr")

const foodRouter = Router()

foodRouter.get("/" , getFood)
foodRouter.post("/postFood" , postFood)
foodRouter.delete("/deleteFood/:id" , deleteFood)
foodRouter.put("/updateFood/:id" , updateFood)

module.exports = foodRouter