import { useQuery } from "@tanstack/react-query";
import useAxiosP from "./useAxiosP";
import axios from "axios";

const useRepports = () => {
  const axiosP = useAxiosP();
  const { data, refetch } = useQuery({
    queryKey: ["reports"],
    queryFn: async () => {
      const result = await axios.get("http://localhost:3005/users");
      return result.data;
    },
  });
  return {data,refetch};
};

export default useRepports;
