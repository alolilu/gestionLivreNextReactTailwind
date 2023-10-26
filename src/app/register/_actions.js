"use server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const register = async (email, password, confirmPassword, pseudo) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[-+_!@#$%^&*.,&?;:\"'(){}§<>])(?=.{8,})/;

  if (existingUser) {
    return { errorUserExist: true };
  }

  if (password !== confirmPassword) {
    return { errorPasswordNotCorrespond: true };
  }

  if (!passwordRegex.test(password)) {
    return { errorPasswordCaractere: true };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await prisma.user.create({
      data: {
        email: email,
        pseudo: pseudo,
        password: hashedPassword,
      },
    });

    return { userCreate: true, newUser };
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    throw error;
  }
};
