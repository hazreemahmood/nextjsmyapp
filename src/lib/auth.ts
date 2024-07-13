import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { randomBytes, randomUUID } from "crypto";

export const authConfig: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: {
    //       label: "Username",
    //       type: "text",
    //       placeholder: "johndoe",
    //     },
    //     password: {
    //       label: "Password",
    //       type: "password",
    //     },
    //   },
    //   async authorize(credentials) {
    //     console.log(credentials);
    //     if (!credentials || !credentials.username || !credentials.password)
    //       return null;

    //     return null;
    //   },
    // }),
  ],

  theme: {
    colorScheme: "light", // "auto" | "dark" | "light"
    brandColor: "", // Hex color code
    logo: "/next.svg", // Absolute URL to image
    buttonText: "", // Hex color code
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      if (url !== baseUrl) {
        return baseUrl;
      }
      return baseUrl + '/user';
    },
    async session({ session, token, user }) {
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },

  // events: {
  //   async signIn(message) {
  //     console.log(message);
  //   },
  //   async signOut(message) {
  //     console.log(message);
  //   },
  //   async createUser(message) {
  //     console.log(message);
  //   },
  //   async updateUser(message) {
  //     console.log(message);
  //   },
  //   async linkAccount(message) {
  //     console.log(message);
  //   },
  //   async session(message) {
  //     console.log(message);
  //   },
  // },

  // session: {
  //   strategy: "jwt",
  //   maxAge: 30 * 24 * 60 * 60, // 30 days
  //   updateAge: 24 * 60 * 60, // 24 hours
  //   generateSessionToken: () => {
  //     return randomUUID?.() ?? randomBytes(32).toString("hex");
  //   },
  // },

  // jwt: {
  //   // The maximum age of the NextAuth.js issued JWT in seconds.
  //   // Defaults to `session.maxAge`.
  //   maxAge: 60 * 60 * 24 * 30,
  //   // You can define your own encode/decode functions for signing and encryption
  //   async encode() {
  //     return "asd";
  //   },
  //   async decode() {
  //     return null;
  //   },
  // },

  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
    error: "/auth/error", // Error code passed in query string as ?error=
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
};
