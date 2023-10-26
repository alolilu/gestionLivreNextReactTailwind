"use server";
import prisma from "@/lib/prisma";

export const AjouterLivre = async (name, description, imagesrc) => {
  try {
    const newBook = await prisma.Livre.create({
      data: {
        name: name,
        description: description,
        imagesrc: imagesrc,
        authorId: "ID_DE_VOTRE_AUTEUR",
        state: true,
      },
    });

    return { bookInsert: true, newBook };
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    throw error;
  }
};
