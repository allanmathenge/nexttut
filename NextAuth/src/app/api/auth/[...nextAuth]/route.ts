import NextAuth from "next-auth";
import { options } from "./options";

// NextAuth() receives the options
const handler = NextAuth(options) 

export { handler as GET, handler as POST }