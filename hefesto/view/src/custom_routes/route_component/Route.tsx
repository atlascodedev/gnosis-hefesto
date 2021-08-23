import { RouteComponentProps } from "@reach/router";
import React from "react";

interface Props extends RouteComponentProps {
  component: React.FC<unknown>;
}

const Route = ({ path, component: Component }: Props) => {
  return (path && <Component />) || null;
};

export default Route;
