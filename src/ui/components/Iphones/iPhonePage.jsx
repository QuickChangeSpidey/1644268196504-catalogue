import React from "react";
import Heading from "@tds/core-heading";
import Box from "@tds/core-box";
import ButtonLink from "@tds/core-button-link";
import Text from "@tds/core-text";
import IphoneCard from "./iPhoneCard.jsx";

const IphonePage = () => (
  <>
    <Box inset={4}>
      <Heading level="h1" tag="h2">
        Iphone Demo
      </Heading>
      <Text>
        This is a Telus interview Iphone Demo built by Akshay Pandey on Jul 7,
        2022
      </Text>
    </Box>
    <Box inset={4}>
      <ButtonLink href="/">Back</ButtonLink>
    </Box>
    <Box inset={4}>
      <IphoneCard />
    </Box>
  </>
);

export default IphonePage;
