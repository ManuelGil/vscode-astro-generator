export const SearchFilter = `
<!-- Search Input -->
<div class="relative mb-8">
  <input
    type="text"
    x-model="searchQuery"
    placeholder="Search for an integration"
    class="w-full rounded-xl border border-[#374151] bg-[#1E2432] py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#4B5563]"
  />
  <div class="absolute left-3 top-3.5 text-gray-500">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="h-5 w-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  </div>
</div>
`;
