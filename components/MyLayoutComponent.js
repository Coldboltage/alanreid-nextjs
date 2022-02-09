import React from "react";
import * as styles from "../styles/PostLayout.module.css";
import Layout from "../components/Layout";

const MyLayoutComponent = ({ children }) => {
  return (
    <Layout>
      <div className={styles.markdown}>{children}</div>
    </Layout>
  );
};

export default MyLayoutComponent;
