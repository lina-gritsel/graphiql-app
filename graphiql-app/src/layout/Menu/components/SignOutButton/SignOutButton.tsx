import { Button } from "@chakra-ui/react"
import { useSignOut } from "react-firebase-hooks/auth"
import { auth } from "../../../../firebase";

const SignOutButton = () => {
  const [signOut] = useSignOut(auth);
  return <Button onClick={signOut}>Sign out</Button>
}

export default SignOutButton
