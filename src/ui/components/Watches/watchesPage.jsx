import React from "react";
import Heading from "@tds/core-heading";
import Box from "@tds/core-box";
import ButtonLink from "@tds/core-button-link";
import Text from "@tds/core-text";
import WatchCard from "./watchesCard.jsx";
import { watch } from "../../../model/watch.jsx";

const WatchesPage = () => {
  const [watches, setWatches] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8081/watches")
      .then((res) => res.json())
      .then((response) => {
        let devices = [];
        response.data.forEach((item) => {
          let device = new watch(item.name, item.brand, item.price);
          devices.push(device);
        });
        setWatches(devices);
      });
  }, []);

  return (
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
};

export default WatchesPage;
