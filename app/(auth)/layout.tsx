import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <div className="bg-purple basis-2/4 hidden lg:block">
        Common left side
      </div>
      <div className="basis-3/4 flex justify-center items-center">{children}</div>
    </div>
  );
};

export default layout;
