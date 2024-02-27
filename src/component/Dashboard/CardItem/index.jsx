import { BlockStack, Card, InlineStack, Text } from "@shopify/polaris";
import React from "react";
import icon_star from "../../../assets/images/icon_star.svg";
import icon_bfs from "../../../assets/images/icon_bfs.svg";
import img_quote_snap from "../../../assets/images/img_quote_snap.png.png";

const CardItem = () => {
  return (
    <Card>
      <InlineStack gap={"200"} wrap={false}>
        <img src={img_quote_snap} alt="" style={{ maxHeight: "72px" }} />
        <BlockStack gap={"100"}>
          <Text as="h3" variant="headingSm" fontWeight="bold">
            Request a Quote ‑ Hide Price
          </Text>
          <InlineStack gap={"050"}>
            <img src={icon_star} alt="" />
            <span>4.9</span>
            <span>(340)</span>
          </InlineStack>
          <Text as="p">
            For anyone who needs to hide price & request a quote form
          </Text>
          <div className="text-bfs">
            <img src={icon_bfs} alt="" />
            <span>Built for Shopify</span>
          </div>
        </BlockStack>
      </InlineStack>
    </Card>
  );
};

export default CardItem;
