using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Stats
    {
        public int Id { get; set; }
        public int PlayerID { get; set; }
        public string PlayerName { get; set; } = string.Empty;
        public string PlayerTeam { get; set; } = string.Empty;
    }
}