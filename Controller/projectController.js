let projectModel = require("../Models/project")

// let client = require("../dbConnect")
// let projectCollection;/\

// setTimeout(() => {
//     projectCollection = client.mongoClient.db().collection("Projects");
// }, 2000)

// const insertProjects =(project,callback) =>{
//     projectCollection.insert(project,callback);
// }
// //get project
// const getProjects = (callback) =>{
//     projectCollection.find({}).toArray(callback)
// }

//Create project
const createProject = (req, res) => {
    console.log("New Project added", req.body)
    var newProjects = req.body;
    projectModel.insertProjects(newProjects,(err,result) =>{
        if(req){
            res.json({statusCode: 400,message: err})
        }
        else{
            res.json({statusCode: 200, message:"Project added sucessfully", data: result})
        }
    })
}

//retrieve project
const retrieveProject = (req, res) => {
    projectModel.getProjects((err,result) => {
        if(err){
            res.json({statusCode: 400, message: err})
        }
        else{
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
}

module.exports = {retrieveProject, createProject}