// app/dilemma/page.tsx
"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"

const philosophers = ["Kant", "Aristotle", "Nietzsche", "Confucius"]

export default function DilemmaPage() {
  const [dilemma, setDilemma] = useState("")
  const [responses, setResponses] = useState([
    {
      philosopher: "Kant",
      text: "One must act only according to that maxim whereby you can, at the same time, will that it should become a universal law.",
    },
    {
      philosopher: "Aristotle",
      text: "Ethics is about achieving eudaimonia — a flourishing life — through virtue.",
    },
    {
      philosopher: "Nietzsche",
      text: "Morality is a construct — question who benefits from its claims.",
    },
  ])
  const [mode, setMode] = useState("teen")
  const [dialectic, setDialectic] = useState(false)

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-[300px] border-r p-6 space-y-6 bg-muted/40">
        <div>
          <Label>Response Mode</Label>
          <Tabs defaultValue={mode} onValueChange={setMode} className="mt-2">
            <TabsList>
              <TabsTrigger value="teen">Like I’m 15</TabsTrigger>
              <TabsTrigger value="grad">Graduate-Level</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div>
          <Label>Dialectical Mode</Label>
          <div className="flex items-center mt-2 space-x-2">
            <Switch checked={dialectic} onCheckedChange={setDialectic} />
            <span>{dialectic ? "On" : "Off"}</span>
          </div>
        </div>
        <div>
          <Label>Select Philosophers</Label>
          <div className="space-y-2 mt-2">
            {philosophers.map((p) => (
              <div key={p} className="flex items-center space-x-2">
                <Switch id={p} defaultChecked />
                <Label htmlFor={p}>{p}</Label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 p-6 flex flex-col">
        <h1 className="text-2xl font-semibold mb-4">Ask a Dilemma</h1>

        <Textarea
          placeholder="e.g., Is it ethical to use AI in warfare?"
          value={dilemma}
          onChange={(e) => setDilemma(e.target.value)}
          className="mb-4"
        />

        <Button
          onClick={() => {
            console.log("Submit clicked")
          }}
          className="mb-6 self-start"
        >
          Submit
        </Button>

        <ScrollArea className="flex-1">
          <div className="space-y-4">
            {responses.map((res, i) => (
              <Card key={i} className="border-l-4 pl-2">
                <CardContent className="flex space-x-4 py-4">
                  <Avatar>
                    <AvatarFallback>{res.philosopher[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{res.philosopher}</p>
                    <p className="text-sm text-muted-foreground">{res.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
