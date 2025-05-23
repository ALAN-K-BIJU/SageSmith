import PhilosopherCard from '@/app/components/PhilosopherCard';
const philosophers = [
  { name: "Aristotle", era: "384–322 BCE", summary: "Virtue and reason guide a good life." },
  { name: "Immanuel Kant", era: "1724–1804", summary: "Duty and moral law reign supreme." },
  { name: "Nietzsche", era: "1844–1900", summary: "God is dead. Embrace your will to power." },
  { name: "Simone de Beauvoir", era: "1908–1986", summary: "Existence precedes essence, especially for women." }
];

export default function PhilosopherSelect() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold mb-6">Choose Your Philosophers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {philosophers.map(p => <PhilosopherCard key={p.name} {...p} />)}
      </div>
      <a href="/debate" className="mt-6 inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">Generate Debate</a>
    </div>
  );
}