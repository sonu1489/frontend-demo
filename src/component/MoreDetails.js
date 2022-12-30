import React from "react";
import { BiEnvelopeOpen } from "react-icons/bi";

const MoreDetails = () => {
  return (
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
              <p class="text-xl my-1 font-semibold text-slate-700">Top Link</p>
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
              <p class="text-xl my-1 font-semibold text-slate-700 ">Unopened</p>
              <div>
                <BiEnvelopeOpen className="w-9 h-9 hover:bg-gray-300 rounded-full p-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetails;
