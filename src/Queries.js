import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getTodos = (urlParam) => {
  const f = urlParam;
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      return await axios.get(f).then((res) => res?.data);
    },
  });
};
