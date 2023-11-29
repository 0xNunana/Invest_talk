import NextAuth from "next-auth"
import GitHubProvider from 'next-auth/providers/github'
import FacebookProvder from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions ={
    providers:[
        GitHubProvider({
            clientId:process.env.GITHUB_ID!,
            clientSecret:process.env.GITHUB_SECRET!
        }),
        FacebookProvder({
            clientId:'',
            clientSecret:''
        }),
        GoogleProvider({
            clientId:'',
            clientSecret:''
        })
    ],
    pages:{
        //using custom login page
       // signIn:'/login'

         
    },
    secret:process.env.NEXTAUTH_SECRET!
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

//check the link to see if the providers are working
//http://localhost:3000/api/auth/providers