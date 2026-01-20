export default function ChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r border-neutral-800 bg-neutral-950 p-4 text-white">
        Sidebar
      </aside>

      <section className="flex-1">
        {children}
      </section>
    </div>
  )
}
