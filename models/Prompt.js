import {Schema,model, models} from 'mongoose';

const prompt =new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    prompt:{
        type:String,
        required:[true, "Prompt is required"],
        
    },
    tag:{
        type:String,
        required:[true, "Tag is required"]
    }
})


const Prompt=models.Prompt || model("Prompt",prompt);
export default Prompt;

