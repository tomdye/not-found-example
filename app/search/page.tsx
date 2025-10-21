import { redirect } from "next/navigation"
import { notFound } from 'next/navigation';

interface SearchPageProps {
  searchParams: Promise<{ term?: string }>
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams
  const term = params.term

  if (term.trim() === "bang") {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h1 className="text-2xl font-semibold text-foreground">la la term is {term}</h1>
    </div>
  )
}
