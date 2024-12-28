import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  
  import * as React from 'react';
  
  export const EmailTemplate = ({
    firstName,
    formattedDate,
    loginDevice,
    loginLocation,
  }) => (
    <Html>
      <Head />
      <Preview>Yelp recent login</Preview>
      <Body style={main}>
        <Container>
          <Section style={content}>
            <Row>
              <Img
                style={image}
                width={620}
                src="https://www.goanywhere.com/sites/default/files/goanywhere/77ef9d0c-0490-11ea-bdef-008cfa043684.jpg"
                alt="Header"
              />
            </Row>
  
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hi {firstName},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Someone share file with you.
                </Heading>
  
                <Text style={paragraph}>
                  <b>File Name: </b>
                  {formattedDate}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>File Size: </b>
                  {loginDevice}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>File Type: </b>
                  {loginLocation}
                </Text>
                <Text
                  style={{
                    color: "rgb(0,0,0, 0.5)",
                    fontSize: 14,
                    marginTop: -5,
                  }}
                >
                  *Access and Download file
                </Text>
  
                <Text style={paragraph}>
                  Now you can also share file with File Sharing App
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  Click below button to access your file
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "0" }}>
              <Column style={containerButton} colSpan={2}>
                <Button style={button}>Click here to Download</Button>
              </Column>
            </Row>
          </Section>
  
          <Section style={containerImageFooter}>
            <Img
              style={image}
              width={620}
              src="https://www.ntaskmanager.com/wp-content/uploads/2020/08/best-file-sharing-apps.png"
              alt="Footer"
            />
          </Section>
  
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2022 | Yelp Inc., 350 Mission Street, San Francisco, CA 94105,
            U.S.A. | www.yelp.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
  
  const main = {
    backgroundColor: "#fff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const paragraph = {
    fontSize: 16,
  };
  
  const logo = {
    padding: "30px 20px",
  };
  
  const containerButton = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };
  
  const button = {
    backgroundColor: "#e00707",
    borderRadius: 3,
    color: "#FFF",
    fontWeight: "bold",
    border: "1px solid rgb(0,0,0, 0.1)",
    cursor: "pointer",
    padding: "12px 30px",
  };
  
  const content = {
    border: "1px solid rgb(0,0,0, 0.1)",
    borderRadius: "3px",
    overflow: "hidden",
  };
  
  const image = {
    maxWidth: "100%",
  };
  
  const boxInfos = {
    padding: "20px",
  };
  
  const containerImageFooter = {
    padding: "45px 0 0 0",
  };
  