import React from "react";
import Heading from "@tds/core-heading";
import Box from "@tds/core-box";
import ButtonLink from "@tds/core-button-link";
import Text from "@tds/core-text";
import WatchCard from "./watchesCard.jsx";

const WatchesPage = () => (
  <>
    <Box inset={4}>
      <Heading level="h1" tag="h2">
        Watch Demo
      </Heading>
      <Text>
        This is a Telus interview Watch Demo built by Akshay Pandey on Jul 7,
        2022
      </Text>
    </Box>
    <Box inset={4}>
      <ButtonLink href="/">Back</ButtonLink>
    </Box>
    <Box inset={4}>
      <WatchCard />
    </Box>
  </>
);

export default WatchesPage;
