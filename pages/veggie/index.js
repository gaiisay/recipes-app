import Image from "next/image";
import pizza from "../../public/pizza.jpg";

function Veggie() {
  return (
    <>
      <h1>This is the Veggie page</h1>
      <Image src={pizza} alt="pizza image" layout="responsive" width={500} placeholder="blur" />
    </>
  );
}

export default Veggie;
