import  Prompt  from "@models/Prompt"
import connectToDatabase from "@utils/database"
export const GET=async(req, {params})=>{
    connectToDatabase();
    try{
        const data=await Prompt.findById(params.id);
        return new Response(JSON.stringify(data), {status:200});
    }
    catch(err){
        console.log(err);
        return new Response(JSON.stringify({
            message:"Error occured"
           
        }))
    }
    
    
    

}

export const PATCH=()=>{

}

export const DELETE=()=>{

}