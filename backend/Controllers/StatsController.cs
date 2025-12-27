using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using backend.Dtos.Stats;
using backend.Interfaces;
using backend.Mappers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Update.Internal;

namespace backend.Controllers
{
    [Route("backend/stats")]
    [ApiController]
    public class StatsController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly IStatsRepository _statsRepo;
        public StatsController(ApplicationDBContext context, IStatsRepository statsRepo)
        {
            _statsRepo = statsRepo;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var stats = await _statsRepo.GetAllAsync();
            var statsDto = stats.Select(s => s.ToStatsDto());

            return Ok(stats);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var stat = await _statsRepo.GetByIdAsync(id);

            if (stat == null)
            {
                return NotFound();
            }
            return Ok(stat.ToStatsDto());
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateStatsRequestDto StatsDto)
        {
            var statModel = StatsDto.ToStatsFromCreateDto();

            await _statsRepo.CreateAsync(statModel);

            return CreatedAtAction(nameof(GetById), new { id = statModel.Id }, statModel.ToStatsDto());
        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateStatsRequestDto updateDto)
        {
            var statModel = await _statsRepo.UpdateAsync(id, updateDto);

            if (statModel == null)
            {
                return NotFound();
            }

            return Ok(statModel.ToStatsDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var statModel = await _statsRepo.DeleteAsync(id);

            if (statModel == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
