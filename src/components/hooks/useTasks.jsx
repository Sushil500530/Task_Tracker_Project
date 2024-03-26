import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useTasks = () => {
    const getLink = useAxios();
    const {user,laoding} = useAuth();
    const { data: tasks=[], refetch } = useQuery({
        queryKey: ['tasks'],
        enabled: !laoding,
        queryFn: async () => {
          if(user){
            const response = await getLink.get(`/tasks?email=${user?.email}`);
            return response.data;
          }
        }
    })
    return [tasks,refetch]
};

export default useTasks;
