import React, { JSX } from 'react'
import Card from '../Card/Card'
import { PlayerSearch } from '../../player'
import { v4 as uuidv4 } from 'uuid';

interface Props {
  searchResult: PlayerSearch[];
  onPlayerCreate: (e: React.SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({ searchResult, onPlayerCreate }: Props) : JSX.Element => {
  return <>
  {searchResult.length > 0 ? (
    searchResult.map((result) => {
      return <Card 
          id={result.playerId.toString()} 
          key={uuidv4()}
          searchResult={result}
          onPlayerCreate={onPlayerCreate} />
    })
  ) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
              No results!
        </p>
  )} </>
}

// const CardList: React.FC<Props> = ({ searchResult, onPlayerCreate }): JSX.Element => {
//   if (searchResult.length === 0) {
//     return (
//       <p className="my-3 text-xl font-semibold text-center">
//         No results!
//       </p>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {searchResult.map((result) => (
//         <Card
//           key={result.playerId}                 // ✅ stable key
//           id={result.playerId.toString()}
//           searchResult={result}
//           onPlayerCreate={onPlayerCreate}
//         />
//       ))}
//     </div>
//   );
// };

// const CardList: React.FC<Props> = ({ searchResult, onPlayerCreate }): JSX.Element => {
//   if (!searchResult || searchResult.length === 0) {
//     return (
//       <p className="my-3 text-xl font-semibold text-center">
//         No results!
//       </p>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto px-4">
//       {/* 1 column on mobile, 2 columns on md+ (half-page each) */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {searchResult.map((result) => (
//           <Card
//             key={result.playerId}                 // ✅ stable key
//             id={result.playerId.toString()}
//             searchResult={result}
//             onPlayerCreate={onPlayerCreate}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };


export default CardList
