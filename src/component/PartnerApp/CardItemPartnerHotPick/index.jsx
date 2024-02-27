import React from "react";
import icon_star from "../../../assets/images/icon_star.svg";
import icon_bfs from "../../../assets/images/icon_bfs.svg";
import img_quote_snap_partner from "../../../assets/images/img_quote_snap_partner.png.png";
import {
  BlockStack,
  Box,
  Button,
  Card,
  InlineStack,
  Text,
} from "@shopify/polaris";

const CardItemPartnerApp = () => {
  return (
    <div style={{ maxWidth: '32%'}}>
    <Card padding={"0"}>
      <BlockStack gap={"300"}>
        <img src={img_quote_snap_partner} alt="" />
        <Box paddingInline={"600"} paddingBlockEnd={"500"}>
          <BlockStack gap={"300"}>
            <Text as="h3" variant="headingSm" fontWeight="bold">
              Request a Quote ‑ Hide Price
            </Text>
            <InlineStack gap={"050"} align="start">
              <img src={icon_star} alt="" />
              <Text as="span" fontWeight="medium">4.9</Text>
              <Text as="span" fontWeight="medium">(340)</Text>
            </InlineStack>
            <Box paddingInlineStart={"200"}>
              <Text as="p">
                For anyone who needs to hide price & request a quote form
              </Text>
            </Box>
            <div className="text-bfs">
              <img src={icon_bfs} alt="" />
              <span>Built for Shopify</span>
            </div>
            <InlineStack align="start">
              <Button>Get the now</Button>
            </InlineStack>
          </BlockStack>
        </Box>
      </BlockStack>
    </Card>
    </div>
  );
};

export default CardItemPartnerApp;
