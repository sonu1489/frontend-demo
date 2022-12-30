import React from "react";

const Status = () => {
  return (
    <>
      {" "}
      <h1 className="text-xl font-medium text-slate-800 bg-white mt-16 pl-4 py-6">
        Status & Numbers
      </h1>
      <div class="flex flex-col md:flex-row   text-start bg-white ">
        <div className=" basis-1/2 space-y-4  py-4 px-4 ">
          <div className="xl:flex xl:justify-around">
            <h1 className="text-base font-medium text-slate-700">
              Delivery Rate
            </h1>
            <div>
              <h1>90%</h1>
              <div className="border-2 md:w-70 xl:w-96   rounded-full">
                <div
                  className="bg-green-600 h-2.5  rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="xl:flex xl:justify-around">
            <h1 className="text-base  font-medium text-slate-700">
              Bounced Rate
            </h1>
            <div>
              <h1>10%</h1>
              <div className="border-2 md:w-70 xl:w-96 rounded-full">
                <div
                  className="bg-red-600 h-2.5 rounded-full"
                  style={{ width: "10%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="xl:flex xl:justify-around">
            <h1 className="text-base  font-medium text-slate-700">
              Unique Click
            </h1>
            <div>
              <h1>60%</h1>
              <div className="border-2 md:w-70 xl:w-96 rounded-full">
                <div
                  className="bg-orange-500 h-2.5 rounded-full"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="xl:flex xl:justify-around">
            <h1 className="text-base  font-medium text-slate-700">
              Unique Open
            </h1>
            <div>
              <h1>20%</h1>
              <div className="border-2 md:w-70 xl:w-96 rounded-full">
                <div
                  className="bg-orange-300 h-2.5 rounded-full"
                  style={{ width: "25%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className=" basis-1/2 space-y-4 border-t-4 md:border-t-0 md:border-l-4 border-green-500 py-4 px-4">
          <div className="xl:flex xl:justify-around">
            <h1 className="text-base  font-medium text-slate-700">
              Total Click
            </h1>
            <div>
              <h1 className="text-left xl:text-right">220</h1>
              <div className="border-2 md:w-70 xl:w-96 rounded-full">
                <div className="bg-blue-600 h-2.5 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="xl:flex xl:justify-around">
            <h1 className="text-base  font-medium text-slate-700">
              Total Open
            </h1>
            <div>
              <h1 className="text-left xl:text-right">3210</h1>
              <div className="border-2 md:w-70 xl:w-96 rounded-full">
                <div className="bg-blue-600 h-2.5 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="xl:flex xl:justify-around">
            <h1 className="text-base  font-medium text-slate-700">
              Unsubscrib
            </h1>
            <div>
              <h1 className="text-left xl:text-right">5</h1>
              <div className="border-2 md:w-70 xl:w-96 rounded-full">
                <div className="bg-blue-600 h-2.5 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="xl:flex xl:justify-around">
            <h1 className="text-base  font-medium text-slate-700">Forwards</h1>
            <div>
              <h1 className="text-left xl:text-right">10</h1>
              <div className="border-2 md:w-70 xl:w-96 rounded-full">
                <div className="bg-blue-600 h-2.5 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="xl:flex xl:justify-around">
            <h1 className="text-base  font-medium text-slate-700">
              Marked spam
            </h1>
            <div>
              <h1 className="text-left xl:text-right">0</h1>
              <div className="border-2 md:w-70 xl:w-96 rounded-full">
                <div className=" h-2.5 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="xl:flex xl:justify-around">
            <h1 className="text-base  font-medium text-slate-700">Unopened</h1>
            <div>
              <h1 className="text-left xl:text-right">200</h1>
              <div className="border-2 md:w-70 xl:w-96 rounded-full">
                <div className="bg-blue-600 h-2.5 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Status;
