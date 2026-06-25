import Link from "next/link"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="relative w-full max-w-sm text-center">
        <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="text-red-400" size={28} />
        </div>
        <h2 className="text-xl font-semibold text-white mb-2">Authentication error</h2>
        <p className="text-sm text-zinc-500 mb-8">
          Something went wrong during authentication. The link may have expired or already been used.
        </p>
        <div className="flex flex-col gap-3">
          <Button asChild className="bg-white text-zinc-950 hover:bg-zinc-200 rounded-xl h-10 text-sm font-medium">
            <Link href="/auth/login">Back to sign in</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="text-zinc-500 hover:text-zinc-300 rounded-xl h-10 text-sm"
          >
            <Link href="/auth/sign-up">Create a new account</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
