import { Post } from '@/lib/models';
import { connectToDb } from '@/lib/utils';
import { NextResponse } from 'next/server';

//listing all the posts in the database
export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch post');
  }
};

//deleting as specific post with an id
export const DELETE = async (req, { params }) => {
  const { slug } = params;
  try {
    connectToDb();
    await Post.deleteOne({ slug });
    return NextResponse.json('Post deleted successfully');
  } catch (err) {
    console.log(err);
    throw new Error('Failed to delete post');
  }
};
