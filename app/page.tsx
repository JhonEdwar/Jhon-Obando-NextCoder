// import Image from "next/image";
// import styles from './main.module.scss'
import Header from './components/ui/Header'
import Counter from './components/ui/Counter';

export default function Home() {
  return (
    <>
    <Header/>
    <main className="container my-auto mx-5">
      <h1 className="text-4xl text-blue-600 text-bold my-4">Next js</h1>
      <hr />
      <p className="text-base mt-4">Bienvenidos a coder house</p>
      <Counter/>
    </main>
    </>
  );
}
