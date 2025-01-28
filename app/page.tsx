import React from "react";
import dynamic from "next/dynamic";

const DynamicHome = dynamic(() => import("./temp1"), {
  loading: () => <p>Loading...</p>,
});
const Home = () => {
  return (
    <div>
      <DynamicHome />
    </div>
  );
};

export default Home;
