import axios from "axios";
import { filterData } from "./index"; // Replace with the actual file path

jest.mock("axios"); // Mocking the axios module

const url =
  "https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io/plant/generation/test-2023?dataType=";

const token = "HeDKyixt_yMhR4TOvL4HNktaOxga-mgLkUcF";

describe("filterData", () => {
  it("fetches data from the API with the correct URL and headers", async () => {
    const mockResponse = { data: "Test data" };
    axios.get.mockResolvedValueOnce(mockResponse);

    const dataType = "daily";
    const expectedURL = url + dataType;

    const response = await filterData(dataType);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(expectedURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    expect(response).toEqual(mockResponse);
  });
});
