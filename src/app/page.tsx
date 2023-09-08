import { getTodos } from "@/lib/todos"
export default async function Home() {
  const { todos } = await getTodos() 
  console.log(todos)
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
        Home
    </section>
  )
}
