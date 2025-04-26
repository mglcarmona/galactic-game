import { Lazy } from "./components/Lazy";
import { useNavigate } from "./hooks/useNavigate";

export const App = () => {
  const { path, navigate } = useNavigate();

  return (
    <div>
      <nav>
        <a className="text-amber-300" onClick={() => navigate("/")}>
          Leader Board
        </a>
        <span> | </span>
        <a className="text-amber-300" onClick={() => navigate("/market")}>
          Market
        </a>
      </nav>

      {path === "/" && <Lazy loader={() => import("./views/leader-board")} />}
      {path === "/market" && <Lazy loader={() => import("./views/market")} />}
    </div>
  );
};
