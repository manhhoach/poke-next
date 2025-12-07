import type { PokemonDetail } from "../interfaces/pokemon";
import { handleImages } from "../lib/utils";
import PokemonInfo from "./PokemonInfo";
import SlideImage from "./SlideImage";
import TypeCard from "./TypeCard";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
} from "./ui/dialog"
interface PokemonDetailProps {
   pokemon: PokemonDetail
   onClose: () => void
}

export default function PokemonDetailDialog({ pokemon, onClose }: PokemonDetailProps) {
   const images = handleImages(pokemon.sprites, pokemon.avatar);
   const lengthOfType = pokemon.typesInfo.length
   return <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-white w-9/10 md:w-1/3 md:h-1/2">
         <DialogHeader>
            <DialogTitle>{pokemon.name}</DialogTitle>
            <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 w-full h-full gap-4">
               <div className={`grid grid-rows-${lengthOfType} h-full relative`}>
                  {
                     pokemon.typesInfo.map(type => <div style={{ backgroundColor: type.color }} key={type.name} />)
                  }
                  <SlideImage images={images} />
               </div>
               <PokemonInfo pokemon={pokemon} />
            </div>
         </DialogHeader>
      </DialogContent>
   </Dialog>
}