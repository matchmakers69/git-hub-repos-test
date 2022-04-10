import mockAxios from "axios";
import { AxiosPromise } from "axios";
import mockedReposData from "dataMocked/repos.json";
import { fetchReposBySearchQueries } from "../fetchRepos";

const mockedAxios = mockAxios as jest.Mocked<typeof mockAxios>;

describe("fetchReposBySearchQueries", () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  it("should return an object with items property", async () => {
    mockedAxios.get.mockImplementationOnce(
      () =>
        Promise.resolve({
          data: {
            total_count: 22721,
            incomplete_results: false,
            items: mockedReposData,
          },
        }) as unknown as AxiosPromise<void>
    );
    const res = await fetchReposBySearchQueries("james");
    expect(res).toEqual({
      total_count: 22721, incomplete_results: false, items: mockedReposData
    });
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });
});
