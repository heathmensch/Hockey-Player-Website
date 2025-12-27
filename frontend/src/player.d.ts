export interface PlayerSearch {
  playerId: number;
  name: string;
  positionCode: string;
  teamAbbrev?: string;
}

export interface PlayerLanding {
  playerId: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  birthCity: string;
  heightInInches: number;
  weightInPounds: number;
  position: string;
  shootsCatches: string;
  headshot: string;
  featuredStats: {
    season: number;
    regularSeason: {
      subSeason: {
        gamesPlayed: number;
        goals: number;
        assists: number;
        points: number;
      };
    };
  };
}