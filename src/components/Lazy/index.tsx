import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";

interface LazyProps {
  loader: () => Promise<{ default: FunctionComponent<unknown> }>;
}

export const Lazy: FunctionComponent<LazyProps> = ({ loader }) => {
  const [Component, setComponent] = useState<FunctionComponent<unknown> | null>(
    null
  );

  useEffect(() => {
    loader().then((mod) => {
      setComponent(() => mod.default);
    });
  }, [loader]);

  if (!Component) {
    return <div>Cargando...</div>;
  }

  return <Component />;
};
