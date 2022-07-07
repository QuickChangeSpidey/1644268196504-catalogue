import React from "react";
import Heading from "@tds/core-heading";
import FlexGrid from "@tds/core-flex-grid";
import Box from "@tds/core-box";
import ButtonLink from "@tds/core-button-link";
import Text from "@tds/core-text";

const WatchesPage = () => (
  <FlexGrid>
    <FlexGrid.Row xsReverse={true} smReverse={true} mdReverse={false}>
      <FlexGrid.Col xs={12} md={6}>
        <Box between={4}>
          <Heading level="h1" tag="h2">
            Telus Watch Demo
          </Heading>
          <Text>
            This is a Telus interview Watch Demo built by Akshay Pandey on Jul
            7, 2022
          </Text>
          <ButtonLink href="/">Back</ButtonLink>
        </Box>
      </FlexGrid.Col>
    </FlexGrid.Row>
  </FlexGrid>
);

export default WatchesPage;
