
import Login from "./components/login/login";
import { SessionWrapper } from "./components/login/sessionwrapper";


export default async function Home() {
  return (
    <SessionWrapper>
      <Login />
    </SessionWrapper>
  );
}
