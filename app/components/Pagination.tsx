import { OFFSET, WINDOW_SIZE } from "../consts/constant";

interface PaginationProps {
   page: number;
   totalPages: number;
   onPageChange: React.Dispatch<React.SetStateAction<number>>;
}


export default function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
   const pages: number[] = []
   if (totalPages <= WINDOW_SIZE + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
   } else {
      pages.push(1); // trang đầu
      const start = Math.max(2, page - OFFSET);
      const end = Math.min(totalPages - 1, page + OFFSET);
      if (start > 2) pages.push(-1); // "..." phía trước
      for (let i = start; i <= end; i++) pages.push(i);
      if (end < totalPages - 1) pages.push(-1); // "..." phía sau
      pages.push(totalPages); // trang cuối
   }
   return <div className="mt-5 flex">
      {pages.map((p, i) =>
         p === -1 ? (
            <span key={i} className="mx-1 px-2">...</span>
         ) : (
            <button
               key={i}
               className={`mx-1 px-3 py-1 rounded ${p === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
               onClick={() => onPageChange(p)}
            >
               {p}
            </button>
         )
      )}
   </div>
}