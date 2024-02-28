import { BlockStack, Box, Button, Card, InlineStack, Text } from "@shopify/polaris";
import React from "react";
import './index.scss'
import icon_star from "../../assets/images/icon_star.svg";
import icon_bfs from "../../assets/images/icon_bfs.svg";

const CardItem = ({
  title,
  img,
  star,
  numberReview,
  desc,
  isBfs,
  linkPartnerApp,
}) => {
  return (
    <div className={linkPartnerApp != null ? "cart-item" : ''}>
      <Card>
        <InlineStack gap={"200"} wrap={false}>
          <img src={img} alt="image" style={{ maxHeight: "75px" }} />
          <BlockStack gap={"100"}>
            <Text as="h3" variant="headingSm" fontWeight="bold">
              {title}
            </Text>
            <InlineStack gap={"050"}>
              <img src={icon_star} alt="" />
              <span>{star}</span>
              <span>({numberReview})</span>
            </InlineStack>
            <Text as="p">{desc}</Text>
            {isBfs && (
              <div className="text-bfs">
                <img src={icon_bfs} alt="" />
                <span>Built for Shopify</span>
              </div>
            )}
            {linkPartnerApp != null && (
              <Box paddingBlockStart={"100"}>
                <Button onClick={() => window.open(`${linkPartnerApp}`)}>
                  Get the now
                </Button>
              </Box>
            )}
          </BlockStack>
        </InlineStack>
      </Card>
    </div>
  );
};

export default CardItem;
