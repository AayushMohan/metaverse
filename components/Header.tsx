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
          <div className="relative h-48 w-48 lg: mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>

          {/* Welcome Message */}
          {/* username */}
          {/* Change username component */}
        </div>
      </div>
    </div>
  );
};

export default Header;
