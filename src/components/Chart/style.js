import { styled } from "styled-components/native";

import { theme } from "../../theme";

export const Container = styled.View`
  background-color: ${theme.colors.tertiary};

  margin-bottom: 8px;
  padding-top: 40px;

  border-radius: 40px;

  position: relative;
`;

export const ChartContent = styled.ScrollView``;

export const Title = styled.Text`
  color: ${theme.colors.white};
  font-weight: bold;
  font-size: 18px;
  text-align: center;

  position: absolute;
  top: 30px;
  width: 100%;

  padding: 0 50px;
`;
