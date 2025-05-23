"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"

const timelineData = [
  {
    name: "Confucius",
    era: "551–479 BCE",
    description: "Chinese philosopher focused on ethics, family, and social harmony.",
  },
  {
    name: "Aristotle",
    era: "384–322 BCE",
    description: "Greek philosopher, founder of formal logic and virtue ethics.",
  },
  {
    name: "Kant",
    era: "1724–1804",
    description: "German philosopher, father of modern deontological ethics.",
  },
  {
    name: "Nietzsche",
    era: "1844–1900",
    description: "Critic of morality and religion, proponent of existentialism.",
  },
  {
    name: "Simone de Beauvoir",
    era: "1908–1986",
    description: "Existentialist feminist, author of 'The Second Sex'.",
  },
]

export default function TimelinePage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Philosophical Timeline</h1>

      <ScrollArea className="h-[400px] border rounded-md p-4">
        <ol className="relative border-l border-muted ml-4">
          {timelineData.map(({ name, era, description }, i) => (
            <li key={i} className="mb-8 ml-6">
              <span className="absolute -left-3 top-1 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center font-bold">
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold">{name} <span className="text-sm text-muted-foreground">({era})</span></h3>
              <p className="text-sm mt-1">{description}</p>
            </li>
          ))}
        </ol>
      </ScrollArea>
    </main>
  )
}
