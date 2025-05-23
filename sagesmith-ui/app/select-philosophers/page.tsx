"use client"

import { useState } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const allPhilosophers = [
  { name: "Kant", era: "1724–1804", school: "Deontology" },
  { name: "Aristotle", era: "384–322 BCE", school: "Virtue Ethics" },
  { name: "Nietzsche", era: "1844–1900", school: "Existentialism" },
  { name: "Confucius", era: "551–479 BCE", school: "Confucianism" },
  { name: "Simone de Beauvoir", era: "1908–1986", school: "Existentialism" },
]

const schools = ["All", "Deontology", "Virtue Ethics", "Existentialism", "Confucianism"]

export default function SelectPhilosophersPage() {
  const [selected, setSelected] = useState<string[]>([])
  const [filter, setFilter] = useState("All")

  const filtered = filter === "All"
    ? allPhilosophers
    : allPhilosophers.filter((p) => p.school === filter)

  function toggleSelection(name: string) {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    )
  }

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Select Philosophers</h1>

      {/* Filter */}
      <div className="mb-6 flex gap-4">
        {schools.map((school) => (
          <Button
            key={school}
            variant={filter === school ? "default" : "outline"}
            onClick={() => setFilter(school)}
          >
            {school}
          </Button>
        ))}
      </div>

      {/* Philosopher Grid */}
      <div className="grid grid-cols-3 gap-6">
        {filtered.map(({ name }) => {
          const isSelected = selected.includes(name)
          return (
            <button
              key={name}
              onClick={() => toggleSelection(name)}
              className={`flex flex-col items-center gap-2 rounded-lg border p-4 transition
                ${isSelected ? "border-primary bg-primary/10" : "border-border hover:border-primary"}`}
              aria-pressed={isSelected}
            >
              <Avatar className="w-16 h-16">
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="font-semibold">{name}</span>
            </button>
          )
        })}
      </div>

      {/* Selected Summary */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold">Selected Philosophers:</h2>
        <ul className="list-disc list-inside mt-2">
          {selected.length === 0 ? (
            <li className="text-muted-foreground">None selected</li>
          ) : (
            selected.map((name) => <li key={name}>{name}</li>)
          )}
        </ul>
      </div>
    </main>
  )
}
