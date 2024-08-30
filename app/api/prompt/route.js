import Prompt from "@models/Prompt";
import connectToDatabase from "@utils/database"


export const GET=async()=>{

    connectToDatabase();
    try{
        const res=await Prompt.find({}).populate('userId');
        return new Response(JSON.stringify(res),{
            status:201
        });
        
        
    }
    catch(err){
        return new Response(JSON.stringify({
            message:"Error occured in fetching prompts"
        }))

    }





}