const mongoose = require('mongoose');
const Question = mongoose.model('Question');
const Answer = mongoose.model('Answer');
mongoose.Promise = global.Promise;

module.exports = {
    //triggered from server/config/routes.js
    index: (req, res) => {
        // get all questions
        Question.find({}, (err, questions) => {
            if (err) {
                console.log('error from questions.js', err)
                res.send(err);
            } else {
                console.log('got all our questions, printed from questions.js');
                res.json(questions);
            }
        })
    },
    create: (req, res) => {
        // add one question
        Question.create(req.body, (err, question) => {
            if (err) {
                res.send(err);
                console.log('error from create at questions.js');
            }
            else {
                console.log('else')
                console.log('added question via create in questions.js');
                res.json(question);
            }
        })
    },
    read: (req, res) => {
        // get answers for specific question
        Question.findById(req.params.id, (err, question) => {
            console.log(req.params.id, 'ID printed from questions.js read function')
            if (err) {
                res.send(err);
                console.log('error from read at questions.js', err);
            } else {
                console.log('got one question, printed from read at questions.js');
                //return response - question
                res.send(question);
            }
        })
    },
    answer: (req, res) => {
        console.log('req.body & req.params.id printed from answer at questions.js: ', req.body, req.params.id)
        Answer.create(req.body, function (err, newAnswer) {
            console.log('printed newAnswer from answer at questions.js', newAnswer)
            if (err) {
                res.send(err);
                console.log('error from answer at questions.js', err);
            } else {
                console.log('question ID printed from answer at questions.js', req.params.id)
                Question.findByIdAndUpdate({ _id: req.params.id }, { $push: { answers: newAnswer } }, function (err, newAnswer) {
                    console.log('data printed from answer at questions.js: ', newAnswer)
                    if (err) {
                        res.send(err);
                        console.log('error from answer at questions.js', err);
                    }
                    else {
                        res.send(newAnswer);
                        console.log('sent newAnswer, printed from questions.js', newAnswer);
                    }
                })
            }
        })
    },
    delete: (req, res) => {
        //delete specific question
        Question.findByIdAndDelete(req.params.id, (err, question) => {
            if (err) {
                res.send(err);
                console.log('error from delete at questions.js', err);
            } else {
                res.send(question)
                console.log('deleted question, printed from delete at questions.js');
            }
        })
    },
    unanswer: (req, res) => {
        //delete specific answer
        console.log('touched unanswer from questions.js')
        Question.findByIdAndUpdate({ _id: req.params.Qid }, { $pull: { answers: { _id: req.params.Aid} } }, (err, answer) => {
            if (err) {
                res.json(err);
                console.log('error from unanswer at questions.js', err);
            } else {
                res.send(answer)
                console.log('deleted answer, printed from unanswer at questions.js');
            }
        })
    },
    rate: (req, res) => {
        //likes specific answer
        console.log('touched rate from questions.js')
        Question.updateOne({_id: req.params.Qid, 'answers._id': req.params.Aid}, { $inc:{"answers.$.likes":1}}, (err, like) => {
            if (err) {
                res.json(err);
                console.log('error from rate at questions.js', err);
            } else {
                res.send(like)
                console.log('liked answer, printed from rate at questions.js');
            }
        })
    },
    downvote: (req, res) => {
        //downvotes specific answer
        console.log('touched downvote from questions.js')
        Question.updateOne({_id: req.params.Qid, 'answers._id': req.params.Aid}, { $inc:{"answers.$.likes":-1}}, (err, like) => {
            if (err) {
                res.json(err);
                console.log('error from downvote at questions.js', err);
            } else {
                res.send(like)
                console.log('downvoted answer, printed from downvote at questions.js');
            }
        })
    },
}


