import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

const Header = () => {
  const { user } = useMoralis();

  return (
    <div>
      <div>
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/66319691?v=4"
          />
        </div>

        <div>
          {/* Avatar */}
          <Avatar />

          {/* Welcome Message */}
          {/* username */}
          {/* Change username component */}
        </div>
      </div>
    </div>
  );
};

export default Header;
