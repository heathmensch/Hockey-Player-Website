import axios from "axios";
import type { PlayerSearch } from './player';

interface SearchResponse {
    data: PlayerSearch[];
}

// use the backend endpoint to fetch player data based on playerId
export const searchPlayers = async (playerId: string) => {
  try {
    const response = await axios.get<SearchResponse>(
    `http://localhost:5291/backend/nhl/player/${playerId}/landing`  // Changed the playerID to be dynamic
    );
    return response.data;   // Return the data array directly
  } catch (error) {
    console.error('Error fetching players:', error);
    return [];
  }
};