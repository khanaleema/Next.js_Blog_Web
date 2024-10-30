"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Typed from "typed.js";
import React, { useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import Image from "next/image"; // Import Image from next/image

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Frontend Developer",
        "Web Development",
        "Coding",
        "UI/UX Designer",
        "Machine Learning",
      ],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            Welcome to my <span className="font-semibold">blog</span>!{" "}
            <br className="hidden lg:block" />
            Join me on my journey exploring{" "}
            <span ref={el} className="font-semibold"></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Discover insightful articles, tutorials, and resources to enhance
            your web development skills. <br className="hidden lg:block" />
            Let&apos;s build amazing projects together!{" "}
            <br className="hidden lg:block" />
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            ></form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="Tailwind CSS components"
            className="w-full h-full max-w-md mx-auto"
            width={500} // Specify width
            height={500} // Specify height
          />
        </div>
      </section>

      <div className="flex flex-col">
        <section className="py-12 bg-gray-100 dark:bg-gray-900 flex-grow h-full">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                Discover Next.js
              </h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                Learn how Next.js can enhance your web development experience.
              </p>
            </div>
            <div className="flex flex-wrap justify-center">
              {/* Next.js Features */}
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    Server-Side Rendering
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-300">
                    Improve SEO and performance with automatic server-side
                    rendering.
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    Static Site Generation
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-300">
                    Generate static sites for better performance and
                    scalability.
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    API Routes
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-300">
                    Create API endpoints effortlessly with Next.js API routes.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link href="/blog">
                <Button className="mx-auto" variant="outline">
                  Read More About Next.js
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white dark:bg-gray-900 flex-grow ">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                What Our Clients Say
              </h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                Hear from our satisfied customers
              </p>
            </div>
            <div className="flex flex-wrap justify-center">
              {/* Testimonials */}
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                  <p className="text-gray-600 dark:text-gray-400">
                    &quot;This service has been a game-changer for our business.
                    Highly recommend!&quot;
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    John Doe
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300">CEO</p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                  <p className="text-gray-600 dark:text-gray-400">
                    &quot;Amazing experience! The team was professional and the
                    results were outstanding.&quot;
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Jane Smith
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300">
                    Marketing Director
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                  <p className="text-gray-600 dark:text-gray-400">
                    &quot;Top-notch service! I couldn&apos;t be happier with the outcome.&quot;
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Mike Johnson
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300">CTO</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
