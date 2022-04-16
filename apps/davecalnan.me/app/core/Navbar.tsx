import { CogIcon, HomeIcon } from "@heroicons/react/solid";
import { Link, LinkProps } from "@remix-run/react";
import { useMemo } from "react";
import { useOptionalUser } from "~/utils";

const links: NavabarIconProps[] = [
  {
    to: "/",
    icon: HomeIcon,
  },
];

export const Navbar = () => {
  const user = useOptionalUser();
  const links = useMemo<NavabarIconProps[]>(() => {
    return [
      {
        to: "/",
        icon: HomeIcon,
      },
      ...(user ? [{ to: "/admin", icon: CogIcon }] : []),
    ];
  }, []);

  return (
    <nav className="p fixed inset-x-6 bottom-6 mx-auto flex max-w-sm justify-around space-x-6 rounded-xl bg-gray-200 p-4 shadow">
      {links.map((props) => (
        <NavbarIconLink key={props.to.toString()} {...props} />
      ))}
    </nav>
  );
};

type NavabarIconProps = Pick<LinkProps, "to"> & {
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
};

const NavbarIconLink = ({ to, icon: Icon }: NavabarIconProps) => {
  return (
    <Link
      to={to}
      className="flex aspect-square w-16 items-center justify-center rounded-lg bg-white shadow"
    >
      <Icon className="h-12 w-12 text-black text-opacity-60" />
    </Link>
  );
};
