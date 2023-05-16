import { ReactNode } from "react";
import { BannerContainer } from "./styles";

interface BannerProps {
  children: ReactNode;
}

export function Banner({ children }: BannerProps) {
  return <BannerContainer>{children}</BannerContainer>;
}
