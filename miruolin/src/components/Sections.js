import NavigationBar from "./NavigationBar";

const Sections = ({ children }) => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <main>{children}</main>
    </>
  );
};

export default Sections;