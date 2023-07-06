import UserSession from "@/types/loggedInUser/UserSession";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        const result = await fetch("http://192.168.43.164:8080/api/v1/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        const user: UserSession = await result.json();
        if (result.ok && user) return user;
        else return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          userId: user.userId,
          username: user.username,
          bio: user.bio,
          email: user.email,
          image: user.image
        }
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user = { ...token }
      }
      return session;
    }
  },
  pages: {
    signIn: "/auth/login"
  },
  secret: "404E635266556A586E3272357538782F413F4428472B4B6250645367566B5970"
};
