import axios from "axios";


const axiosP = axios.create({
    baseURL: 'https://learn-server-six.vercel.app',
    
  });
const useAxiosP = () => {
  return axiosP;
}
export default useAxiosP