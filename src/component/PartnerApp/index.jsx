import React from "react";
import {
  BlockStack,
  Box,
  Card,
  Grid,
  InlineStack,
  Page,
  Pagination,
  Text,
} from "@shopify/polaris";
import CardItemPartnerHotPick from "./CardItemPartnerHotPick";
import CardItem from "../Dashboard/CardItem";

const PartnerApp = () => {
  const listPartnerApp = {
    title: "",
    img: "",
    star: 4.9,
    numberReview: 340,
    desc: "",
    isBfs: true,
  };

  return (
    <div className="partner-app">
      <Page 
        title="Partner apps"
        backAction={() => console.log('back')}
      >
        <BlockStack gap={"500"}>
          <Card>
            <BlockStack gap={"150"}>
              <Text as="h3" variant="headingMd" fontWeight="bold">
                Hot pick by Trustify
              </Text>
              <InlineStack align="space-between">
                <CardItemPartnerHotPick />
                <CardItemPartnerHotPick />
                <CardItemPartnerHotPick />
              </InlineStack>
            </BlockStack>
          </Card>
          <Card>
            <BlockStack gap={"200"}>
              <Text as="h3" variant="headingMd" fontWeight="bold">
                Partner system
              </Text>
              <Grid>
                <Grid.Cell columnSpan={{ xs: 2, sm: 3, md: 6, lg: 6, xl: 6 }}>
                  <CardItem />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 2, sm: 3, md: 6, lg: 6, xl: 6 }}>
                  <CardItem />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 2, sm: 3, md: 6, lg: 6, xl: 6 }}>
                  <CardItem />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 2, sm: 3, md: 6, lg: 6, xl: 6 }}>
                  <CardItem />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 2, sm: 3, md: 6, lg: 6, xl: 6 }}>
                  <CardItem />
                </Grid.Cell>
                <Grid.Cell columnSpan={{ xs: 2, sm: 3, md: 6, lg: 6, xl: 6 }}>
                  <CardItem />
                </Grid.Cell>
              </Grid>
              <InlineStack align="end">
                <Pagination
                  label={"1 / 3"}
                  hasPrevious
                  onPrevious={() => {
                    console.log("Previous");
                  }}
                  hasNext
                  onNext={() => {
                    console.log("Next");
                  }}
                />
              </InlineStack>
            </BlockStack>
          </Card>
        </BlockStack>
      </Page>
    </div>
  );
};

export default PartnerApp;
