import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative bg-white border-b-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link legacyBehavior href="/">
              <a>
                <Image
                  className="hidden sm:block"
                  src="/logo.png"
                  alt="Recipes"
                  height={75}
                  width={75}
                />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={() => setOpenMenu(true)}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              {/* <!-- Heroicon name: outline/menu --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-10">
            <Link legacyBehavior href="/recipes">
              <a className="text-xl font-medium text-gray-500 hover:text-gray-900">
                Recipes
              </a>
            </Link>
            <Link legacyBehavior href="/blog">
              <a className="text-xl font-medium text-gray-500 hover:text-gray-900">
                Blog
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* <!--
        Mobile menu, show/hide based on mobile menu state.
      --> */}
      {openMenu && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    className="hidden sm:block"
                    src="/logo.png"
                    alt="Recipes"
                    height={50}
                    width={50}
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={() => setOpenMenu(false)}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    {/* <!-- Heroicon name: outline/x --> */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link legacyBehavior href="/about">
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      {/* <!-- Heroicon name: outline/chart-bar --> */}
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Recipes
                      </span>
                    </a>
                  </Link>
                  <Link legacyBehavior href="/blog">
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      {/* <!-- Heroicon name: outline/cursor-click --> */}
                      <span className="ml-3 text-base font-medium text-gray-900">
                        Blog
                      </span>
                    </a>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
