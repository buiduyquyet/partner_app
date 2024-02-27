import React from "react";
import "./index.scss";
import { Page, Badge, Button, Text, Card, InlineStack, BlockStack } from "@shopify/polaris";
import img01 from '../../assets/images/Vector.svg'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Page>
          <Text alignment="start" as="h1" variant="headingLg" fontWeight="bold">
            Dashboard
          </Text>
        <Card>
          <Text as="h3" variant="headingMd" fontWeight="bold">Part</Text>
          <Text as="p">Join our partner system to optimize the quality of your business.</Text>
          <InlineStack>
            <Card>
              <InlineStack>
                <img src="" alt="" />
                <BlockStack>
                  <Text as="h3" variant="headingSm" fontWeight="bold">
                    Request a Quote ‑ Hide Price
                  </Text>
                  <div className="review-star">
                    <img src="" alt="" />
                    <span>4.9</span>
                    <span>(340)</span>
                  </div>
                  <Text as="p">For anyone who needs to hide price & request a quote form</Text>
                  <div className="text-bfs">
                    <img src="" alt="" />
                    <span>Built for Shopify</span>
                  </div>
                </BlockStack>
              </InlineStack>
            </Card>
          </InlineStack>
          <Button>View more apps</Button>
        </Card>
      </Page>
    </div>
  );
};

export default Dashboard;
