export type Company = {
  id: number;
  img: string;
  alt: string;
  title: string;
  street: string;
  town: string;
  contact: Contact;
};

type Contact = {
  email: string;
  phone: string;
};
