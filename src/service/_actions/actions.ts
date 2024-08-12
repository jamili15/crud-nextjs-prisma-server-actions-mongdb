"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
  try {
    const title = formData.get("title") as string;
    const slug = title.replace(/\s+/g, "_").toLowerCase();
    const content = formData.get("content") as string;

    await prisma.post.create({
      data: {
        title,
        slug,
        content,
      },
    });

    revalidatePath("/");

    return { success: true };
  } catch (error) {
    console.error("Error creating post:", error);
    return { success: false, message: "Failed to create post" };
  }
}

export async function editPost(formData: FormData, id: string) {
  const title = formData.get("title") as string;
  const slug = title.replace(/\s+/g, "_").toLowerCase();
  const content = formData.get("content") as string;

  await prisma.post.update({
    where: { id },
    data: {
      title,
      slug,
      content,
    },
  });
}

export async function deletePost(id: string) {
  try {
    await prisma.post.delete({ where: { id } });

    return { success: true };
  } catch (error) {
    console.error("Error creating post:", error);
    return { success: false, message: "Failed to create post" };
  }
}
