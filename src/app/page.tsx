import { About } from "@/layouts/about";
import { Footer } from "@/layouts/footer";
import { Header } from "@/layouts/header";
import { Main } from "@/layouts/main";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Footer />
    </>
  );
}
