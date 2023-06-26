import { AddInfo } from "../AddInfo/AddInfo";
import { CVPReview } from "../CVPreview/CVPreview";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <AddInfo />
      </main>
      <Footer />
    </>
  );
};
