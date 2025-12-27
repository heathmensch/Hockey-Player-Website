using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Dtos.Stats;
using backend.Models;

namespace backend.Interfaces
{
    public interface IStatsRepository
    {
        Task<List<Stats>> GetAllAsync();

        Task<Stats?> GetByIdAsync(int id); // FirstOrDefault can be NULL so ? is needed
        Task<Stats> CreateAsync(Stats statModel);
        Task<Stats?> UpdateAsync(int id, UpdateStatsRequestDto statDto);
        Task<Stats?> DeleteAsync(int id);
    }
}