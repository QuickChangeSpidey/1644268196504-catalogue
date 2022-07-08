import React from "react";
import Card from "@tds/core-card";
import Box from "@tds/core-box";
import Heading from "@tds/core-heading";
import Paragraph from "@tds/core-paragraph";
import PriceLockup from "@tds/core-price-lockup";
import { FootnoteLink } from "@tds/core-terms-and-conditions";
import HairlineDivider from "@tds/core-hairline-divider";
import FlexGrid from "@tds/core-flex-grid";
import Text from "@tds/core-text";

const WatchCard = (props) => {
  return (
    <Box inline between={3}>
      <Card>
        <Box inset={1}>
          <Heading level="h3">Apple</Heading>
          <Heading level="h2">
            Watch Series 6 (GPS + Cellular) - Aluminum
          </Heading>

          <Paragraph size="medium">
            Get a new smartphone for $0
            <br />
            on a 2-year plan.
          </Paragraph>

          <FlexGrid>
            <FlexGrid.Row>
              <FlexGrid.Col>
                <Box vertical={2}>
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
              <FlexGrid.Col>
                <Box vertical={2}>
                  <Box inline between={4}>
                    <HairlineDivider vertical />
                    <Box vertical={7} />
                  </Box>
                </Box>
              </FlexGrid.Col>
              <FlexGrid.Col>
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
