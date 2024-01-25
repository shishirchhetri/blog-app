'use server';
import { revalidatePath } from 'next/cache';
import { Post } from './models';
import { connectToDb } from './utils';

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
