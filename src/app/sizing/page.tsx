import { SizingGuide } from "@/components/sections/SizingGuide";
import { Header } from "@/components/layout/Header";

export default function SizingPage() {
  return (
    <div className="min-h-screen bg-lacquer-canvas text-lacquer-ink flex flex-col">
      {/* Header */}
      <Header />

      <main className="grow">
        <SizingGuide />
      </main>

      {/* Shared Footer (Ideally a component, duplicated here for brevity in demo) */}
      <footer className="bg-lacquer-surface text-lacquer-canvas py-16 px-6 lg:px-12 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-jetbrains text-[10px] uppercase tracking-widest text-lacquer-canvas/40">
          <p>&copy; {new Date().getFullYear()} Press & Polish. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
