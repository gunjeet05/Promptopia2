import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@models/User";
import connectToDatabase from "@utils/database";

const handler=nextAuth({
    providers:[GoogleProvider({
        clientId:process.env.Google_CLIENT,
        clientSecret:process.env.GOOGLE_SECRET
    })],
    callbacks:{
        async session({session}){
            const sessionUser=await User.findOne({email:session.user.email});
            session.user.id=sessionUser._id.toString();

            return session;

            

        },
        async signIn({profile}){
            try{
                
                await connectToDatabase();
                console.log("profile in signin",profile);
                const user= await User.findOne({email:profile.email});
                if(!user){

                    
                    await User.create({
                        email:profile.email,
                        username:profile.name.replace(" ","").toLowerCase(),
                        image:profile.picture,

                    })
                }

                return true;



            }
            catch(err){
                console.log("Error occured in sign in",err);
                return false;
            }

        }
    }
})

export {handler as GET, handler as POST};

