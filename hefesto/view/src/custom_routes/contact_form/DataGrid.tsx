import React from "react";
import MaterialTableWithIcons from "src/components/Util/MaterialTableWithIcons/MaterialTableWithIcons";
import { customDbPaths } from "src/config/customDbPaths.config";
import { db } from "src/firebase";

interface ContactFormCollectionType {
  name: string;
  email: string;
  message: string;
  phone: string;
}

const getContactFormData = async () => {
  const firestore = db;
  const outArray: ContactFormCollectionType[] = [];

  const contactCollectionRequest = await firestore
    .collection(customDbPaths.mensagens)
    .get();

  contactCollectionRequest.forEach((values) => {
    outArray.push(values.data() as ContactFormCollectionType);
  });

  return outArray;
};

const ContactFormDataGrid = (props: unknown) => {
  const [state, setState] = React.useState<ContactFormCollectionType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    (async () => {
      try {
        const data = await getContactFormData();
        setState(data);
      } catch (error) {
        console.log(error);
      }
    })();

    setIsLoading(false);
  }, []);

  return (
    <MaterialTableWithIcons<ContactFormCollectionType>
      isLoading={isLoading}
      columns={[
        { title: "Nome", field: "name" },
        { title: "E-mail", field: "email" },
        { title: "Mensagem", field: "message" },
        { title: "Telefone", field: "phone" },
      ]}
      data={state}
      title="Formulário contato"
    />
  );
};

export default ContactFormDataGrid;
