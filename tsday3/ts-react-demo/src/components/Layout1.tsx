import { type PropsWithChildren, type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode | undefined;
}

function Layout({ children }: PropsWithChildren) {
  return (
    <div className="container" style={{ background: "red" }}>
      {children}
    </div>
  );
}

export { Layout };
