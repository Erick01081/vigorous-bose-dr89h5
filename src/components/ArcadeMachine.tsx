import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ArcadeMachine() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-500 font-mono">
      <div className="w-full max-w-4xl p-8 rounded-lg border-4 border-green-500 shadow-lg shadow-green-500/50 bg-black relative overflow-hidden">
        {/* Retro CRT effect */}
        <div
          className="absolute inset-0 bg-green-500 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1) 1px, transparent 1px, transparent 2px)",
          }}
        ></div>

        <h1 className="text-6xl font-bold text-center mb-8 animate-pulse">
          ECI TRON
        </h1>

        <div className="space-y-6 text-center">
          <Button
            asChild
            className="w-48 h-12 text-xl bg-green-500 hover:bg-green-600 text-black"
          >
            <Link href="/ver-salas">VER SALAS</Link>
          </Button>

          <Button
            asChild
            className="w-48 h-12 text-xl bg-green-500 hover:bg-green-600 text-black"
          >
            <Link href="/configuraciones">CONFIGURACIONES</Link>
          </Button>

          <Button
            asChild
            className="w-48 h-12 text-xl bg-green-500 hover:bg-green-600 text-black"
          >
            <Link href="/puntajes">PUNTAJES</Link>
          </Button>

          <Button
            asChild
            className="w-48 h-12 text-xl bg-green-500 hover:bg-green-600 text-black"
          >
            <Link href="/perfil">PERFIL</Link>
          </Button>
        </div>

        {/* Decorative elements to mimic an arcade machine */}
        <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-red-500 animate-pulse"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-blue-500 animate-pulse"></div>
      </div>
    </div>
  );
}
