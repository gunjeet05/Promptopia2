/**
 * Things we do in next auth 
 * 1.Wrap everything around sessionProvider
 * 2.Make a catch all route 
 * 3.import nextAuth and googleprovider from next-auth
 * 4.In next Auth function we will provide two things mainly providers list , callbacks(signIn({profile}), session({session}) )
 * 
 * 5.Import {signIn, signOut, getProvider, useSession }
 * 6.Get provider will give array of all the provider 
 * 7.SignIn(provider[1].id)
 * 
 * 8.We will get {data:session} from useSession();
 * 
 * session?user.image
 */