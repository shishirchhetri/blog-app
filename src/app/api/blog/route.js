import { Post } from '@/lib/models';
import { connectToDb } from '@/lib/utils';
import { NextResponse } from 'next/server';

//listing all the posts in the database
export const GET = async (req) => {
  try {
    connectToDb();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error('Failed to fetch posts');
  }
};
