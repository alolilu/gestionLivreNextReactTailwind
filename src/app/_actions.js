"use server";

import prisma from "@/lib/prisma";

export const getBooks = async () => {
  const books = await prisma.livre.findMany();
  return books;
};
