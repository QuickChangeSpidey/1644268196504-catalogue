import React from "react";
import Heading from "@tds/core-heading";
import { Switch, Link, WillMatch, Redirect, Route } from "react-router-dom";
import FlexGrid from "@tds/core-flex-grid";
import Box from "@tds/core-box";
import ButtonLink from "@tds/core-button-link";
import Text from "@tds/core-text";

const Home = () => (
  <FlexGrid>
    <FlexGrid.Row xsReverse={true} smReverse={true} mdReverse={false}>
      <FlexGrid.Col xs={12} md={6}>
        <Box between={3}>
          <Heading level="h1" tag="h2">
            Telus App Demo
          </Heading>
          <Text>
            This is a Telus interview app Demo built by Akshay Pandey on Jul 7,
            2022
          </Text>
          <ButtonLink href="/watches">Watches</ButtonLink>
          <ButtonLink href="/iPhones">iPhones</ButtonLink>
        </Box>
      </FlexGrid.Col>
    </FlexGrid.Row>
  </FlexGrid>
);

export default Home;
