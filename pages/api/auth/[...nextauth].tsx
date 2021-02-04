import { env } from "process";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "next-auth";
import type { Profile } from "next-auth/adapters";

const options = {
  providers: [
    Providers.Google({
      clientId: env.GOOGLE_ID!,
      clientSecret: env.GOOGLE_SECRET!,
    }),
  ],
  callbacks: {
    signIn: async (_: User, _1: Account, profile: Profile) => {
      const isAllowedToSignIn = env.VALID_EMAILS?.split(/\s+/).includes(
        profile.email || ""
      )
        ? true
        : false;

      return Promise.resolve(isAllowedToSignIn);
    },
  },

  //database: process.env.DATABASE_URL,
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);
