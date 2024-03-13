import { useState } from "react";
import "./App.css";
import Bookmark from "./components/Bokkmark/Bookmark";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [name, setName] = useState([]);
  const [credit, setCredit] = useState(0);
  const [price, setPrice] = useState(0);

  const handleBookmark = (course) => {
    const checkCredit = credit + course.credit;
    if (checkCredit > 20) {
      toast.warn("only select 20 credit!");
      return;
    } else if (name.includes(course.name)) {
      toast.warn("sorry, already selected");
      return;
    }
    setName([...name, course.name]);
    setCredit(credit + course.credit);
    setPrice(price + course.price);
    toast.success("added to bookmark");
  };

  return (
    <main className="max-w-[1500px] md:w-11/12 mx-auto mt-0">
      <Header></Header>
      <section className="flex flex-col-reverse md:flex-row justify-center gap-6 p-5">
        <Courses handleBookmark={handleBookmark}></Courses>
        <Bookmark data={{ name, credit, price }}></Bookmark>
      </section>
      <ToastContainer></ToastContainer>
    </main>
  );
}

export default App;
