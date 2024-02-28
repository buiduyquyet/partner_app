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
  InlineGrid,
} from "@shopify/polaris";
import CardItem from "../CardItem";
import { listAppDashboard } from "./helper";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

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
            <InlineGrid
              columns={{
                xs: 1,
                sm: 2,
                md: 2,
                lg: 2,
                xl: 2,
              }}
              gap={"200"}
            >
              {listAppDashboard.map((item) => (
                <CardItem
                  title={item.title}
                  img={item.img}
                  star={item.star}
                  numberReview={item.numberReview}
                  desc={item.desc}
                  isBfs={item.isBfs}
                  linkPartnerApp={null}
                />
              ))}
            </InlineGrid>
            <InlineStack align="end">
              <Button onClick={() => navigate("/partner-app")}>
                View more apps
              </Button>
            </InlineStack>
          </BlockStack>
        </Card>
      </Page>
    </div>
  );
};

export default Dashboard;
