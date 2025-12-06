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
   return <Dialog open={true} onOpenChange={onClose}>
      <DialogContent style={{ backgroundColor: 'white' }}>
         <DialogHeader>
            <DialogTitle>{pokemon.name}</DialogTitle>
            <div className="grid grid-cols-2">
               <div>
                  {
                     pokemon.typesInfo.map(type => <TypeCard key={type.name} type={type} />)
                  }
                  <SlideImage images={images} />

               </div>
               <PokemonInfo pokemon={pokemon} />
            </div>
         </DialogHeader>
      </DialogContent>
   </Dialog>
}