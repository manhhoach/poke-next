interface PaginationProps {
   page: number;
   totalPages: number;
   onPageChange: React.Dispatch<React.SetStateAction<number>>;
   siblingCount?: number;
   fullDisplayThreshold?: number;
}

export default function Pagination({
   page,
   totalPages,
   onPageChange,
   siblingCount = 1,
   fullDisplayThreshold = 7
}: PaginationProps) {
   const pages: number[] = [];

   if (totalPages <= fullDisplayThreshold) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
   } else {
      pages.push(1);

      const start = Math.max(2, page - siblingCount);
      const end = Math.min(totalPages - 1, page + siblingCount);

      if (start > 2) pages.push(-1); // "..."

      for (let i = start; i <= end; i++) pages.push(i);

      if (end < totalPages - 1) pages.push(-1); // "..."

      pages.push(totalPages);
   }

   return (
      <div className="mt-5 flex">
         {pages.map((p, i) =>
            p === -1 ? (
               <span key={i} className="px-2">...</span>
            ) : (
               <button
                  key={i}
                  className={`mx-1 px-3 py-1 rounded ${p === page ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 cursor-pointer text-xs md:text-base"
                     }`}
                  onClick={() => onPageChange(p)}
               >
                  {p}
               </button>
            )
         )}
      </div>
   );
}
