import { Button } from "@material-ui/core";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Hello </h1>

      <Link href="/login">
        <Button fullWidth variant="contained" color="primary">
          Login
        </Button>
      </Link>
    </div>
  );
};

export default Home;
