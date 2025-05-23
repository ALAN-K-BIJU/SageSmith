export default function DialogueBubble({ speaker, text }: any) {
  return (
    <div className="bg-gray-100 p-4 rounded-xl shadow flex flex-col">
      <span className="font-bold text-blue-700">{speaker}</span>
      <p className="text-gray-800 mt-1">{text}</p>
    </div>
  );
}