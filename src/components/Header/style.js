import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.View`
  align-items: center;
  padding: 20px 0;
  font-weight: bolder;

  margin-bottom: 36px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${theme.colors.white};
  font-weight: bold;
`;
