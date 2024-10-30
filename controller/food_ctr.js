const {read_file , write_file} =  require("../api/api")
const {v4} = require("uuid")

const food = read_file("base.json")
const getFood = (req , res) =>{
  try{

    res.render("index" , {food})
  }catch(err){
    throw new Error(err.message)
  }
}


///////////////////////////////// post

const postFood = (req , res) =>{
  const food = read_file("base.json")
   try{
     food.push({
      id:v4(),
      ...req.body
     })

     write_file("base.json" , food)
     res.json("Added product")
   }catch(err){
    throw new Error(err.message)
  }
}


////////////////////////// delete

const deleteFood = (req , res) =>{
  try{
     const {id} = req.params
      const findFood = food.find((item) => item.id === id)
       
      if(!findFood){
        res.status(404).send({
          message:"This food has already deleted in my database",
          status : 404
        })
      }
    
    
      food.forEach((item , index) =>{
        if (item.id === id) {
          food.splice(index , 1)
        }
      })
     
      write_file("base.json" , food)
      res.status(200).send({
        message:"This food deleted",
        status : 200
      })
    }catch{
      throw new Error(error.message)
    }
  }


  //////////////////////////////////// update

  const updateFood = (req , res) =>{
    try{
      const {id} = req.params
      const{title , new_price ,old_price ,ingredients ,img } = req.body
    
      const findFood = food.find((item) => item.id === id)
    
      if (!findFood) {
        return res.status(200).send({
          message:"There is not that food in my database",
          status:404
        })
      }
     
        food.forEach(item => {
          if (item.id === id) {
            item.title = title ? title :item.title,
            item.new_price = new_price ? new_price :item.new_price
            item.old_price = old_price ? old_price :item.old_price
            item.ingredients = ingredients ? ingredients :item.ingredients
            item.img = img ? img :item.img
           }
    
           write_file("base.json" , food)
           res.status(201).send({
            message:"updated your information instead of old one",
            status : 201
           })
        });
      
      
    }catch(err){
      throw new Error(err.message)
    }
    
    
  }

module.exports = {
  getFood,
  postFood,
  deleteFood,
  updateFood
}