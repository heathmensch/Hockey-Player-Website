using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.Dtos.Stats;
using backend.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Repository
{
    public class StatsRepository : IStatsRepository
    {
        private readonly ApplicationDBContext _context;
        public StatsRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Stats> CreateAsync(Stats statModel)
        {
            await _context.Stats.AddAsync(statModel);
            await _context.SaveChangesAsync();
            return statModel;
        }

        public async Task<Stats?> DeleteAsync(int id)
        {
            // FIRST OR DEFAULT CAN RETURN NULL
            var statModel = await _context.Stats.FirstOrDefaultAsync(x => x.Id == id);
            // Check if it returns null
            if (statModel == null)
            {
                return null;
            }
            // Remove and save changes
            _context.Stats.Remove(statModel);
            await _context.SaveChangesAsync();
            return statModel;
        }

        public async Task<List<Stats>> GetAllAsync()
        {
            return await _context.Stats.ToListAsync();
        }

        public async Task<Stats?> GetByIdAsync(int id)
        {
            // FIND ASYNC WONT RETURN NULL IF NOT FOUND
            return await _context.Stats.FindAsync(id);
        }

        public async Task<Stats?> UpdateAsync(int id, UpdateStatsRequestDto statDto)
        {
            var existingStat = await _context.Stats.FirstOrDefaultAsync(x => x.Id == id); // make sure the id's match
            // check for null
            if (existingStat == null)
            {
                return null;
            }

            existingStat.PlayerID = statDto.PlayerID;
            existingStat.PlayerName = statDto.PlayerName;
            existingStat.PlayerTeam = statDto.PlayerTeam;

            await _context.SaveChangesAsync();
            return existingStat;
        }
    }
}