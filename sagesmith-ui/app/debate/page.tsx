import DialogueBubble from "@/app/components/DialogueBubble";
export default function DebatePage() {
  const dialogue = [
    { speaker: "Aristotle", text: "A virtuous society must nurture reason and character." },
    { speaker: "Kant", text: "Only actions from duty have true moral worth." },
    { speaker: "Nietzsche", text: "Morality is a fiction of the weak." },
    { speaker: "de Beauvoir", text: "Freedom is realized through others — especially in overcoming oppression." }
  ];
  return (
    <div className="py-10 space-y-6">
      <h2 className="text-3xl font-bold">Debate: "Is it ethical to use AI in warfare?"</h2>
      {dialogue.map((d, i) => <DialogueBubble key={i} {...d} />)}
    </div>
  );
}