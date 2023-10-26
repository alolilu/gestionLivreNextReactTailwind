import React from "react";
import useBooks from "@/hooks/useBooks";

export const LivreCatalogue = () => {
  const { data: books, isLoading } = useBooks();

  const products = books.slice(0, 4).map((book) => ({
    id: book.id,
    name: book.name,
    imagesrc: book.imagesrc,
    state: `${book.state ? "Disponible" : "Indisponible"}`,
  }));

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Liste des livres en tete d'affiche
        </h2>
        <p className="text-1xl py-2">
          Pour découvrir tout nos livres et pouvoir les commander veuillez vous
          connecter
        </p>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-gray-200 rounded-md"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imagesrc}
                  className="max-h-96 w-full object-contain object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between p-3">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.state}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
