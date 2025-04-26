export interface Player {
  rank: number;
  username: string;
  level: number;
  xp: number;
  gold: number;
}

export interface Item {
  id: string;
  name: string;
  type: string;
  description: string;
  cost: number;
}

const API_BASE_URL = "https://api-game.bloque.app/game";

export async function fetchLeaderboard(): Promise<{ players: Player[] }> {
  const res = await fetch(`${API_BASE_URL}/leaderboard`);
  if (!res.ok) throw new Error("Error fetching leaderboard");
  return res.json();
}

export async function fetchItems(): Promise<{ items: Item[] }> {
  const res = await fetch(`${API_BASE_URL}/market`);
  if (!res.ok) throw new Error("Error fetching items");
  return res.json();
}
