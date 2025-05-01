import { Player } from "../api";

enum RankStatus {
  Up = "Up",
  Down = "Down",
  Same = "Same",
}

export interface PlayerWithStatus extends Player {
  rankStatus: RankStatus;
}

export function comparePlayerRanks(
  previous: Player[],
  current: Player[]
): PlayerWithStatus[] {
  const prevRankMap = new Map<string, number>();

  previous.forEach((player) => {
    prevRankMap.set(player.username, Number(player.rank));
  });

  return current.map((player) => {
    const prevRank = prevRankMap.get(player.username);

    let rankStatus: RankStatus = RankStatus.Same;

    if (prevRank !== undefined) {
      const currentRank = Number(player.rank);
      if (currentRank < prevRank) {
        rankStatus = RankStatus.Up;
      } else if (currentRank > prevRank) {
        rankStatus = RankStatus.Down;
      }
    }

    return {
      ...player,
      rankStatus,
    };
  });
}
