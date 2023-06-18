import React, { useContext } from "react";
import { ChartContent, Container, Title } from "./style";
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryLabel,
} from "victory-native";

import { AppContext } from "../../contexts/AppContext";

import { theme } from "../../theme";

export default function Chart() {
  const { chartData, chartSize } = useContext(AppContext);

  return (
    <Container>
      <Title>Geração de Energia ao Longo do Tempo</Title>

      <ChartContent horizontal>
        <VictoryChart width={chartSize} domainPadding={40}>
          <VictoryAxis
            style={{
              axis: { stroke: theme.colors.white },
              tickLabels: { fill: theme.colors.white },
            }}
          />

          <VictoryAxis
            dependentAxis
            style={{
              axis: { stroke: theme.colors.white },
              tickLabels: { fill: theme.colors.white },
            }}
          />

          <VictoryBar
            cornerRadius={5}
            barWidth={20}
            style={{ data: { fill: theme.colors.white } }}
            labels={({ datum }) => datum.y}
            labelComponent={
              <VictoryLabel dy={-10} style={{ fill: theme.colors.white }} />
            }
            data={chartData}
          />
        </VictoryChart>
      </ChartContent>
    </Container>
  );
}
