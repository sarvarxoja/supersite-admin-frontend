import { Contacts } from "./ContactForm";
import { ContactForm } from "./Contacts";

export const ContactMain = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Contacts />
      <ContactForm />
    </div>
  );
};
