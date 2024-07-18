const mongoose = require('mongoose');

const blogCommentsSchema = new mongoose.Schema({
    name:{type: String, required:true},
    email:{type: String, required: true},
    commentContent:{type: String, required: true}
});

const blogSchema = new mongoose.Schema({
    title:{type: String, required: true},
    date:{type:String, default: Date.now()},
    blogContent:{type: String, required: true},
    blogImgs:[
        {
            url: { type: String, required: true },  // URL of the image
            description: { type: String },  // Optional description of the image
            uploadDate: { type: Date, default: Date.now }  // Optional upload date
        }
    ],
    comments:[blogCommentsSchema]
})

const categorySchema = new mongoose.Schema({
    categoryName:{type:String, required: true, unique: true},
    categoryBlogs:[blogSchema]
})

const Blog = mongoose.model('Blog', blogSchema);
const Category = mongoose.model('Category', categorySchema);
module.exports = { Blog, Category }