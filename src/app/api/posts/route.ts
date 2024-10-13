import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const data = await request.json();
  const newPost = await prisma.post.create({ data });
  return NextResponse.json(newPost, { status: 201 });
}
