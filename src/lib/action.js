import { Post } from './models';
import { connectToDb } from './utils';

export const addPost = async (formData) => {
  'use server';
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
  } catch (err) {
    console.log(err);
    return { error: 'something went wrong while adding post' };
  }
};
