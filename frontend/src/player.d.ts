export interface PlayerSearch {
  playerId: number;
  headshotUrl: string;
  heroImage: string;
  firstName: string;
  lastName: string;
  currentTeamAbbrev: string;
  position: string;
  goals: number;
  assists: number;
  points: number;
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