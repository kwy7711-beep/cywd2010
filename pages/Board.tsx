import React from 'react';
import { BOARD_POSTS } from '../constants';

export const Board: React.FC = () => {
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-cyworld-blue font-bold text-lg mb-4 border-b border-gray-300 pb-2">
        Board
      </h2>
      
      <div className="w-full">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-gray-100 border-t border-b border-gray-300 text-gray-600">
              <th className="py-2 w-10">No</th>
              <th className="py-2 text-left px-2">제목</th>
              <th className="py-2 w-20">작성일</th>
              <th className="py-2 w-12">조회</th>
            </tr>
          </thead>
          <tbody>
            {BOARD_POSTS.map((post) => (
              <tr key={post.id} className="border-b border-dashed border-gray-200 hover:bg-gray-50 cursor-pointer">
                <td className="text-center py-2 text-gray-500">{post.id}</td>
                <td className="text-left py-2 px-2 text-gray-800 hover:text-cyworld-blue hover:underline truncate max-w-[200px]">
                  {post.title}
                </td>
                <td className="text-center py-2 text-gray-500 text-[10px]">{post.date}</td>
                <td className="text-center py-2 text-gray-500">{post.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 flex justify-end">
        <button className="text-xs bg-white border border-gray-300 px-3 py-1 text-gray-600 hover:bg-gray-50">
          글쓰기
        </button>
      </div>

      <div className="mt-auto flex justify-center space-x-2 text-xs text-gray-500">
         <span>[1]</span>
      </div>
    </div>
  );
};