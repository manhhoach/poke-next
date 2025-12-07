interface AbilityCardProps {
   name: string
   from: string
   to: string
}

export default function AbilityCard({ name, from, to }: AbilityCardProps) {
   return (
      <div
         className="rounded-xl p-1"
         style={{
            background: `linear-gradient(to right, ${from}, ${to})`,
         }}
      >
         <div className="rounded-lg bg-white px-3 py-1">
            {name}
         </div>
      </div>
   );
}