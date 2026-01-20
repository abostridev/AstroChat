export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-950 text-white">
      <div className="w-full max-w-sm rounded-xl border border-neutral-800 p-6">
        <h1 className="mb-6 text-2xl font-semibold">
          Sign in to AstroChat
        </h1>

        <button className="w-full rounded-md bg-black py-2 text-white hover:bg-gray-900">
          Continue
        </button>
      </div>
    </main>
  )
}
