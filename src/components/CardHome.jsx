import { useState } from "react";
import { FaCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTan from "../hooks/useTan";
import { BiSolidDownvote, BiSolidUpvote } from "react-icons/bi";

const CardHome = ({ dataes }) => {
  const [datas, setdatas] = useState(dataes);
  const { data, refetch } = useTan();
  // text for

  const difference = () => {
    setdatas(data);
    refetch();
  };

  return (
    <div>
      <button
        onClick={difference}
        className="btn flex justify-center items-center mx-auto  lg:mx-auto my-5 btn-outline text-center "
      >
        Popular base
      </button>
      <div className="grid grid-cols-1 md:gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] justify-center items-center pl-8 md:pl-2 mx-12 lg:pl-8 lg:mx-auto">
        {datas?.map((item) => (
          <div
            key={item._id}
            className=" max-w-[350px] h-auto my-3 shadow-2xl bg-slate-100 rounded-lg p-3 "
          >
            <Link to={`/card/${item._id}`}>
              <div className="flex pl-5 gap-1 p-2 justify-between items-center">
                <div className="avatar my-2">
                  <div className="w-14 rounded-full">
                    <img src={item.image} />
                  </div>
                </div>

                <div>Time : {item.date}</div>
              </div>

              <h1 className="my-2 pl-5  text-lg">Title : {item.title}</h1>
              <h1 className="my-2 pl-5 ">Tag : {item.tag}</h1>

              <div className=" flex flex-row">
                {/** */}
                <div className="flex gap-6 mx-auto items-center">
                  <button className="btn btn-ghost rounded-full btn-sm">
                    <BiSolidUpvote />
                    {item.upvote}{" "}
                  </button>
                  <button className="btn btn-ghost rounded-full btn-sm">
                    <BiSolidDownvote />
                    {item?.downvote}{" "}
                  </button>

                  <button className="btn btn-ghost rounded-full btn-sm">
                    <FaCommentAlt />0
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardHome;
