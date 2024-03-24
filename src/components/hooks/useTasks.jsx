import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useTasks = () => {
    const getLink = useAxios();
    const { data: tasks, refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const response = await getLink.get('/tasks');
            return response.data;
        }
    })
    return [tasks,refetch]
};

export default useTasks;