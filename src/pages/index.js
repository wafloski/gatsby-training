import React from "react";
import styled from "styled-components";
import MainTemplate from "templates/MainTemplate/MainTemplate";

const StyledHeading = styled.h1`
  font-family: ${({ theme }) => theme.font.family.poppins};
`;

const StyledParagraph = styled.p`
  font-family: ${({ theme }) => theme.font.family.poppins};
`;

const IndexPage = () => (
  <MainTemplate>
    <StyledHeading>Lorem ipsum dolor </StyledHeading>
    <StyledParagraph>Lorem ipsum dolor </StyledParagraph>
  </MainTemplate>
);

export default IndexPage;
