import React, { useEffect, useState } from "react";
import {
  BlockStack,
  Box,
  Card,
  Grid,
  InlineGrid,
  InlineStack,
  Page,
  Pagination,
  Text,
} from "@shopify/polaris";
import CardItemPartnerHotPick from "./CardItemPartnerHotPick";
import CardItem from "../CardItem";
import { listPartnerApp } from "./helper";
import { useNavigate } from "react-router-dom";

const PartnerApp = () => {
  const navigate = useNavigate();
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 6,
  });

  const totalPage = Math.ceil(listPartnerApp.length / pagination.limit);
  const listPagination = listPartnerApp.filter((_, index) => {
    return (
      index >= (pagination.page - 1) * pagination.limit &&
      index < pagination.page * pagination.limit
    );
  });

  return (
    <div className="partner-app">
      <Page
        title="Partner apps"
        backAction={{
          onAction: () => navigate("/dashboard"),
        }}
      >
        <BlockStack gap={"500"}>
          <Card>
            <BlockStack gap={"150"}>
              <Text as="h3" variant="headingMd" fontWeight="bold">
                Hot pick by Trustify
              </Text>
              <InlineGrid
                columns={{
                  xs: 1,
                  sm: 2,
                  md: 3,
                  lg: 3,
                  xl: 3,
                }}
                gap={"200"}
              >
                <CardItemPartnerHotPick />
                <CardItemPartnerHotPick />
                <CardItemPartnerHotPick />
              </InlineGrid>
            </BlockStack>
          </Card>
          <Card>
            <BlockStack gap={"200"}>
              <Text as="h3" variant="headingMd" fontWeight="bold">
                Partner system
              </Text>
              <Grid>
                {listPagination.map((item, index) => (
                  <Grid.Cell
                    columnSpan={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}
                    key={index}
                  >
                    <CardItem
                      title={item.title}
                      img={item.img}
                      star={item.star}
                      numberReview={item.numberReview}
                      desc={item.desc}
                      isBfs={item.isBfs}
                      linkPartnerApp={"#"}
                    />
                  </Grid.Cell>
                ))}
              </Grid>
              <InlineStack align="end">
                <Pagination
                  label={pagination.page + "/" + totalPage}
                  hasPrevious={pagination.page > 1}
                  onPrevious={() => {
                    setPagination((prev) => ({
                      ...pagination,
                      page: prev.page - 1,
                    }));
                  }}
                  hasNext={
                    listPartnerApp.length > pagination.page * pagination.limit
                  }
                  onNext={() => {
                    setPagination((prev) => ({
                      ...pagination,
                      page: prev.page + 1,
                    }));
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
