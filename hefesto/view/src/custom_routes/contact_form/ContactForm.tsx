import { ContactMail } from "@material-ui/icons";
import React from "react";
import { SidebarItemLayout } from "src/layout_v2/styles";
import { Link, useLocation } from "@reach/router";
import {
  basePath,
  customRoutes,
  dashboardPath,
} from "src/config/routes.config";

interface Props {}

const ContactForm = (props: Props) => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <Link
      style={{ textDecoration: "none", color: "inherit" }}
      to={customRoutes.mensagens}
    >
      <SidebarItemLayout
        icon={ContactMail}
        label="Mensagens"
        actionFn={() => console.log("Hello contact form")}
      />
    </Link>
  );
};

export default ContactForm;
