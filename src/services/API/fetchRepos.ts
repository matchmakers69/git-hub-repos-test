import { get } from "config/axios"
import { IRepo } from "types/repos";


export const fetchReposBySearchQueries = async (searchQueries: string): Promise<IRepo> => {
   const response = await get(`${process.env.REACT_APP_BASE_API_URL}/search/repositories?${searchQueries}`);
   return response?.data
}