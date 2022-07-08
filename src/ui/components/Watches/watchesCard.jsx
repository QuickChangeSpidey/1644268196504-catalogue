import React from "react";
import Card from "@tds/core-card";
import Box from "@tds/core-box";
import Heading from "@tds/core-heading";
import Paragraph from "@tds/core-paragraph";
import PriceLockup from "@tds/core-price-lockup";
import { FootnoteLink } from "@tds/core-terms-and-conditions";
import HairlineDivider from "@tds/core-hairline-divider";
import FlexGrid from "@tds/core-flex-grid";
import Image from "@tds/core-image";

const WatchCard = (props) => {
  return (
    <Box inline between={3}>
      <Card>
        <FlexGrid>
          <FlexGrid.Row horizontalAlign="center">
            <FlexGrid.Col>
              <Box vertical={2}>
                <Image
                  src={"http://localhost:8081/images/watch.jpg"}
                  alt="apple watch showing time"
                  width={200}
                  height={200}
                />
              </Box>
            </FlexGrid.Col>
          </FlexGrid.Row>
        </FlexGrid>
        <Box inset={1}>
          <Heading level="h3">{props.brand}</Heading>
          <Heading level="h2">{props.name}</Heading>

          <Box vertical={2}>
            <Paragraph size="medium">
              Get a new smartphone for $0
              <br />
              on a 2-year plan.
            </Paragraph>
          </Box>

          <FlexGrid gutter={false}>
            <FlexGrid.Row horizontalAlign="start">
              <FlexGrid.Col>
                <Box>
                  <PriceLockup
                    size="small"
                    topText="Starting at"
                    price={props.price}
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

              <Box inset={2}>
                <Box inline between={2}>
                  <HairlineDivider vertical />
                  <Box vertical={7} />
                </Box>
              </Box>

              <FlexGrid.Col horizontalAlign={{ xs: "center", md: "left" }}>
                <Box>
                  <PriceLockup
                    size="small"
                    topText="Starting at"
                    price="25"
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

export default WatchCard;
