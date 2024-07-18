const mongoose = require('mongoose')

const projectInfoSchema = new mongoose.Schema({
    projectTitle:{type: String, required: true},
    projectDesc:{type: String, required: true},
    date:{type: String, default: Date.now},
    images: [{ type: String }],
})
const projectCtegorySchema = new mongoose.Schema({
    categoryName:{type: String, required: true},
    projects:[projectInfoSchema]
})

const Project = mongoose.model('Project', projectInfoSchema)
const CategoryProjects = mongoose.model('CategoryProjects', projectInfoSchema)

module.exports = { Project, CategoryProjects }