type Props = {
  username: string
}

function Welcome({ username }: Props) {
  return (
    <h1 className="text-3xl font-bold">
      Welcome {username} 🚀
    </h1>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <Welcome username="AstroUser" />
      <Status user={{ name: "Alex", online: true }} />

    </main>
  )
}

type User = {
  name: string
  online: boolean
}

function Status({ user }: { user: User }) {
  return (
    <p>
      {user.name} is {user.online ? "online 🟢" : "offline 🔴"}
    </p>
  )
}

