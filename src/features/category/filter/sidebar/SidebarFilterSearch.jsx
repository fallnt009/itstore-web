import React from 'react';

export default function SidebarFilterSearch() {
  return (
    <div className="py-5 border-b">
      <input
        className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-inner"
        placeholder="Filter by Keyword..."
      />
    </div>
  );
}
