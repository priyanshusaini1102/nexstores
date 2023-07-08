import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { createClient } from "next-sanity";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const inter = Inter({ subsets: ["latin"] });
const categories = ["All", "Website", "App"];

export default function Home({ products }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.type.includes(selectedCategory === "All" ? "" : selectedCategory)
    );
    setFilteredProducts(filtered);
  }, [selectedCategory, products]);

  return (
    <>
      <Banner />
      <div className="max-w-6xl p-4 border mx-auto bg-white rounded-lg shadow-violet-500 shadow-xl">
        <div className="mb-2">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-violet-500 bg-opacity-20 px-4 py-2 text-sm font-medium text-violet-500 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                {selectedCategory}
                <ChevronDownIcon
                  className="ml-2 -mr-1 h-5 w-5 text-violet-500 hover:text-violet-600"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-10 left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {categories.map((c) => (
                  <div key={c} className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => setSelectedCategory(c)}
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {c}
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="flex flex-wrap md:justify-around justify-center items-center space-x-2 space-y-4">
          {filteredProducts?.map((product) => (
            <Link key={product?.id} href={`./product/${product?.id}`}>
              <ProductCard key={product?.id} product={product} />
            </Link>
          ))}
        </div>
        {filteredProducts?.length>6 &&  <nav aria-label="Page navigation example" className="text-black mx-auto w-fit mt-3">
          <ul className="list-style-none flex text-black">
            <li>
              <a
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-700 hover:text-white"
                href="#"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"
                href="#"
              >
                1
              </a>
            </li>
            <li aria-current="page">
              <a
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"
                href="#"
              >
                2
              </a>
            </li>
            <li>
              <a
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"
                href="#"
              >
                3
              </a>
            </li>
            <li>
              <a
                className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-white"
                href="#"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>}
      </div>
    </>
  );
}

const client = createClient({
  projectId: "efawyltx",
  dataset: "production",
  apiVersion: "2021-10-14",
  useCdn: false,
});

export async function getServerSideProps() {
  const products = await client.fetch(`*[_type == "products"]{
    "id": _id,
    name,
    type,
    price,
    'images': images[].asset->url,
    "imageUrl": image.asset->url
  }`);

  return {
    props: {
      products,
    },
  };
}
