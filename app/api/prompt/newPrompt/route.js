import connectToDatabase from "@utils/database";
import Prompt from "@models/Prompt";
export const POST=async (request)=>{
    try{
        connectToDatabase();
        
       // console.log(list, "list in backend");
        const {userId,prompt, tag}=await request.json();
        //console.log(userId, prompt, tag, "in backend");
        const prompts =new Prompt({userId, prompt, tag});
        await prompts.save();

        return new Response(JSON.stringify(prompts), {status:201});

        
        
        
        
    
    }
    catch(err){
        console.log("Error ", err);
        return new Response({"message":"Error occured while creating prompt"}, {status:500});
    }
    

}


export const GET=async(req)=>{
    try{
        connectToDatabase();
        const list=await Prompt.find();

        return new Response(JSON.stringify(list),{
            status:200
        })


    }
    catch(err){
        return new Response(JSON.stringify({
            "message":"Error occured in route"
        }),{
            status:200
        })

    }
}