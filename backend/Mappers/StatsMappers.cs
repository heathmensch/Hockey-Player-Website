using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dtos.Stats;
using backend.Models;

namespace backend.Mappers
{
    public static class StatsMappers
    {
        public static StatsDto ToStatsDto(this Stats statModel)
        {
            return new StatsDto
            {
                Id = statModel.Id,
                PlayerID = statModel.PlayerID,
                PlayerName = statModel.PlayerName,
                PlayerTeam = statModel.PlayerTeam,
            };
        }

        public static Stats ToStatsFromCreateDto(this CreateStatsRequestDto statsDto)
        {
            return new Stats
            {
                PlayerID = statsDto.PlayerID,
                PlayerName = statsDto.PlayerName,
                PlayerTeam = statsDto.PlayerTeam,
            };
        }
    }
}