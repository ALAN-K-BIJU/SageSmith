// app/ask/page.tsx
"use client"
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const philosophers = [
  "Socrates",
  "Aristotle",
  "Confucius",
  "Immanuel Kant",
  "Nietzsche",
  "Simone de Beauvoir",
];

export default function AskPage() {
  const [selected, setSelected] = useState<string[]>([]);

  const togglePhilosopher = (name: string) => {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
    );
  };

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-slate-800">
        Ask a Dilemma
      </h1>

      <Card className="mb-6">
        <CardContent className="p-6 space-y-4">
          <div>
            <Label htmlFor="dilemma" className="block mb-2">
              Describe your dilemma
            </Label>
            <Textarea id="dilemma" placeholder="e.g., Is it ethical to use AI in warfare?" className="min-h-[120px]" />
          </div>

          <div>
            <Label className="mb-2 block">Choose philosophers:</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {philosophers.map((philosopher) => (
                <label
                  key={philosopher}
                  className="flex items-center gap-2 p-2 border rounded-md cursor-pointer hover:bg-slate-100"
                >
                  <Checkbox
                    checked={selected.includes(philosopher)}
                    onCheckedChange={() => togglePhilosopher(philosopher)}
                  />
                  {philosopher}
                </label>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button size="lg">Simulate Dialogue</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
