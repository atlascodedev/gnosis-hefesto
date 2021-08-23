import { RouteComponentProps, Router } from "@reach/router";
import React from "react";
import AdminRoute from "../AdminRoute";
import { DataCreationItem } from "@hefesto/types";
import AdonisGallery from "../../AdonisGallery";
import Toolbox from "../../Toolbox";
import ColorPicker from "../../ColorPicker";
import CategoryDialog from "../../CategoryDialog";
import EntryCreation from "../../../DataCreation/DraftEntry";
import EntryView from "../../../DataCreation/EntryView";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import AppLayout from "../../../../layout_v2/Main";
import { collections } from "../../../../config/collections.config";
import Route from "src/custom_routes/route_component/Route";
import { customRoutes } from "src/config/routes.config";
import ContactFormDataGrid from "src/custom_routes/contact_form/DataGrid";
import CourseFormDataGrid from "src/custom_routes/course_form/DataGrid";
import NewsletterDatagrid from "src/custom_routes/newsletter_form/Datagrid";

interface Props extends RouteComponentProps {}

const DashboardRoutes = ({ location, navigate, path, uri }: Props) => {
  const { isCreating, isUpdating } = useAppSelector(
    (state) => state.activeCollection
  );

  return (
    <div>
      <AdonisGallery />
      <Toolbox />
      <ColorPicker />
      <CategoryDialog />
      <EntryCreation />
      <EntryView />
      <AppLayout>
        <Router id="dashboardContent">
          {collections.map(
            (dataCreationItem: DataCreationItem, index: number) => {
              return (
                <AdminRoute
                  key={index}
                  dashboardItemID={dataCreationItem.itemID}
                  dashboardItemType={dataCreationItem.itemCategory}
                  path={dataCreationItem.routerPath}
                />
              );
            }
          )}
          <Route component={ContactFormDataGrid} path={"mensagens"} />
          <Route component={CourseFormDataGrid} path="manifestacao-interesse" />
          <Route component={NewsletterDatagrid} path="newsletter" />
        </Router>
      </AppLayout>
    </div>
  );
};

export default DashboardRoutes;
