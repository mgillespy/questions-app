const Question = require('../controllers/questions')

module.exports = (app) => {
    //called from http.service.ts; triggers method in controllers/questions.js
    app.get('/api/questions', Question.index)
    app.post('/api/questions/create', Question.create)
    app.get('/api/questions/:id', Question.read)
    app.post('/api/questions/answer/:id', Question.answer)
    app.get('/api/questions/delete/:id', Question.delete)
    app.get('/api/question/:Qid/answer/delete/:Aid', Question.unanswer)
    app.get('/api/question/:Qid/like/:Aid', Question.rate)
    app.get('/api/question/:Qid/downvote/:Aid', Question.downvote)
 }
