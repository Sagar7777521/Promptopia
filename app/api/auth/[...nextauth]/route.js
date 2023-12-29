import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectTodb } from "@utils/database";

console.log({
  clientId: "process.env.GOOGLE_ID",
  clientSecret: "process.env.GOOGLE_VLIENT_SECRET",
});
const handler = NextAuth({
  provider: [
    GoogleProvider({
      clientId: "process.env.GOOGLE_ID",
      clientSecret: "process.env.GOOGLE_VLIENT_SECRET",
    }),
  ],

  async session({ session }) {},
  async signIn({ profile }) {
    try {
      await connectTodb();

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});

export { handler as GET, handler as POST };
