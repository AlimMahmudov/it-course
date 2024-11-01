import { FC, ReactNode, useEffect, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useGetUserAuthQuery } from "@/redux/api/auth";

interface SessionProviderProps {
  children: ReactNode;
}

export const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
  const { status } = useGetUserAuthQuery();
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = useCallback(() => {
    switch (pathname) {
      case "/auth/signin":
      case "/auth/signup":
      case "/":
        if (status === "fulfilled") {
          router.push("/school");
        }
        break;
      case "/service/servicepage/advancedsettings":
      case "/service/servicepage/basicsettings":
      case "/service/servicepage/onlinebooking":
      case "/":
        if (status === "rejected") {
          router.push("/auth/signin");
        }
        break;
      default:
        break;
    }
  }, [pathname, router, status]);

  useEffect(() => {
    handleNavigation();
  }, [handleNavigation]);

  return <>{children}</>;
};
