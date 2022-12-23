const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        
    }
)


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String,
            required: true,
        },
        reactions: {
            type: [reactionSchema]
        }
    }
)