import { prisma } from "~/db.server";

export function getPost({ userId, id }: { userId: string; id: string }) {
  return prisma.post.findFirst({
    where: { id, userId },
  });
}

export function getPostCollection({ userId }: { userId: string }) {
  return prisma.post.findMany({
    where: { userId: userId },
    select: { id: true, title: true },
    orderBy: { updatedAt: "desc" },
  });
}

export function createPost({
  title,
  body,
  userId,
}: {
  title: string;
  body: string;
  userId: string;
}) {
  return prisma.post.create({
    data: {
      title,
      body,
      author: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function deletePost({ id, userId }: { id: string; userId: string }) {
  return prisma.post.deleteMany({
    where: { id, userId },
  });
}

export type { Post } from "@prisma/client";
