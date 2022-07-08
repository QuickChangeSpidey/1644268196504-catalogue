import React from "react";
import Heading from "@tds/core-heading";
import Box from "@tds/core-box";
import ButtonLink from "@tds/core-button-link";
import Text from "@tds/core-text";

const IphonePage = () => (
  <>
    <Box inset={4}>
      <Heading level="h1" tag="h2">
        IPhones Demo
      </Heading>
      <Text>
        This is a Telus interview Iphone Demo built by Akshay Pandey on Jul 7,
        2022
      </Text>
    </Box>
    <Box horizontal={4} vertical={3}>
      <ButtonLink href="/">Back</ButtonLink>
    </Box>
  </>
);

export default IphonePage;
