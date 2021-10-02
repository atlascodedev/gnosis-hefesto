import React from "react";
import MaterialTableWithIcons from "src/components/Util/MaterialTableWithIcons/MaterialTableWithIcons";
import { customDbPaths } from "src/config/customDbPaths.config";
import { db } from "src/firebase";

interface Props {}

interface NewsletterCollectionType {
  email: string;
  date: Date;
}

const fetchNewsletterFormData = async () => {
  const outArray: NewsletterCollectionType[] = [];

  const requestData = await db.collection(customDbPaths.newsletter).get();

  requestData.forEach((value) => {
    outArray.push(value.data() as NewsletterCollectionType);
  });

  return outArray;
};

const NewsletterDatagrid = (props: Props) => {
  const [data, setData] = React.useState<NewsletterCollectionType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    (async () => {
      const data = await fetchNewsletterFormData();

      setData(
        data.map((value, index) => {
          return { ...value, date: new Date(value.date) };
        })
      );
    })();

    setIsLoading(false);
  }, []);

  return (
    <MaterialTableWithIcons<NewsletterCollectionType>
      isLoading={isLoading}
      columns={[
        { title: "E-mail", field: "email" },
        {
          title: "Data e hora do recebimento",
          type: "datetime",
          field: "date",
          render: (rowData) =>
            isNaN(rowData.date.getTime())
              ? "Data indisponível"
              : `${new Date(rowData.date).toLocaleDateString(
                  "pt-BR"
                )}, ${new Date(rowData.date).toLocaleTimeString("pt-BR")}`,
        },
      ]}
      data={data}
      title={"Newsletter"}
    />
  );
};

export default NewsletterDatagrid;
