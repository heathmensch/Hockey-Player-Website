// using Microsoft.AspNetCore.Mvc;
// using System.Net.Http;
// using System.Text.Json;
// using System.Threading.Tasks;

// namespace YourApp.Controllers
// {
//     [ApiController]
//     [Route("backend/nhl")]
//     public class NHLPlayerController : ControllerBase
//     {
//         private readonly HttpClient _httpClient;

//         public NHLPlayerController(HttpClient httpClient)
//         {
//             _httpClient = httpClient;
//         }

//         [HttpGet("player/{playerId}/landing")]
//         public async Task<IActionResult> GetPlayerLanding(int playerId)
//         {
//             try
//             {
//                 var response = await _httpClient.GetAsync(
//                     $"https://api-web.nhle.com/v1/player/{playerId}/landing"
//                 );

//                 if (!response.IsSuccessStatusCode)
//                 {
//                     return StatusCode((int)response.StatusCode, "Failed to fetch player data");
//                 }

//                 var jsonString = await response.Content.ReadAsStringAsync();
//                 var nhlData = JsonSerializer.Deserialize<JsonElement>(jsonString);

//                 var playerData = new
//                 {
//                     playerId = nhlData.GetProperty("playerId").GetInt32(),
//                     firstName = nhlData.GetProperty("firstName").GetProperty("default").GetString(),
//                     lastName = nhlData.GetProperty("lastName").GetProperty("default").GetString(),
//                     position = nhlData.GetProperty("position").GetString(),
//                 };

//                 return Ok(playerData);
//             }
//             catch (Exception ex)
//             {
//                 return StatusCode(500, $"Error: {ex.Message}");
//             }
//         }
//     }
// }

using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace YourApp.Controllers
{
    [ApiController]
    [Route("backend/nhl")]
    public class NHLPlayerController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public NHLPlayerController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        [HttpGet("player/{playerId}/landing")]
        public async Task<IActionResult> GetPlayerLanding(int playerId)
        {
            try
            {
                var response = await _httpClient.GetAsync(
                    $"https://api-web.nhle.com/v1/player/{playerId}/landing"
                );

                if (!response.IsSuccessStatusCode)
                {
                    return StatusCode((int)response.StatusCode, "Failed to fetch player data");
                }

                var jsonString = await response.Content.ReadAsStringAsync();
                var nhlData = JsonSerializer.Deserialize<JsonElement>(jsonString);

                var playerData = new
                {
                    playerId = nhlData.GetProperty("playerId").GetInt32(),
                    headshotUrl = nhlData.GetProperty("headshot").GetString(),
                    heroImage = nhlData.GetProperty("heroImage").GetString(),
                    firstName = nhlData.GetProperty("firstName").GetProperty("default").GetString(),
                    lastName = nhlData.GetProperty("lastName").GetProperty("default").GetString(),
                    position = nhlData.GetProperty("position").GetString(),
                    currentTeamAbbrev = nhlData.GetProperty("currentTeamAbbrev").GetString(),
                    goals = nhlData.GetProperty("featuredStats").GetProperty("regularSeason").GetProperty("subSeason").GetProperty("goals").GetInt32(),
                    assists = nhlData.GetProperty("featuredStats").GetProperty("regularSeason").GetProperty("subSeason").GetProperty("assists").GetInt32(),
                    points = nhlData.GetProperty("featuredStats").GetProperty("regularSeason").GetProperty("subSeason").GetProperty("points").GetInt32()
                };

                return Ok(playerData);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error: {ex.Message}");
            }
        }
    }
}