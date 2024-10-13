import prisma from '@/lib/prisma';
import Link from 'next/link';

export default async function PostsPage() {
  const posts = await prisma.post.findMany();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
