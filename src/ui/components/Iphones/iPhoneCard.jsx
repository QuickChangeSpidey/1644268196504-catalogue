import React from "react";
import Card from "@tds/core-card";
import Box from "@tds/core-box";
import Heading from "@tds/core-heading";
import PriceLockup from "@tds/core-price-lockup";
import { FootnoteLink } from "@tds/core-terms-and-conditions";
import FlexGrid from "@tds/core-flex-grid";
import Image from "@tds/core-image";
import PropTypes from "prop-types";

const IphoneCard = ({ name = "", brand = "", price = 0 }) => {
  return (
    <Box inline between={3}>
      <Card>
        <FlexGrid>
          <FlexGrid.Row horizontalAlign="center">
            <FlexGrid.Col>
              <Box vertical={2}>
                <Image
                  src={"http://localhost:8081/images/iphone.jpg"}
                  alt="apple watch showing time"
                  width={200}
                  height={200}
                />
              </Box>
            </FlexGrid.Col>
          </FlexGrid.Row>
        </FlexGrid>
        <Box inset={1}>
          <Heading level="h3">{brand}</Heading>
          <Heading level="h2">{name}</Heading>
          <FlexGrid gutter={false}>
            <FlexGrid.Row horizontalAlign="start">
              <FlexGrid.Col>
                <Box>
                  <PriceLockup
                    size="small"
                    topText="Starting at"
                    price={price}
                    signDirection="left"
                    rateText="/month"
                    bottomText="On a 2-year Easy Share Premium Plus Plan"
                    a11yText="25 dollars per month"
                    footnoteLinks={
                      <FootnoteLink
                        number={[7, 8]}
                        onClick={(number, ref) => {}}
                        copy="en"
                      />
                    }
                  />
                </Box>
              </FlexGrid.Col>
            </FlexGrid.Row>
          </FlexGrid>
        </Box>
      </Card>
    </Box>
  );
};

IphoneCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  brand: PropTypes.string,
};

export default IphoneCard;
