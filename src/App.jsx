import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

export default function App() {
  function getUserfavColor() {
    return "blue"; 
  }

  const greetingStyle = {
    color: getUserfavColor(),
    fontSize: "32px"
  };

  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Tu tienda online" />
    </>
  );
}
