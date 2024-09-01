import Prompt from "@models/Prompt"
import connectToDatabase from "@utils/database"

export const GET=async(req, {params})=>{
    connectToDatabase();

    try{
        const prompts=await Prompt.find({
        userId:params.id
        
    }).populate('userId');

      return new Response(JSON.stringify(prompts), {status:200});
    }
    catch(err){
        console.log("Error in user prompts", err);
        return new Response(JSON.stringify({"message":"Error occured"}),{
            status:500
        })
    }
    

    

    
    
}