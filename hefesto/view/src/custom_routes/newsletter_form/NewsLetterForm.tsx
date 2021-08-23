import { NewReleasesOutlined } from "@material-ui/icons";
import { Link } from "@reach/router";
import React from "react";
import { customRoutes } from "src/config/routes.config";
import { SidebarItemLayout } from "src/layout_v2/styles";

interface Props {}

const NewsLetterForm = (props: Props) => {
  return (
    <Link
      to={customRoutes.newsletter}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <SidebarItemLayout
        label="Newsletter"
        actionFn={() => console.log("newsletter")}
        icon={NewReleasesOutlined}
      />
    </Link>
  );
};

export default NewsLetterForm;
