import React from "react";
import "./index.scss";
import {
  Page,
  Badge,
  Button,
  Text,
  Card,
  InlineStack,
  BlockStack,
  Box,
} from "@shopify/polaris";
import CardItem from "./CardItem";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Page title="Dashboard">
        <Card>
          <BlockStack gap={"150"}>
            <Text as="h3" variant="headingMd" fontWeight="bold">
              Partner apps
            </Text>
            <Text as="p">
              Join our partner system to optimize the quality of your business.
            </Text>
            <InlineStack gap={"100"}>
              <CardItem />
              <CardItem />
            </InlineStack>
            <InlineStack align="end">
              <Button>View more apps</Button>
            </InlineStack>
          </BlockStack>
        </Card>
      </Page>
    </div>
  );
};

export default Dashboard;
