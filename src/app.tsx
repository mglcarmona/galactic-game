import { Lazy } from "./components/Lazy";
import { ToggleSwitch } from "./components/Toggle";
import { useNavigate } from "./hooks/useNavigate";

export const App = () => {
  const { path, navigate } = useNavigate();

  return (
    <div className="px-4 py-8 flex flex-col items-center gap-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-white">Galactic Game</h1>
      <ToggleSwitch
        options={[
          { value: "/", label: "Leaderboard" },
          { value: "/market", label: "Market" },
        ]}
        onChange={(value) => {
          navigate(value);
        }}
        initialValue={path}
      />

      {path === "/" && <Lazy loader={() => import("./views/leader-board")} />}
      {path === "/market" && <Lazy loader={() => import("./views/market")} />}
    </div>
  );
};
