
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google'
import  NextAuth from 'next-auth';
// import GoogleProvider

export const {handlers, auth, signIn , signOut}= NextAuth({
    providers:[
        GitHubProvider({
            clientId:process.env.GITHUB_CLIENT_ID as string,
            clientSecret:process.env.GITHUB_CLIENT_SECRET as string,
        }),
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID as string,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
        }),
      
      
    
    ],
    secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
    }) 