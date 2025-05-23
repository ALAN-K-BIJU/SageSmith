// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'SageSmith',
  description: 'Simulated philosophical dialogues',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#fdfaf6] text-gray-900 font-sans">
        <div className="max-w-5xl mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}