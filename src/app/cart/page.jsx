import Cart from "./cart";

export const metadata = {
  title: "Shoe | Cart",
  description: "",
  alternates: {
    canonical: "abc",
    languages: {
      "en-US": "English",
    },
  },
};
const page = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default page;
