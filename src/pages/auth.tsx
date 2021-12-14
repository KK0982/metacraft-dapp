import { useEffect } from "react";
import { Container } from "../components/layout/Container";
import { useSetAuthAddress } from "../state/auth/hooks";
import { Auth } from "../views/auth";
import { CreateAccount } from "../views/create-account";

export default function Index() {
  const setAddress = useSetAuthAddress();

  useEffect(() => {
    setAddress('0x46DBcbDe55be6cc4ce0C72C8d48BF61eb19D6be0');
  }, [setAddress]);

  return (
    <Container>
      <Auth />
    </Container>
  )
}
