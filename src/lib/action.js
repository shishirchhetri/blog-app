'use server';
import { revalidatePath } from 'next/cache';
import { Post, User } from './models';
import { connectToDb } from './utils';
import { signIn, signOut } from './auth';
import bcrypt from 'bcrypt';

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log('New post saved to Database');
    revalidatePath('/blog');
  } catch (err) {
    console.log(err);
    return { error: 'something went wrong while adding post' };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log('Post removed from the database');
    revalidatePath('/blog');
  } catch (err) {
    console.log(err);
    return { error: 'unknown error occured while deleting the post' };
  }
};

export const handleGithubLogin = async () => {
  await signIn('github');
};

export const handleLogout = async () => {
  await signOut();
};

export const register = async (formData) => {
  const { username, email, password, passwordRepeat, img } =
    Object.fromEntries(formData);
  if (password !== passwordRepeat) {
    return { error: 'Password doesnot match.' };
  }
  try {
    connectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return { error: 'Username already exists!' };
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPass,
      img,
    });
    await newUser.save();
    console.log('New user Registered');
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: 'unknown error occured while registering new user' };
  }
};

export const login = async (formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    connectToDb();
    await signIn('credentials', { username, password });

    console.log('loggedin successfully!');
  } catch (err) {
    console.log(err);
    return { error: 'unknown error occured while logging in' };
  }
};
