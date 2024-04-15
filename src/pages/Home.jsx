import { useContext, useEffect, useState } from "react";
import Annoucement from "../components/Annoucement";
import Banner from "../components/Banner";
import Offer from "../share/Offer";
import Swiperss from "../share/Swiperss";
import CardHome from "../components/CardHome";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { AuthContex } from "../auth/AuthProvidev";
import "./styless.css";

const Home = () => {
  // annoucement data
  const [search, setsearch] = useState("");

  const { user } = useContext(AuthContex);

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["card", search, user?.email],
    queryFn: async () => {
      const data = await axios.get(
        `https://learn-server-six.vercel.app/card?tag=${search}`
      );
      return data.data;
    },
  });

  console.log("tan", data);
  const [dataes, setdataes] = useState([]);
  useEffect(() => {
    fetch("https://learn-server-six.vercel.app/annouce")
      .then((res) => res.json())
      .then((data) => setdataes(data));
  }, []);

  return (
    <div>
      <Banner setsearch={setsearch}></Banner>

      {/**home card  */}
      {isLoading ? (
        "loading"
      ) : (
        <CardHome dataes={data} refetch={refetch}></CardHome>
      )}
      <div>
        <h1 className="text-center text-2xl font-bold lg:text-4xl my-14">
          {" "}
          Demo Tags
        </h1>

        <Offer></Offer>
        {/* st */}
        <div
          className="hero  min-h-screen lg:min-h-[600px] bg-[#79d0e3] "
          style={{ backgroundImage: "url()" }}
        >
          <div className="hero-content lg:gap-72 flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/1JL0wvd/Facilitating-Effective-Collaboration-in-Virtual-Student-Teams.jpg"
              className="lg:max-w-sm w-auto h-auto rounded-lg lg:h-[400px] shadow-2xl  "
            />
            <div>
              <h1 className="text-4xl font-bold">Why you helps people!</h1>
              <p className="py-6">
                If you extend your hand to help others, one day that kindness
                will return to uplift you in unexpected ways. The cycle of
                goodwill perpetuates itself, weaving a tapestry of support and
                compassion that binds us all together.
              </p>
              <button className="btn btn-md ">Go post</button>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
      {/**annoucement  */}
      <p className="text-3xl text-center font-bold my-8 ">Announcements</p>
      <div className=" grid  justify-center items-center grid-cols-1 lg:grid-cols-3 gap-5 md:grid-cols-2  max-w-[1200px] mx-20 lg:mx-auto">
        {dataes?.map((item) => (
          <Annoucement key={item._id} item={item}></Annoucement>
        ))}
      </div>
      {/**end */}
      <p className="text-3xl text-center hidden lg:block font-bold my-5">
        Clients Reviews
      </p>
      <div className="max-w-[1200px] hidden lg:block relative mx-auto  ">
        <Swiperss></Swiperss>
      </div>
    </div>
  );
};

export default Home;
