import prisma from "@/lib/db";

import React from "react";

export default async function page({ params }: { params: { slug: string } }) {
  const posts = await prisma.post.findUnique({
    where: { slug: params.slug },
  });

  console.log("Posts Params", posts);

  return (
    <main className="flex flex-col items-center gap-y-5 pt-24 text-center">
      <h1 className="text-3xl font-semibold"> {posts?.title}</h1>
      <p>{posts?.content}</p>
    </main>
  );
}
