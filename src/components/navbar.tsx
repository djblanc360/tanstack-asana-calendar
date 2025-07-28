import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/tanstack-react-start";
import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <div className="p-2 flex gap-2 text-lg">
        <Link
        to="/"
        activeProps={{
            className: 'font-bold',
        }}
        activeOptions={{ exact: true }}
        >
        Home
        </Link>{' '}
        <div className="ml-auto">
        <SignedIn>
            <UserButton />
        </SignedIn>
        <SignedOut>
            <SignInButton mode="modal" />
        </SignedOut>
        </div>
    </div>
  )
}