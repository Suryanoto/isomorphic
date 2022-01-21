import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout, LocaleProvider } from "antd";
import authAction from "../../redux/auth/actions";
import appActions from "../../redux/app/actions";
import Sidebar from "../Sidebar/Sidebar";
import AppRouter from "./AppRouter";
import { AppLocale } from "../../dashApp";
import "./global.css";
// import Sidebar from "../../customApp/sidebar";

const { Content, Footer } = Layout;
const { logout } = authAction;
const { toggleAll } = appActions;
export class App extends Component {
  render() {
    const { url } = this.props.match;
    const { locale, selectedTheme, height } = this.props;
    const currentAppLocale = AppLocale[locale];
    const appHeight = window.innerHeight;
    return (
      //clean function
      <Layout style={{ height: appHeight }}>
        <Layout style={{ flexDirection: "row", overflowX: "hidden" }}>
          <Sidebar url={url} />
          <Content
            className="isomorphicContent"
            style={{
              width: "100%",
              padding: "70px 0 0",
              flexShrink: "0",
              background: "#f1f3f6",
              position: "relative",
            }}
          >
            <AppRouter url={url} />
          </Content>
          <Layout
            className="isoContentMainLayout"
            style={{
              height: height,
            }}
          />
        </Layout>
      </Layout>
    );
  }
}

export default connect(
  (state) => ({
    auth: state.Auth,
    locale: state.LanguageSwitcher.language.locale,
    selectedTheme: state.ThemeSwitcher.changeThemes.themeName,
    height: state.App.height,
  }),
  { logout, toggleAll }
)(App);
