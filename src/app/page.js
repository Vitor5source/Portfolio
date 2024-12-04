import TextSaver from "./components/textsaver/textsaver";
import Navbar from "./components/navbar/navbar";
import { NameProvider } from "./components/textsaver/context";
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <NameProvider>
      <TextSaver></TextSaver>
      </NameProvider>
       

    </>
  );
}
