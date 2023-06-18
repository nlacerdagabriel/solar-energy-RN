import { createContext, useCallback, useEffect, useState } from "react";

import { filterData } from "../api";

import { apiResponseToChartData } from "../utils";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [dataType, setDataType] = useState("daily");
  const [apiData, setApiData] = useState([]);
  const [chartSize, setChartSize] = useState(900);
  const [expectedGenerationValue, setExpectedGenerationValue] = useState(0);

  const fetchData = async () => {
    try {
      const response = await filterData(dataType);
      setApiData(response.data);

      const expectedValue = response.data.data.expected.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );


      setExpectedGenerationValue(expectedValue);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    switch (dataType) {
      case "hourly":
        setChartSize(800);
        break;
      case "daily":
        setChartSize(1500);
        break;
      case "monthly":
        setChartSize(1000);
        break;
      case "yearly":
        setChartSize(350);
        break;

      default:
        break;
    }

    fetchData();
  }, [dataType]);

  let chartData = [];

  if (apiData && apiData.data) {
    chartData = apiResponseToChartData(apiData.data);
  }

  const updateDataType = (value) => {

    setDataType(value);
  };

  return (
    <AppContext.Provider
      value={{
        dataType,
        updateDataType,
        chartSize,
        apiData,
        chartData,
        expectedGenerationValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
