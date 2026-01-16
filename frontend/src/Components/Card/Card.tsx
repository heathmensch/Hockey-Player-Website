import React, { JSX } from 'react'
import "./Card.css";
import { PlayerSearch } from '../../player';
import AddPlayer from '../Player/AddPlayer/AddPlayer';

interface Props {
    id: string;
    searchResult: PlayerSearch;
    onPlayerCreate: (e: React.SyntheticEvent) => void;
}
const Card: React.FC<Props> = ({ id, searchResult, onPlayerCreate }: Props) : JSX.Element => {
  console.log("PLAYER NAME:", searchResult.firstName, searchResult.lastName);
  return (
  <div className="card">
    <img 
      src={searchResult.heroImage}
      alt={`${searchResult.firstName} ${searchResult.lastName}`} 
    />

    <div className="details">
      <h2>{searchResult.firstName} {searchResult.lastName}</h2>
      <p>{searchResult.currentTeamAbbrev} • {searchResult.position}</p>
    </div>

    {/* Stats Grid */}
    <div className="stats">
      <div className="stat">
        <div className="stat-value">{searchResult.goals}</div>
        <div className="stat-label">Goals</div>
      </div>

      <div className="stat">
        <div className="stat-value">{searchResult.assists}</div>
        <div className="stat-label">Assists</div>
      </div>

      <div className="stat">
        <div className="stat-value">{searchResult.points}</div>
        <div className="stat-label">Points</div>
      </div>
    </div>

    <AddPlayer onPlayerCreate={onPlayerCreate} firstName={searchResult.firstName} lastName={searchResult.lastName} />
    {/* Player ID Badge */}
    <p className="info">ID: {searchResult.playerId}</p>
  </div>

  // <div
  //     key={id}
  //     id={id}
  //     className="bg-slate-100 rounded-xl shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition"
  //   >
  //     {/* Player Header */}
  //     <div className="flex flex-col items-center text-center gap-3">
  //       <img
  //         src={searchResult.heroImage}
  //         alt={`${searchResult.firstName} ${searchResult.lastName}`}
  //         className="w-28 h-28 object-cover rounded-lg"
  //       />

  //       <div>
  //         <h2 className="text-lg font-bold">
  //           {searchResult.firstName} {searchResult.lastName}
  //         </h2>
  //         <p className="text-sm text-slate-600">
  //           {searchResult.currentTeamAbbrev} • {searchResult.position}
  //         </p>
  //       </div>
  //     </div>

  //     {/* Stats Grid */}
  //     <div className="grid grid-cols-3 gap-4 mt-6 text-center">
  //       <div className="bg-white rounded-lg p-3">
  //         <div className="text-2xl font-bold">{searchResult.goals}</div>
  //         <div className="text-xs text-slate-500 uppercase">Goals</div>
  //       </div>

  //       <div className="bg-white rounded-lg p-3">
  //         <div className="text-2xl font-bold">{searchResult.assists}</div>
  //         <div className="text-xs text-slate-500 uppercase">Assists</div>
  //       </div>

  //       <div className="bg-white rounded-lg p-3">
  //         <div className="text-2xl font-bold">{searchResult.points}</div>
  //         <div className="text-xs text-slate-500 uppercase">Points</div>
  //       </div>
  //     </div>

  //     {/* Footer */}
  //     <div className="mt-6 flex flex-col items-center gap-2">
  //       <AddPlayer
  //         onPlayerCreate={onPlayerCreate}
  //         firstName={searchResult.firstName}
  //         lastName={searchResult.lastName}
  //       />
  //       <p className="text-xs text-slate-500">ID: {searchResult.playerId}</p>
  //     </div>
  //   </div>

  // <div
  //     key={id}
  //     id={id}
  //     className="w-full rounded-2xl bg-slate-100 shadow-sm overflow-hidden border border-slate-200"
  //   >
  //     {/* Big image header */}
  //     <div className="relative w-full h-56 sm:h-64">
  //       <img
  //         src={searchResult.heroImage}
  //         alt={`${searchResult.firstName} ${searchResult.lastName}`}
  //         className="w-full h-full object-cover"
  //       />
  //       {/* Overlay name + team */}
  //       <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
  //         <h2 className="text-white text-xl font-bold leading-tight">
  //           {searchResult.firstName} {searchResult.lastName}
  //         </h2>
  //         <p className="text-white/90 text-sm">
  //           {searchResult.currentTeamAbbrev} • {searchResult.position} • ID: {searchResult.playerId}
  //         </p>
  //       </div>
  //     </div>

  //     {/* Stats in rows */}
  //     <div className="p-5">
  //       <div className="space-y-3">
  //         <div className="flex items-center justify-between rounded-lg bg-white px-4 py-3">
  //           <span className="text-sm text-slate-600">Goals</span>
  //           <span className="text-lg font-bold text-slate-900">{searchResult.goals}</span>
  //         </div>

  //         <div className="flex items-center justify-between rounded-lg bg-white px-4 py-3">
  //           <span className="text-sm text-slate-600">Assists</span>
  //           <span className="text-lg font-bold text-slate-900">{searchResult.assists}</span>
  //         </div>

  //         <div className="flex items-center justify-between rounded-lg bg-white px-4 py-3">
  //           <span className="text-sm text-slate-600">Points</span>
  //           <span className="text-lg font-bold text-slate-900">{searchResult.points}</span>
  //         </div>
  //       </div>

  //       {/* Action */}
  //       <div className="mt-5 flex items-center justify-between">
  //         <AddPlayer
  //           onPlayerCreate={onPlayerCreate}
  //           firstName={searchResult.firstName}
  //           lastName={searchResult.lastName}
  //         />
  //       </div>
  //     </div>
  //   </div>

  );
};

export default Card;