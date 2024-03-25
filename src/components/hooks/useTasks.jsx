import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import useAuth from "./useAuth";

const useTasks = () => {
    const getLink = useAxios();
    const {user} = useAuth();
    const { data: tasks, refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const response = await getLink.get(`/tasks?email=${user?.email}`);
            return response.data;
        }
    })
    return [tasks,refetch]
};

export default useTasks;