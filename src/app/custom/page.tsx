import { CustomOrderForm } from "@/components/forms/CustomOrderForm";
import { Header } from "@/components/layout/Header";

export default function CustomOrderPage() {
  return (
    <div className="min-h-screen bg-lacquer-canvas text-lacquer-ink flex flex-col">
      {/* Header */}
      <Header />

      <main className="grow pt-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="font-fraunces text-4xl md:text-5xl tracking-tighter mb-4">Bespoke Request</h1>
            <p className="font-jakarta text-lacquer-ink/70">
              Commission a one-of-a-kind set designed exclusively for you. Fill out the details below and our artisans will review your vision.
            </p>
          </div>
        </div>
        
        <div className="bg-white border-y border-lacquer-ink/10 py-12">
          <CustomOrderForm />
        </div>
      </main>

      {/* Shared Footer */}
      <footer className="bg-lacquer-surface text-lacquer-canvas py-16 px-6 lg:px-12 mt-auto">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-jetbrains text-[10px] uppercase tracking-widest text-lacquer-canvas/40">
          <p>&copy; {new Date().getFullYear()} Press & Polish. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
