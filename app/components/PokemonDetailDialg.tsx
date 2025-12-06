import type { PokemonDetail } from "../interfaces/pokemon";
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
   return <Dialog open={true} onOpenChange={onClose}>
      <DialogContent style={{ backgroundColor: 'white' }}>
         <DialogHeader>
            <DialogTitle>{pokemon.name}</DialogTitle>
            <DialogDescription>
               <div>
                  
               </div>
            </DialogDescription>
         </DialogHeader>
      </DialogContent>
   </Dialog>
}