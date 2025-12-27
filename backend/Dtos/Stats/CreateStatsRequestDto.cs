using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace backend.Dtos.Stats
{
	public class CreateStatsRequestDto
	{
		public int PlayerID { get; set; }
		public string PlayerName { get; set; } = string.Empty;
		public string PlayerTeam { get; set; } = string.Empty;

	}
}

