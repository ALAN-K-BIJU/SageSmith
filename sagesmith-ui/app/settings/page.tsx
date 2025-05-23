export default function SettingsPage() {
  return (
    <div className="py-10 space-y-4">
      <h2 className="text-3xl font-bold mb-4">Settings</h2>
      <label className="block font-medium">Response Complexity:</label>
      <select className="border px-4 py-2 rounded">
        <option>Explain like I'm 15</option>
        <option>Graduate-level depth</option>
      </select>
      <label className="block font-medium mt-4">Enable Dialectical Critique:</label>
      <input type="checkbox" className="ml-2" />
    </div>
  );
}
