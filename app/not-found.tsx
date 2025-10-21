import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h1 className="text-4xl font-bold text-foreground">404</h1>
      <p className="text-lg text-muted-foreground">Page not found</p>
      <Button asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  )
}
