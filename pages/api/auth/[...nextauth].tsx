import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { env } from 'process'

const options = {
  providers: [
    // OAuth authentication providers...

    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ], 
  callbacks: {
    signIn: async (user, account, profile) => {
      var isAllowedToSignIn = false
       if(profile.email.startsWith("emptystring"))
       {
         isAllowedToSignIn = true

       }
      // {
      //   isAllowedToSignIn = true
      // }
      

      if (isAllowedToSignIn) {

        return Promise.resolve(true)
      }
      else{

        return Promise.resolve(false)
      }
    },
  },
  

  // Optional SQL or MongoDB database to persist users
  //database: process.env.DATABASE_URL
}

export default (req, res) => NextAuth(req, res, options)