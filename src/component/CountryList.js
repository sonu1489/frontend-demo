import React from "react";

const CountryList = () => {
  return (
    <div>
      <h1 className="text-xl font-medium text-slate-800 mt-16 ">
        Country List
      </h1>
      <div class="flex flex-col md:flex-row mt-6 text-center bg-white rounded-md cursor-pointer shadow-md">
        <div className=" basis-1/2 space-y-4  py-4">
          <div className="xl:flex xl:justify-around  border-b-2 border-gray-200">
            <img
              className=" w-40 h-32 mb-2 mx-auto xl:mx-0  shadow-md rounded-md"
              src="/india.jpg"
              alt="india-flag"
            />
            <div>
              <h1 className="text-xl font-medium text-slate-600">
                Population: <span className="text-lg">139.39 cr</span>
              </h1>
              <h1 className="text-xl font-medium text-slate-600">
                Literacy-rate: <span className="text-lg">94.08%</span>
              </h1>
              <h1 className="text-xl font-medium text-slate-600">
                Neighbour country: <span className="text-lg"> 9</span>
              </h1>
            </div>
          </div>
          <h1 className="text-base text-center border-b-2 border-gray-200 md:text-start pl-6 font-medium text-slate-700 pb-2">
            Singapur
          </h1>
          <h1 className="text-base text-center md:text-start pl-6 font-medium text-slate-700">
            Bangladesh
          </h1>
        </div>
        <div className=" basis-1/2 space-y-4 border-t-4 md:border-t-0  md:border-l-4 border-green-500 py-4">
          <h1 className="text-base font-medium text-slate-700">Opened</h1>
          <h1 className="text-base font-medium text-slate-700">Unopened</h1>
          <h1 className="text-base font-medium text-slate-700">Spam</h1>
          <h1 className="text-base font-medium text-slate-700">Unsubscribe</h1>
          <h1 className="text-base font-medium text-slate-700">Bounced</h1>
          <h1 className="text-base font-medium text-slate-700">Top click</h1>
          <h1 className="text-base font-medium text-slate-700">Unique click</h1>
          <h1 className="text-base font-medium text-slate-700">Unique open</h1>
          <h1 className="text-base font-medium text-slate-700">Recipients</h1>
        </div>
        <div className=" basis-1/2 border-t-4 md:border-t-0 md:border-l-4 border-pink-500 py-4">
          <div className="flex-col px-auto ">
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
  );
};

export default CountryList;
