import CreatePost from "@/components/todos/CreatePost";
import prisma from "@/lib/db";
import Link from "next/link";
import React from "react";

export default async function Page() {
  const posts = await prisma.post.findMany();

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold">All Posts ({posts.length})</h1>
      <ul className="border-t border-b border-black/10 py-5 leading-8">
        {posts.map((post) => (
          <li key={post.id} className="flex items-center justify-between px-5">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <CreatePost />
    </main>
  );
}
