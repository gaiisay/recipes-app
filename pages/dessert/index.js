import Image from "next/image";

function Dessert() {
  return (
    <>
      <h1>This is the Dessert page</h1>
      <Image
        src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
        alt="pizza image"
        width={2400}
        height={1499}
      />
    </>
  );
}

export default Dessert;
