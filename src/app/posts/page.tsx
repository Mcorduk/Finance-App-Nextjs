import  prisma  from '@/lib/prisma';
import Link from 'next/link';

export default async function PostsPage() {
  try {
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
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return <div>Failed to load posts. Please try again later.</div>;
  }
}
