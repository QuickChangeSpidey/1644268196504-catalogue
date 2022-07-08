import React from "react";
import Heading from "@tds/core-heading";
import Box from "@tds/core-box";
import ButtonLink from "@tds/core-button-link";
import Text from "@tds/core-text";
import IphoneCard from "./iPhoneCard.jsx";
import FlexGrid from "@tds/core-flex-grid";
import { phone } from "../../../model/phone.jsx";

const IphonePage = () => {
  const [iPhones, setIphones] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8081/iphones")
      .then((res) => res.json())
      .then((response) => {
        let devices = [];
        response.data.forEach((item) => {
          let device = new phone(item.name, item.brand, item.price);
          devices.push(device);
        });
        setIphones(devices);
      });
  }, []);

  return (
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
      <FlexGrid>
        <FlexGrid.Row distribute="between">
          <FlexGrid.Col>
            <IphoneCard />
          </FlexGrid.Col>
          <FlexGrid.Col>
            <IphoneCard />
          </FlexGrid.Col>
          <FlexGrid.Col>
            <IphoneCard />
          </FlexGrid.Col>
        </FlexGrid.Row>
      </FlexGrid>
    </>
  );
};

export default IphonePage;
