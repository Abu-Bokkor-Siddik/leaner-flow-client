import axios from "axios";


const axiosP = axios.create({
    baseURL: 'http://localhost:3005',
    
  });
const useAxiosP = () => {
  return axiosP;
}
export default useAxiosP