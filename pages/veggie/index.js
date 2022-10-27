import Image from "next/image";
import Link from "next/link";
import pizza from "../../public/pizza.jpg";

function Veggie() {
  return (
    <>
      <h1>This is the Veggie page</h1>
      <Image src={pizza} alt="pizza image" layout="responsive" placeholder="blur" />
      <Link href="/veggie/Veggie Pizza">Veggie Pizza</Link>
    </>
  );
}

export default Veggie;
