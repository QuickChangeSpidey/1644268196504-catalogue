import React from "react";
import Card from "@tds/core-card";
import Box from "@tds/core-box";
import ButtonLink from "@tds/core-button-link";
import Heading from "@tds/core-heading";
import Paragraph from "@tds/core-paragraph";

const WatchCard = () => {
  return (
    <Card>
      <Box between={4}>
        <Box between={3}>
          <Heading level="h2">Need a hand?</Heading>
          <Paragraph>
            Ready to order? Have a question? We'll get back to you, with volume
            discounts available to larger accounts.
          </Paragraph>
        </Box>
        <div>
          {/* We wrap ButtonLink in a div to prevent flex styling from applying to it */}
          <ButtonLink href="#">Request sales callback</ButtonLink>
        </div>
      </Box>
    </Card>
  );
};

export default WatchCard;
