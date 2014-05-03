var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
    title: String,
    author: String,
    status: Number,
    body: String,
    created: {
        type: Date,
        default: Date.now
    },
    tags: [{
        type: String
    }]
});

PostSchema.virtual('date')
    .get(function(){
        return this._id.getTimestamp();
    });

mongoose.model('Post', PostSchema);
