import React from "react";
import MaterialTableWithIcons from "src/components/Util/MaterialTableWithIcons/MaterialTableWithIcons";
import { customDbPaths } from "src/config/customDbPaths.config";
import { db } from "src/firebase";

interface CourseFormCollectionType {
  name: string;
  email: string;
  phone: string;
  message: string;
  course: string;
  date: Date;
}

const getCourseFormData = async () => {
  const firestore = db;

  const outArray: CourseFormCollectionType[] = [];

  const collectionRequest = await firestore
    .collection(customDbPaths.manifestacaoInteresse)
    .get();

  collectionRequest.forEach((docRef) => {
    outArray.push(docRef.data() as CourseFormCollectionType);
  });

  return outArray;
};

interface Props {}

const CourseFormDataGrid = (props: Props) => {
  const [state, setState] = React.useState<CourseFormCollectionType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    (async () => {
      try {
        const courseData = await getCourseFormData();

        setState(
          courseData.map((value, index) => {
            return {
              ...value,
              date: new Date(value.date),
            };
          })
        );
      } catch (error) {
        console.log(error);
      }
    })();

    setIsLoading(false);
  }, []);

  return (
    <MaterialTableWithIcons<CourseFormCollectionType>
      title="Manifestações de interesse"
      options={{
        actionsColumnIndex: -1,
      }}
      isLoading={isLoading}
      columns={[
        { title: "Nome", field: "name" },
        { title: "E-mail", field: "email" },
        { title: "Telefone", field: "phone" },
        { title: "Mensagem", field: "message" },
        { title: "Curso de interesse", field: "course" },
        {
          title: "Data e hora do contato",
          field: "date",
          type: "datetime",
          render: (rowData) =>
            isNaN(rowData.date.getTime())
              ? "Data indisponível"
              : `${new Date(rowData.date).toLocaleDateString(
                  "pt-BR"
                )}, ${new Date(rowData.date).toLocaleTimeString("pt-BR")}`,
        },
      ]}
      data={state}
    />
  );
};

export default CourseFormDataGrid;
