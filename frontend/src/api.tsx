import axios from "axios";
import type { PlayerSearch } from './player';



// use the backend endpoint to fetch player data based on playerId
export const searchPlayers = async (playerId: string): Promise<PlayerSearch[] | string> => {
  try {
    const response = await axios.get<PlayerSearch>(
    `http://localhost:5291/backend/nhl/player/${playerId}/landing`  // Changed the playerID to be dynamic
    );
    console.log("RAW RESPONSE DATA:", response.data);
    return [response.data];   // Return the data array directly
  } catch (error) {
    console.error('Error fetching players:', error);
    return [];
  }
};