import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';
import { connectToDb } from './utils';
import { User } from './models';
export const {
  handlers: { GET, POST },
  auth,
  signIn,

  signOut,
} = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      /*       console.log(user, account, profile); */
      if (account.provider === 'github') {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });
          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });
            await newUser.save();
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return true;
    },
  },
});
