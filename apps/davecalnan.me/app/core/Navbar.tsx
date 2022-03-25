import { HomeIcon } from "@heroicons/react/solid";

export const Navbar = () => {
  return (
    <nav className="flex justify-around space-x-6 fixed bottom-6 inset-x-6 p max-w-sm mx-auto bg-gray-200 shadow rounded-xl p-4">
      <NavbarIcon icon={HomeIcon} />
      <NavbarIcon icon={HomeIcon} />
      <NavbarIcon icon={HomeIcon} />
      <NavbarIcon icon={HomeIcon} />
    </nav>
  );
};

type NavabarIconProps = {
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
};

const NavbarIcon = ({ icon: Icon }: NavabarIconProps) => {
  return (
    <div className="bg-white w-16 shadow aspect-square flex justify-center items-center rounded-lg">
      <Icon className="h-12 w-12 text-black text-opacity-60" />
    </div>
  );
};
