import { useContext } from "react";

import Filter from "../../components/Filter";
import CardResult from "../../components/CardResult";
import Chart from "../../components/Chart";
import { AppContext } from "../../contexts/AppContext";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import ProgressChart from "../../components/ProgressChart";
import { theme } from "../../theme";
import { Container, Headline, Title } from "./style";


export default function HomeScreen() {
  const { apiData } = useContext(AppContext);

  return (
    <Container>
      <Headline>
        <Title>Visão Geral</Title>
        <Filter />
      </Headline>

      <ProgressChart />
      <Chart />

      <CardResult
        icon={
          <MaterialCommunityIcons
            name="chemical-weapon"
            size={24}
            color={theme.colors.white}
          />
        }
        label={"Quantidade de carbono evitado:"}
        result={apiData?.data?.totals?.kwh + " kWh"}
      />
      <CardResult
        icon={<FontAwesome name="tree" size={24} color={theme.colors.white} />}
        label="Quantidade de árvores salvas:"
        result={apiData?.data?.totals?.trees + " árvores"}
      />
    </Container>
  );
};
