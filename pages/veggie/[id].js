import { useRouter } from "next/router";

export default function VeggieDetail() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return <h1>Veggie Detail page for {id}</h1>;
}
