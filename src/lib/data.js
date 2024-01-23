// TEMPORARY DATA

import { Post, User } from './models';
import { connectToDb } from './utils';

/* 
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
];

const posts = [
  { id: 1, title: 'Post 1', body: '......', userId: 1 },
  { id: 2, title: 'Post 2', body: '......', userId: 1 },
  { id: 3, title: 'Post 3', body: '......', userId: 2 },
  { id: 4, title: 'Post 4', body: '......', userId: 2 },
];
 */
export const getPosts = async () => {
  // return posts;
  try {
    //check and connect to mongoose
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch posts');
  }
};

export const getPost = async (slug) => {
  // const post = posts.find((post) => post.id === parseInt(id));
  // return post;
  try {
    //check and connect to mongoose
    connectToDb();
    const post = await Post.find({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch post');
  }
};

//list all users
export const getUsers = async () => {
  // return users.find((user) => user.id === id);
  try {
    //check and connect to mongoose
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch users');
  }
};

export const getUser = async (id) => {
  // return users.find((user) => user.id === id);
  try {
    //check and connect to mongoose
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch user');
  }
};
