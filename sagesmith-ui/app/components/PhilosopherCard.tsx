export default function PhilosopherCard({ name, era, summary }: any) {
  return (
    <div className="border p-4 rounded-xl bg-white shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{era}</p>
      <p className="text-gray-800 text-sm">{summary}</p>
    </div>
  );
}