import React, { Component } from "react";
import { Row, Col, Input, Form, Card } from "antd";
import LayoutWrapper from "../components/utility/layoutWrapper.js";
import basicStyle from "../settings/basicStyle";
import IsoWidgetsWrapper from "../containers/Widgets/widgets-wrapper";
import FormItem from "antd/lib/form/FormItem";
import IntlMessages from "../components/utility/intlMessages.js";
import axios from "axios";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://bv-online-assessment.herokuapp.com/api/bookings")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { rowStyle, colStyle } = basicStyle;
    const { posts } = this.state;
    const layoutStyle = {
      display: "flex",
      position: "relative",
      marginLeft: 100,
    };

    const wisgetPageStyle = {
      width: "65vw",
      display: "flex",
      flexFlow: "row wrap",
      alignItems: "flex-start",
      overflow: "hidden",
    };

    const formStyle = {
      marginLeft: 400,
    };

    const formItemLayout = {
      labelCol: {
        xs: { span: 240 },
        sm: { span: 200 },
      },
      wrapperCol: {
        xs: { span: 240 },
        sm: { span: 200 },
      },
    };

    const inputTitleStyle = {
      textAlign: "center",
    };

    const inputStyle = {
      border: "solid",
      textTransform: "uppercase",
    };

    const cardStyle = {
      left: 0,
      width: "70vw",
      height: 300,
    };

    const pStyle = {
      lineHeight: 4,
    };

    const dateBox = {
      display: "flex",
    };

    const pBoxStyle = {
      flex: 1,
    };

    return (
      <LayoutWrapper style={layoutStyle}>
        <div style={wisgetPageStyle}>
          <Row style={rowStyle} gutter={0} justify="start">
            <Col lg={15} md={28} sm={24} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                {/* Form untuk textfield */}
                <Form style={formStyle}>
                  <FormItem {...formItemLayout}>
                    <h3 style={inputTitleStyle}>
                      {<IntlMessages id="index.widget.input.title" />}
                    </h3>
                    <Input
                      style={inputStyle}
                      placeholder="KJ1231ASD123"
                      id="error"
                    />
                  </FormItem>
                </Form>
              </IsoWidgetsWrapper>
            </Col>
          </Row>
          <Row style={rowStyle} gutter={0} justify="start">
            <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
              <IsoWidgetsWrapper gutterBottom={20}>
                {posts.length
                  ? posts.map((post) => (
                      <div key={post.booking_code}>{post.booking_code}</div>
                    ))
                  : null}
                {/* Card for content */}
                <Card
                  style={cardStyle}
                  icon="ion-android-chat"
                  iconcolor="#42A5F5"
                >
                  <p style={pStyle}>
                    {<IntlMessages id="card.widget.title" />}
                  </p>
                  <p style={pStyle}>{<IntlMessages id="card.widget.desc" />}</p>
                  <p style={pStyle}>{<IntlMessages id="card.widget.name" />}</p>
                  <div style={dateBox}>
                    <p style={pBoxStyle}>
                      {<IntlMessages id="card.widget.cidate" />}
                    </p>
                    <p style={pBoxStyle}>
                      {<IntlMessages id="card.widget.codate" />}
                    </p>
                  </div>
                  <p style={pStyle}>{<IntlMessages id="card.widget.time" />}</p>
                </Card>
              </IsoWidgetsWrapper>
            </Col>
          </Row>
        </div>
      </LayoutWrapper>
    );
  }
}
