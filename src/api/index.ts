export enum PlayerFields {
  RANK = "rank",
  USERNAME = "username",
  LEVEL = "level",
  XP = "xp",
  GOLD = "gold",
}

export enum ItemFields {
  ID = "id",
  NAME = "name",
  TYPE = "type",
  DESCRIPTION = "description",
  COST = "cost",
}

export interface Player {
  [PlayerFields.RANK]: number | string;
  [PlayerFields.USERNAME]: string;
  [PlayerFields.LEVEL]: number;
  [PlayerFields.XP]: number;
  [PlayerFields.GOLD]: number;
}

export interface Item {
  [ItemFields.ID]: string;
  [ItemFields.NAME]: string;
  [ItemFields.TYPE]: string;
  [ItemFields.DESCRIPTION]: string;
  [ItemFields.COST]: number;
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
