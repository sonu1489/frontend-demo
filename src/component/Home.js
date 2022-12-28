import React, { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import { BiEnvelopeOpen } from "react-icons/bi";
const Home = () => {
  const [open, setOpen] = useState(false);

  const Menus = [
    { title: "Dashboard", path: "/" },
    { title: "Campign", path: "/" },
    { title: "Audience", path: "/" },
    { title: "Builder", path: "/" },
    { title: "Template", path: "/" },
  ];
  return (
    <>
      <div className="min-h-full overflow-hidden flex grow bg-slate-50">
        {/* sidebar */}
        <div className="sidebar print:hidden">
          <div className="main-sidebar">
            <div className="flex h-screen w-24 flex-col border-r-2 bg-white">
              <div class="flex pt-6 px-6 ">
                <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                    viewbox="0 0 32 32"
                  >
                    <path
                      fill="#1DA8BB"
                      d="M17.298 9.88a9.023 9.023 0 011.046 6.914 7.052 7.052 0 002.858-.983 7.096 7.096 0 10-7.39-12.116c-.902.55-1.63 1.27-2.182 2.091a9.024 9.024 0 015.668 4.095z"
                    />
                    <path
                      fill="#F09116"
                      d="M9.88 14.73a9.021 9.021 0 016.915-1.046 7.057 7.057 0 00-.984-2.858 7.096 7.096 0 00-12.116 7.39c.55.901 1.27 1.63 2.092 2.183a9.021 9.021 0 014.094-5.67z"
                    />
                    <path
                      fill="#9333EA"
                      d="M18.2 28.305a7.06 7.06 0 002.182-2.092 9.02 9.02 0 01-5.669-4.094 9.02 9.02 0 01-1.045-6.913 7.058 7.058 0 00-2.859.983 7.096 7.096 0 107.39 12.116z"
                    />
                    <path
                      fill="#12CEB7"
                      d="M22.12 17.315a9.023 9.023 0 01-6.914 1.046 7.05 7.05 0 00.983 2.858 7.096 7.096 0 0012.116-7.39 7.05 7.05 0 00-2.091-2.182 9.024 9.024 0 01-4.095 5.668z"
                    />
                  </svg>
                </a>
              </div>
              <div className="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6 px-6">
                <a
                  href="/"
                  class="flex h-11 w-11 items-center justify-center  rounded-lg outline-none transition-colors duration-200 hover:bg-blue-200 focus:bg-blue-200 active:bg-blue-300"
                >
                  <svg
                    class="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewbox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-opacity=".3"
                      d="M5 14.059c0-1.01 0-1.514.222-1.945.221-.43.632-.724 1.453-1.31l4.163-2.974c.56-.4.842-.601 1.162-.601.32 0 .601.2 1.162.601l4.163 2.974c.821.586 1.232.88 1.453 1.31.222.43.222.935.222 1.945V19c0 .943 0 1.414-.293 1.707C18.414 21 17.943 21 17 21H7c-.943 0-1.414 0-1.707-.293C5 20.414 5 19.943 5 19v-4.94Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M3 12.387c0 .267 0 .4.084.441.084.041.19-.04.4-.204l7.288-5.669c.59-.459.885-.688 1.228-.688.343 0 .638.23 1.228.688l7.288 5.669c.21.163.316.245.4.204.084-.04.084-.174.084-.441v-.409c0-.48 0-.72-.102-.928-.101-.208-.291-.355-.67-.65l-7-5.445c-.59-.459-.885-.688-1.228-.688-.343 0-.638.23-1.228.688l-7 5.445c-.379.295-.569.442-.67.65-.102.208-.102.448-.102.928v.409Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M11.5 15.5h1A1.5 1.5 0 0 1 14 17v3.5h-4V17a1.5 1.5 0 0 1 1.5-1.5Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M17.5 5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="/"
                  class="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-blue-200 focus:bg-blue-200 active:bg-blue-300 "
                >
                  <svg
                    class="h-7 w-7"
                    viewbox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 8H19V16C19 17.8856 19 18.8284 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5 18.8284 5 17.8856 5 16V8Z"
                      fill="currentColor"
                      fill-opacity="0.3"
                    ></path>
                    <path
                      d="M12 8L11.7608 5.84709C11.6123 4.51089 10.4672 3.5 9.12282 3.5V3.5C7.68381 3.5 6.5 4.66655 6.5 6.10555V6.10555C6.5 6.97673 6.93539 7.79026 7.66025 8.2735L9.5 9.5"
                      stroke="currentColor"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M12 8L12.2392 5.84709C12.3877 4.51089 13.5328 3.5 14.8772 3.5V3.5C16.3162 3.5 17.5 4.66655 17.5 6.10555V6.10555C17.5 6.97673 17.0646 7.79026 16.3397 8.2735L14.5 9.5"
                      stroke="currentColor"
                      stroke-linecap="round"
                    ></path>
                    <rect
                      x="4"
                      y="8"
                      width="16"
                      height="3"
                      rx="1"
                      fill="currentColor"
                    ></rect>
                    <path
                      d="M12 11V15"
                      stroke="currentColor"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </a>
                <a
                  href="pages-card-user-1.html"
                  class="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-blue-200 focus:bg-blue-200 active:bg-blue-300"
                >
                  <svg
                    class="h-7 w-7"
                    viewbox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.85714 3H4.14286C3.51167 3 3 3.51167 3 4.14286V9.85714C3 10.4883 3.51167 11 4.14286 11H9.85714C10.4883 11 11 10.4883 11 9.85714V4.14286C11 3.51167 10.4883 3 9.85714 3Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M9.85714 12.8999H4.14286C3.51167 12.8999 3 13.4116 3 14.0428V19.757C3 20.3882 3.51167 20.8999 4.14286 20.8999H9.85714C10.4883 20.8999 11 20.3882 11 19.757V14.0428C11 13.4116 10.4883 12.8999 9.85714 12.8999Z"
                      fill="currentColor"
                      fill-opacity="0.3"
                    ></path>
                    <path
                      d="M19.757 3H14.0428C13.4116 3 12.8999 3.51167 12.8999 4.14286V9.85714C12.8999 10.4883 13.4116 11 14.0428 11H19.757C20.3882 11 20.8999 10.4883 20.8999 9.85714V4.14286C20.8999 3.51167 20.3882 3 19.757 3Z"
                      fill="currentColor"
                      fill-opacity="0.3"
                    ></path>
                    <path
                      d="M19.757 12.8999H14.0428C13.4116 12.8999 12.8999 13.4116 12.8999 14.0428V19.757C12.8999 20.3882 13.4116 20.8999 14.0428 20.8999H19.757C20.3882 20.8999 20.8999 20.3882 20.8999 19.757V14.0428C20.8999 13.4116 20.3882 12.8999 19.757 12.8999Z"
                      fill="currentColor"
                      fill-opacity="0.3"
                    ></path>
                  </svg>
                </a>
                {/* <!-- Forms --> */}
                <a
                  href="form-input-text.html"
                  class="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-blue-200 focus:bg-blue-200 active:bg-blue-300"
                >
                  <svg
                    class="h-7 w-7"
                    viewbox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-opacity="0.25"
                      d="M21.0001 16.05V18.75C21.0001 20.1 20.1001 21 18.7501 21H6.6001C6.9691 21 7.3471 20.946 7.6981 20.829C7.7971 20.793 7.89609 20.757 7.99509 20.712C8.31009 20.586 8.61611 20.406 8.88611 20.172C8.96711 20.109 9.05711 20.028 9.13811 19.947L9.17409 19.911L15.2941 13.8H18.7501C20.1001 13.8 21.0001 14.7 21.0001 16.05Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-opacity="0.5"
                      d="M17.7324 11.361L15.2934 13.8L9.17334 19.9111C9.80333 19.2631 10.1993 18.372 10.1993 17.4V8.70601L12.6384 6.26701C13.5924 5.31301 14.8704 5.31301 15.8244 6.26701L17.7324 8.17501C18.6864 9.12901 18.6864 10.407 17.7324 11.361Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M7.95 3H5.25C3.9 3 3 3.9 3 5.25V17.4C3 17.643 3.02699 17.886 3.07199 18.12C3.09899 18.237 3.12599 18.354 3.16199 18.471C3.20699 18.606 3.252 18.741 3.306 18.867C3.315 18.876 3.31501 18.885 3.31501 18.885C3.32401 18.885 3.32401 18.885 3.31501 18.894C3.44101 19.146 3.585 19.389 3.756 19.614C3.855 19.731 3.95401 19.839 4.05301 19.947C4.15201 20.055 4.26 20.145 4.377 20.235L4.38601 20.244C4.61101 20.415 4.854 20.559 5.106 20.685C5.115 20.676 5.11501 20.676 5.11501 20.685C5.25001 20.748 5.385 20.793 5.529 20.838C5.646 20.874 5.76301 20.901 5.88001 20.928C6.11401 20.973 6.357 21 6.6 21C6.969 21 7.347 20.946 7.698 20.829C7.797 20.793 7.89599 20.757 7.99499 20.712C8.30999 20.586 8.61601 20.406 8.88601 20.172C8.96701 20.109 9.05701 20.028 9.13801 19.947L9.17399 19.911C9.80399 19.263 10.2 18.372 10.2 17.4V5.25C10.2 3.9 9.3 3 7.95 3ZM6.6 18.75C5.853 18.75 5.25 18.147 5.25 17.4C5.25 16.653 5.853 16.05 6.6 16.05C7.347 16.05 7.95 16.653 7.95 17.4C7.95 18.147 7.347 18.75 6.6 18.75Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>

                {/* <!-- Components --> */}
                <a
                  href="components-accordion.html"
                  class="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-blue-200 focus:bg-blue-200 active:bg-blue-300"
                >
                  <svg
                    class="h-7 w-7"
                    viewbox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-opacity="0.5"
                      d="M14.2498 16C14.2498 17.5487 13.576 18.9487 12.4998 19.9025C11.5723 20.7425 10.3473 21.25 8.99976 21.25C6.10351 21.25 3.74976 18.8962 3.74976 16C3.74976 13.585 5.39476 11.5375 7.61726 10.9337C8.22101 12.4562 9.51601 13.6287 11.1173 14.0662C11.5548 14.1887 12.0185 14.25 12.4998 14.25C12.981 14.25 13.4448 14.1887 13.8823 14.0662C14.1185 14.6612 14.2498 15.3175 14.2498 16Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M17.75 9.00012C17.75 9.68262 17.6187 10.3389 17.3825 10.9339C16.7787 12.4564 15.4837 13.6289 13.8825 14.0664C13.445 14.1889 12.9813 14.2501 12.5 14.2501C12.0187 14.2501 11.555 14.1889 11.1175 14.0664C9.51625 13.6289 8.22125 12.4564 7.6175 10.9339C7.38125 10.3389 7.25 9.68262 7.25 9.00012C7.25 6.10387 9.60375 3.75012 12.5 3.75012C15.3962 3.75012 17.75 6.10387 17.75 9.00012Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-opacity="0.3"
                      d="M21.25 16C21.25 18.8962 18.8962 21.25 16 21.25C14.6525 21.25 13.4275 20.7425 12.5 19.9025C13.5763 18.9487 14.25 17.5487 14.25 16C14.25 15.3175 14.1187 14.6612 13.8825 14.0662C15.4837 13.6287 16.7787 12.4562 17.3825 10.9337C19.605 11.5375 21.25 13.585 21.25 16Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>

                {/* <!-- Elements --> */}
                <a
                  href="elements-avatar.html"
                  class="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-blue-200 focus:bg-blue-200 active:bg-blue-300"
                >
                  <svg
                    class="h-7 w-7"
                    viewbox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3111 14.75H5.03356C3.36523 14.75 2.30189 12.9625 3.10856 11.4958L5.24439 7.60911L7.24273 3.96995C8.07689 2.45745 10.2586 2.45745 11.0927 3.96995L13.1002 7.60911L14.0627 9.35995L15.2361 11.4958C16.0427 12.9625 14.9794 14.75 13.3111 14.75Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fill-opacity="0.3"
                      d="M21.1667 15.2083C21.1667 18.4992 18.4992 21.1667 15.2083 21.1667C11.9175 21.1667 9.25 18.4992 9.25 15.2083C9.25 15.0525 9.25917 14.9058 9.26833 14.75H13.3108C14.9792 14.75 16.0425 12.9625 15.2358 11.4958L14.0625 9.36C14.4292 9.28666 14.8142 9.25 15.2083 9.25C18.4992 9.25 21.1667 11.9175 21.1667 15.2083Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* sidebar */}

        {/* nav */}
        <nav className="header w-0">
          <div className="header-container relative flex w-screen h-20  bg-white ">
            {/* check sidebar */}
            <div
              className={`${
                open ? "w-60" : "w-0"
              } hidden sm:block relative h-screen duration-500 bg-white `}
            >
              <RxHamburgerMenu
                className={`absolute text-3xl -mr-6 bg-white rounded-full cursor-pointer top-6 ${
                  !open ? "-right-9" : " right-9"
                }`}
                onClick={() => setOpen(!open)}
              />
              <ul className="pt-20">
                {Menus.map((menu, index) => (
                  <a href={menu.path} key={index}>
                    <li
                      className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer   
                      `}
                    >
                      <span className="text-2xl">{menu.src}</span>
                      <span
                        className={`${
                          !open && "hidden"
                        } origin-left duration-500 hover:block`}
                      >
                        {menu.title}
                      </span>
                    </li>
                  </a>
                ))}
              </ul>
            </div>
            {/* check sidebar */}
          </div>
        </nav>
        {/* nav */}

        <main className="main-content w-full px-[var(--margin-x)] pb-8 pt-24 px-24">
          <div className=" text-xl font-medium text-slate-800 flex  justify-between">
            <h1>Compign overview</h1>
            <h1>Last 30 days</h1>
          </div>
          <div class="flex flex-row mt-6 text-center bg-white rounded-md cursor-pointer shadow-md ">
            <div className=" basis-1/2 space-y-4 border-l-4 border-blue-500 py-4">
              <h1 className="text-base font-medium text-slate-700">
                Total Subscriber
              </h1>

              <div className=" flex justify-around text-base text-slate-700">
                <h1>71,111</h1>
                <h1>from 70,12</h1>
              </div>
              <div className=" border-t-2 border-gray-200">
                <h1 className="text-base font-medium pt-2">Details</h1>
              </div>
            </div>
            <div className=" basis-1/2 space-y-4 border-l-4 border-pink-500 py-4">
              <h1 className="text-base font-medium text-slate-700">
                Avg. open Rate
              </h1>

              <div className=" flex justify-around text-base text-slate-700">
                <h1>58.16 %</h1>
                <h1>from 56.12 %</h1>
              </div>
              <div className=" border-t-2 border-gray-200">
                <h1 className="text-base font-medium pt-2">Details</h1>
              </div>
            </div>
            <div className=" basis-1/2 space-y-4 py-4 border-l-4 border-orange-500  ">
              <h1 className="text-base font-medium text-slate-700">
                Avg. click Rate
              </h1>

              <div className=" flex justify-around text-base text-slate-700">
                <h1>24.67 %</h1>
                <h1>from 28.12 %</h1>
              </div>
              <div className=" border-t-2 border-gray-200">
                <h1 className="text-base font-medium pt-2">Details</h1>
              </div>
            </div>
          </div>

          {/* top campign */}
          <div className=" text-xl font-medium text-slate-800 flex mt-16  justify-between">
            <h1> Top Compaign overview</h1>
            <h1>28,Dec 2022</h1>
          </div>
          {/* top campign */}

          {/* table */}

          <div className="flex flex-col mt-6 ">
            <div className="overflow-x-auto">
              <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 shadow-md">
                    <thead className="bg-gray-200">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Compaigns
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Recipicent
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                        >
                          Sents
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          Open/Click
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Example 1{" "}
                          <span className=" ml-4 bg-gray-200 rounded-md px-2">
                            Draft
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          Jone Doe
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          3 week ago
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            className="text-green-700 hover:text-green-700"
                            href="/"
                          >
                            Edit
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            className="text-red-500 hover:text-red-700"
                            href="/"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Example 2
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          Jone Doe
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          5 week ago
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            className="text-green-300 hover:text-green-700"
                            href="/"
                          >
                            Edit
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            className="text-red-500 hover:text-red-700"
                            href="/"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Eaxmple 3{" "}
                          <span className=" ml-4 bg-red-200 rounded-md px-2">
                            Fail
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          Jone Doe
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          6 week ago
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            className="text-green-500 hover:text-green-700"
                            href="/"
                          >
                            Edit
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            className="text-red-500 hover:text-red-700"
                            href="/"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                          Example 4{" "}
                          <span className=" ml-4 bg-gray-200 rounded-md px-2">
                            Draft
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          Mary Poppins
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                          a week ago
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            className="text-green-300 hover:text-green-700"
                            href="/"
                          >
                            Edit
                          </a>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <a
                            className="text-red-500 hover:text-red-700"
                            href="/"
                          >
                            Delete
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* table */}

          {/* compaign report */}
          <div>
            <h1 className="text-xl font-medium text-slate-800 mt-16">
              Compaign Report for ( Compaign Name )
            </h1>

            <div class="flex flex-row mt-6 text-center bg-white rounded-md cursor-pointer shadow-md">
              <div className=" basis-1/2 space-y-4 border-l-4 border-blue-500 py-4">
                <h1 className="text-base font-medium text-slate-700">Open</h1>
                <h1>14,112</h1>
              </div>
              <div className=" basis-1/2 space-y-4 border-l-4 border-green-500 py-4">
                <h1 className="text-base font-medium text-slate-700">
                  Clicked
                </h1>
                <h1>11</h1>
              </div>
              <div className=" basis-1/2 space-y-4 border-l-4 border-pink-500 py-4">
                <h1 className="text-base font-medium text-slate-700">
                  Bounced
                </h1>
                <h1>150</h1>
              </div>
              <div className=" basis-1/2 space-y-4 border-l-4 border-orange-500 py-4">
                <h1 className="text-base font-medium text-slate-700">
                  Unsubscribed
                </h1>
                <h1>5</h1>
              </div>
            </div>
          </div>

          {/* compaign report */}

          {/* status */}
          <h1 className="text-xl font-medium text-slate-800 bg-white mt-16 pl-4 py-6">
            Status & Numbers
          </h1>
          <div class="flex flex-row  text-start bg-white ">
            <div className=" basis-1/2 space-y-4  py-4 pl-4 ">
              <div className="flex justify-around">
                <h1 className="text-base  font-medium text-slate-700">
                  Delivery Rate
                </h1>
                <div>
                  <h1>90%</h1>
                  <div className="border-2  w-96 rounded-full">
                    <div
                      className="bg-green-600 h-2.5 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-around">
                <h1 className="text-base  font-medium text-slate-700">
                  Bounced Rate
                </h1>
                <div>
                  <h1>10%</h1>
                  <div className="border-2  w-96 rounded-full">
                    <div
                      className="bg-red-600 h-2.5 rounded-full"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-around">
                <h1 className="text-base  font-medium text-slate-700">
                  Unique Click
                </h1>
                <div>
                  <h1>60%</h1>
                  <div className="border-2  w-96 rounded-full">
                    <div
                      className="bg-orange-500 h-2.5 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-around">
                <h1 className="text-base  font-medium text-slate-700">
                  Unique Open
                </h1>
                <div>
                  <h1>20%</h1>
                  <div className="border-2  w-96 rounded-full">
                    <div
                      className="bg-orange-300 h-2.5 rounded-full"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" basis-1/2 space-y-4 border-l-4 border-green-500 py-4 pl-4">
              <div className="flex justify-around">
                <h1 className="text-base  font-medium text-slate-700">
                  Total Click
                </h1>
                <div>
                  <h1 className="text-right">220</h1>
                  <div className="border-2  w-96 rounded-full">
                    <div className="bg-blue-600 h-2.5 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-around">
                <h1 className="text-base  font-medium text-slate-700">
                  Total Open
                </h1>
                <div>
                  <h1 className="text-right">3210</h1>
                  <div className="border-2  w-96 rounded-full">
                    <div className="bg-blue-600 h-2.5 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-around">
                <h1 className="text-base  font-medium text-slate-700">
                  Unsubscrib
                </h1>
                <div>
                  <h1 className="text-right">5</h1>
                  <div className="border-2  w-96 rounded-full">
                    <div className="bg-blue-600 h-2.5 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-around">
                <h1 className="text-base  font-medium text-slate-700">
                  Forwards
                </h1>
                <div>
                  <h1 className="text-right">10</h1>
                  <div className="border-2  w-96 rounded-full">
                    <div className="bg-blue-600 h-2.5 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-around">
                <h1 className="text-base  font-medium text-slate-700">
                  Marked spam
                </h1>
                <div>
                  <h1 className="text-right">0</h1>
                  <div className="border-2  w-96 rounded-full">
                    <div className=" h-2.5 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-around">
                <h1 className="text-base  font-medium text-slate-700">
                  Unopened
                </h1>
                <div>
                  <h1 className="text-right">200</h1>
                  <div className="border-2  w-96 rounded-full">
                    <div className="bg-blue-600 h-2.5 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* status */}

          {/* more details */}
          <div>
            <div>
              <h1 className="text-xl font-medium text-slate-800 mt-16 mb-6">
                More Deatils
              </h1>
            </div>

            <div class="col-span-9 lg:col-span-6">
              <div class="grid grid-cols-1 gap-3 sm:grid-cols-1 sm:gap-5 lg:grid-cols-1">
                <div class="rounded-lg bg-white shadow-md p-4  ">
                  <div class="flex justify-between space-x-1">
                    <p class="text-xl my-1 font-semibold text-slate-700">
                      Top Link
                    </p>
                    <div>
                      <BiEnvelopeOpen className="w-9 h-9 hover:bg-gray-300 rounded-full p-1" />
                    </div>
                  </div>
                </div>
                <div class="rounded-lg bg-white shadow-md p-4 dark:bg-navy-700">
                  <div class="flex justify-between">
                    <p class="text-xl my-1 font-semibold text-slate-700 ">
                      Unsubscribed
                    </p>
                    <div>
                      <BiEnvelopeOpen className="w-9 h-9 hover:bg-gray-300 rounded-full p-1" />
                    </div>
                  </div>
                </div>
                <div class="rounded-lg bg-white shadow-md p-4 ">
                  <div class="flex justify-between">
                    <p class="text-xl my-1 font-semibold text-slate-700 ">
                      Bounced Email
                    </p>
                    <div>
                      <BiEnvelopeOpen className="w-9 h-9 hover:bg-gray-300 rounded-full p-1" />
                    </div>
                  </div>
                </div>
                <div class="rounded-lg bg-white shadow-md p-4 ">
                  <div class="flex justify-between">
                    <p class="text-xl my-1 font-semibold text-slate-700 ">
                      Marked spam
                    </p>
                    <div>
                      <BiEnvelopeOpen className="w-9 h-9 hover:bg-gray-300 rounded-full p-1" />
                    </div>
                  </div>
                </div>

                <div class="rounded-lg bg-white shadow-md p-4 ">
                  <div class="flex justify-between">
                    <p class="text-xl my-1 font-semibold text-slate-700 ">
                      Unopened
                    </p>
                    <div>
                      <BiEnvelopeOpen className="w-9 h-9 hover:bg-gray-300 rounded-full p-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* more details */}

          {/* country-list */}
          <div>
            <h1 className="text-xl font-medium text-slate-800 mt-16 ">
              Country List
            </h1>
            <div class="flex flex-row mt-6 text-center bg-white rounded-md cursor-pointer shadow-md">
              <div className=" basis-1/2 space-y-4  py-4">
                <div className=" flex justify-around  border-b-2 border-gray-200">
                  <img
                    className="w-40 h-32 mb-2 shadow-md rounded-md"
                    src="/india.jpg"
                    alt="india-flag"
                  />
                  <div>
                    <h1 className="text-xl font-medium text-slate-600">
                      population: <span className="text-lg">139.39 cr</span>
                    </h1>
                    <h1 className="text-xl font-medium text-slate-600">
                      Literacy-rate: <span className="text-lg">94.08%</span>
                    </h1>
                    <h1 className="text-xl font-medium text-slate-600">
                      neighbour country: <span className="text-lg"> 9</span>
                    </h1>
                  </div>
                </div>
                <h1 className="text-base border-b-2 border-gray-200 text-start pl-6 font-medium text-slate-700 pb-2">
                  Singapur
                </h1>
                <h1 className="text-base text-start pl-6 font-medium text-slate-700">
                  Bangladesh
                </h1>
              </div>
              <div className=" basis-1/2 space-y-4 border-l-4 border-green-500 py-4">
                <h1 className="text-base font-medium text-slate-700">Opened</h1>
                <h1 className="text-base font-medium text-slate-700">
                  Unopened
                </h1>
                <h1 className="text-base font-medium text-slate-700">spam</h1>
                <h1 className="text-base font-medium text-slate-700">
                  Unsubscribe
                </h1>
                <h1 className="text-base font-medium text-slate-700">
                  Bounced
                </h1>
                <h1 className="text-base font-medium text-slate-700">
                  Top Click
                </h1>
                <h1 className="text-base font-medium text-slate-700">
                  Unique Click
                </h1>
                <h1 className="text-base font-medium text-slate-700">
                  Unique Open
                </h1>
                <h1 className="text-base font-medium text-slate-700">
                  Recipients
                </h1>
              </div>
              <div className=" basis-1/2 space-y-4 border-l-4 border-pink-500 py-4">
                <div>
                  <div>
                    <img src="/chart.jpg" className="w-96 h-32" alt="chart" />
                  </div>
                  <div>
                    <img src="/global.jpg" className="w-96 h-60 mt-2" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* country-list */}
        </main>
      </div>
    </>
  );
};

export default Home;
