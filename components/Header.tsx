import Image from "next/image";
import { useMoralis } from "react-moralis";

const Header = () => {
  const { user } = useMoralis();

  return (
    <div>
      <div>
        <div className="relative h-24 w-24 mx-auto">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/66319691?v=4"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
