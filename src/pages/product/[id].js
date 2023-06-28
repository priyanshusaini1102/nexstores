import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { createClient } from "next-sanity";
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url';
import Carousel from "@/components/Carousel";

const client = createClient({
    projectId: "efawyltx",
    dataset: "production",
    apiVersion: "2021-10-14",
    useCdn: false
  });

const builder = imageUrlBuilder(client)

function urlFor(source) {
    return builder.image(source)
}

export async function getServerSideProps({ params }) {
    try {
      const productId = params?.id;
      if (!productId) {
        throw new Error('Missing product ID parameter');
      }
  
      const product = await client.getDocument(productId);
  
      return {
        props: {
          product,
        },
      };
    } catch (error) {
      console.error('Error fetching product:', error);
      return {
        notFound: true,
      };
    }
  }
  

const Product3 = ({product}) => {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    return (
        <div className="md:flex justify-between bg-white max-w-5xl mx-auto my-3 rounded-lg shadow-lg shadow-violet-400 py-12 2xl:px-20 md:px-6 px-4">
            <div className=" mx-auto rounded-lg block relative">
                {/* <Image className='rounded-lg' src={urlFor(product.image).url()} fill alt='Product Image'  /> */}
                <Carousel images={product.images} />
            </div>
            {/* <div className="md:hidden relative mx-auto w-96 h-96"> */}
                {/* <Image className='' src={urlFor(product.image).url()} fill alt='Product Image'  /> */}
                {/* <Carousel images={product.images} /> */}
            {/* </div> */}
            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-sm leading-none text-gray-600">{product.type}</p>
                    <h1
                        className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
                    >
                        {product.name}
                    </h1>
                </div>
                <div>
                    <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">{product.description}</p>
                    <p className="text-base leading-4 mt-7 text-gray-600">Tech Stack used: Next.js</p>
                    <p className="text-base leading-4 mt-4 text-gray-600">Backend CMS: Sanity</p>
                    <p className="text-base leading-4 mt-4 text-gray-600">Deployment: Vercel</p>
                </div>
                
                <button
                    className="
						focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-green-800
                        shadow-inner
						w-full
						py-4
                        mt-5
						hover:bg-green-700
                        rounded-md
					"
                >
                    Contact on Whatsapp
                </button>
                <div>
                    <div className="border-b mt-2 py-4 border-gray-200">
                        <div onClick={() => setShow2(!show2)} className="flex justify-between items-center cursor-pointer">
                            <p className="text-base leading-4 text-gray-800">Contact us</p>
                            <button
                                className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                                aria-label="show or hide"
                            >
                                <svg className={"transform " + (show2 ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show2 ? "block" : "hidden")} id="sect">
                            If you have any questions on how to return your item to us, contact us.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product3;
