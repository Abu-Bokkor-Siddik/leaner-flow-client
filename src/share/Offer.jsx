import { useEffect, useState } from "react";

// https://learn-server-six.vercel.app/tag
const Offer = () => {
  const [datas, setdatas] = useState([]);
  useEffect(() => {
    fetch("https://learn-server-six.vercel.app/tag")
      .then((res) => res.json())
      .then((data) => setdatas(data));
  }, []);
  console.log(datas);
  return (
    <div className=" lg:w-[800px] mx-auto mb-10 ">
      <div className="  grid   grid-cols-2 lg:grid-cols-3 mx-8 lg:mx-auto gap-2 justify-center items-center  ">
        {datas?.map((item) => (
          <button key={item._id} className="btn  btn-md w-40 bg-[#79d0e3] ">
            #{item.tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Offer;
