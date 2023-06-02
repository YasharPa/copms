import Button from "./Button";
import { GoHeart, GoInfo } from "react-icons/go";

function App() {
  return (
    <div>
      <div>
        <Button secondary>
          <GoHeart />
          Hey There!
        </Button>
      </div>
      <div>
        <Button success>
          <GoHeart />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoInfo />
          See Deal!
        </Button>
      </div>
      <div>
        <Button danger>Hide Ads!</Button>
      </div>
      <div>
        <Button primary outline rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
