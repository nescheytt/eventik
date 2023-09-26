import { ApolloError } from "@apollo/client"
import { ErrorBoundary } from "react-error-boundary"

export function ErrorBoundaryProvider({
  children,
  error,
}: {
  children: React.ReactNode
  error: ApolloError | any
}) {
  return (
    <ErrorBoundary
      fallback={
        <div className="flex items-center justify-center py-24">
          <p className="text-2xl font-semibold">Lo siento, algo salió mal</p>

          {error?.graphQLErrors.map(
            ({ message }: { message: string }, i: number) => (
              <span key={i}>{message}</span>
            )
          )}
        </div>
      }
    >
      {children}
    </ErrorBoundary>
  )
}
