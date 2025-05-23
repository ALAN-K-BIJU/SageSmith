// app/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-6">
      <section className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-5xl font-serif font-bold text-slate-800 mb-4">SageSmith</h1>
        <p className="text-lg text-slate-600 mb-6">
          Explore timeless wisdom. Enter a philosophical dilemma and hear iconic thinkers debate.
        </p>
        <Link href="/ask">
          <Button size="lg" variant="default">Ask a Dilemma</Button>
        </Link>
      </section>

      <section className="max-w-5xl mx-auto">
        <Tabs defaultValue="featured">
          <TabsList className="mb-4 justify-center">
            <TabsTrigger value="featured">Featured Thinkers</TabsTrigger>
            <TabsTrigger value="timeline">Philosophy Timeline</TabsTrigger>
          </TabsList>

          <TabsContent value="featured">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Socrates", desc: "Know thyself." },
                { name: "Immanuel Kant", desc: "Categorical imperative pioneer." },
                { name: "Confucius", desc: "Harmony, duty, and virtue." },
                { name: "Nietzsche", desc: "Beyond good and evil." },
                { name: "Simone de Beauvoir", desc: "Feminist and existentialist philosopher." },
              ].map((philo) => (
                <Card key={philo.name} className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold text-slate-800">{philo.name}</h3>
                    <p className="text-slate-600 text-sm mt-1">{philo.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="timeline">
            <ScrollArea className="h-[400px] rounded-md border p-4 bg-white">
              <ul className="space-y-4">
                {[
                  { era: "Ancient", entries: ["Socrates", "Plato", "Aristotle"] },
                  { era: "Medieval", entries: ["Augustine", "Aquinas"] },
                  { era: "Modern", entries: ["Descartes", "Kant", "Hume"] },
                  { era: "Contemporary", entries: ["Nietzsche", "Simone de Beauvoir", "Rawls"] },
                ].map((period) => (
                  <li key={period.era}>
                    <h4 className="font-bold text-slate-700 mb-1">{period.era}</h4>
                    <p className="text-slate-600 text-sm">{period.entries.join(", ")}</p>
                  </li>
                ))}
              </ul>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
}
