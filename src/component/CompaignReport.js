import React from "react";

const Data = [
  { title: "Open", body: "14,112", color: "border-blue-500" },
  { title: "Clicked", body: "11", color: "border-green-500" },
  { title: "Bounced", body: "150", color: "border-pink-500" },
  { title: "Unsubscribed", body: "5", color: "border-orange-500" },
];

const CompaignReport = () => {
  return (
    <div>
      <h1 className="text-xl font-medium text-slate-800 mt-16">
        Compaign Report for ( Compaign Name )
      </h1>

      <div class="flex flex-col  md:flex-row  mt-6 text-center bg-white rounded-md cursor-pointer shadow-md">
        {Data.map((item, index) => {
          return (
            <div
              key={index}
              className={`basis-1/2  space-y-4 border-t-4 md:border-l-4 ${item.color} py-4`}
            >
              <h1 className="text-base font-medium text-slate-700">
                {item.title}
              </h1>
              <h1>{item.body}</h1>
            </div>
          );
        })}
        {/* <div className=" basis-1/2 space-y-4 border-l-4 border-blue-500 py-4">
          <h1 className="text-base font-medium text-slate-700">Open</h1>
          <h1>14,112</h1>
        </div>
        <div className=" basis-1/2 space-y-4 border-l-4 border-green-500 py-4">
          <h1 className="text-base font-medium text-slate-700">Clicked</h1>
          <h1>11</h1>
        </div>
        <div className=" basis-1/2 space-y-4 border-l-4 border-pink-500 py-4">
          <h1 className="text-base font-medium text-slate-700">Bounced</h1>
          <h1>150</h1>
        </div>
        <div className=" basis-1/2 space-y-4 border-l-4 border-orange-500 py-4">
          <h1 className="text-base font-medium text-slate-700">Unsubscribed</h1>
          <h1>5</h1>
        </div> */}
      </div>
    </div>
  );
};

export default CompaignReport;
