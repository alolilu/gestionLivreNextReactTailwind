"use client";
import useBooks from "@/hooks/useBooks";
import { Fragment, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";

export default function Livre({ params }) {
  const { idbook } = params;
  const router = useRouter();
  const { data: books, isLoading } = useBooks();

  if (isLoading || !books) {
    return <p>Chargement en cours...</p>;
  }
  if (!Array.isArray(books)) {
    return <p>Erreur de données de livres</p>;
  }

  const livreTrouve = books.find((book) => book.id == idbook);

  function goToDashboard() {
    router.push("/");
  }

  // return (
  //   <div>
  //     <h1>{livreTrouve.name}</h1>
  //     <p>Auteur : {livreTrouve.author}</p>
  //     <p>Description : {livreTrouve.description}</p>
  //   </div>
  // );
  return (
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <button
            type="button"
            className="absolute right-4 top-4 text-gray-900 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
          >
            <span className="sr-only">Close</span>
            <XMarkIcon
              className="h-6 w-6"
              aria-hidden="true"
              onClick={goToDashboard}
            />
          </button>

          <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              <img
                src={livreTrouve.imagesrc}
                className="object-cover object-center"
              />
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                {livreTrouve.name}
              </h2>
              <p className="text-1xl m-5 font-bold text-gray-600 sm:pr-12">
                {livreTrouve.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
