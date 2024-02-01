export const authConfig = {
  pages: {
    signIn: '/login',
  },
  providers: [],
  callbacks: {
    // jwt and session function for the session and jwt creation of the user who
    // signed up with credentials and to check for isAdmin property
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPage = request.nextUrl?.pathname.startsWith('/admin');
      const isOnBlogPage = request.nextUrl?.pathname.startsWith('/blog');
      const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');

      //for only admin
      if (isOnAdminPage && !user?.isAdmin) {
        return false;
      }

      //blog page for only authenticated users
      if (isOnBlogPage && !user) {
        return false;
      }

      //logged in user redirect to homepage
      if (isOnLoginPage && user) {
        return Response.redirect(new URL('/', request.nextUrl));
      }
      return true;
    },
  },
};
