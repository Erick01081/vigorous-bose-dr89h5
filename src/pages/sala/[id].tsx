import { useRouter } from "next/router";
import GameRoom from "@/components/GameRoom";

export default function SalaPage() {
  const router = useRouter();
  const { id } = router.query;

  return <GameRoom roomId={id as string} />;
}
