import { School } from "@material-ui/icons";
import { Link } from "@reach/router";
import React from "react";
import { customRoutes } from "src/config/routes.config";
import { SidebarItemLayout } from "src/layout_v2/styles";

interface Props {}

const CourseForm = (props: Props) => {
  return (
    <Link
      to={customRoutes.curso_interesse}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <SidebarItemLayout
        label="Manifestação de interesse"
        actionFn={() => console.log("hello")}
        icon={School}
      />
    </Link>
  );
};

export default CourseForm;
