import nextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import { useRouter } from "next/router";

interface Provider {
    clientId:string, 
    clientSecret: string, 
    authorization:{
        params: {
            prompt: string,
            access_type: string,
            response_type: string
        }
    }
}

export default nextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
      GoogleProvider({
        clientId: `${process.env.GOOGLE_ID}`,
        clientSecret: `${process.env.GOOGLE_SECRET}`,
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code",
            max_age: 86300,
            callbacks:{
                async signIn({ user, account, profile, email, credentials }: {user:any, account:any, profile:any, email:string, credentials:any}) {
                    let router = useRouter()
                    router.push("/browse")
                },
            }
          },
        
        },
      })
    ]
  })