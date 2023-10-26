"use client";

import Navbar from "@/components/Navbar";
import { LivreCatalogue } from "@/components/LivreCatalogue";
import { LivreCatalogueComplet } from "@/components/LivreCatalogueComplet";
import useBooks from "@/hooks/useBooks";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: books, isLoading } = useBooks();
  const { data: userSession, status } = useSession();
  // console.log(userSession?.user.email);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      {status === "authenticated" && <LivreCatalogueComplet />}
      {status === "unauthenticated" && <LivreCatalogue />}
    </>
  );
}
