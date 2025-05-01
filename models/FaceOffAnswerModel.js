const mongoose = require('mongoose');

const faceOffAnswerSchema = new mongoose.Schema({
  batchId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Batch', 
    required: true 
  },
  userAnswers: [
    {
      userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
      },
      correctAnswerCount: { 
        type: Number, 
        required: true
      }
    }
  ],
  timer: { type: Number },
  createdAt: { type: Date, default: Date.now }
});

const FaceOffAnswer = mongoose.model('FaceOffAnswer', faceOffAnswerSchema);
module.exports = FaceOffAnswer;

