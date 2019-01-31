const mongoose = require('mongoose');

const AnswerSchema = new mongoose.Schema({
    answerer: {
        type: String,
        required: [true, 'Your name is required.'], minlength: [3, 'Your name must be at least 3 characters long.']
    },
    content: {
        type: String,
        required: [true, 'Answer content is required.']
    },
    details: {
        type: String,
        required: false,
    },
    likes: {
        type: Number,
        required: false,
    }
}, { timestamps: true });

mongoose.model('Answer', AnswerSchema);

const QuestionSchema = new mongoose.Schema({
    query: {
        type: String,
        required: [true, 'Question content is required.'], minlength: [3, 'Your question must be at least 3 characters long.']
    },
    description: {
        type: String,
        required: false,
    },
    answers: [AnswerSchema]
}, { timestamps: true });
mongoose.model('Question', QuestionSchema);