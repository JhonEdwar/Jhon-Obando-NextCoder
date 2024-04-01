// import Image from "next/image";
// import styles from './main.module.scss'
import Header from './components/ui/Header'
import Counter from './components/ui/Counter';
import TopProducts from './components/ui/TopProducts';


export const meadata={
  title:"test",
  description:"test 2"
}

export default function Home() {
  return (
    <>
    <Header/>
    <main className="pt-[6rem] pb-[3rem] bg-gray-900">
      <h1 className="text-4xl text-blue-600 text-bold text-white mx-[10%]">Encuentra los mejores juegos</h1>
      {/* <Counter/> */}
      <TopProducts/>
    </main>
    </>
  );
}
