export const IntegrationsSection = `
<!-- Filter Section -->
<div class="mb-6">
  <h2 class="mb-6 px-4 text-2xl font-bold text-white">Filter</h2>
  <!-- Categories -->
  <div class="border-t border-[#374151]">
    <ul>
      <template x-for="category in categories" :key="category">
        <li>
          <div x-data="{ open: true }" class="border-t border-[#374151]">
            <button
              @click="open = !open"
              class="flex w-full items-center justify-between py-4 text-lg text-[#94A3B8] transition-colors hover:text-white"
            >
              <span
                class="px-4 text-[#94A3B8] transition-colors group-hover:text-white"
                x-text="category"
              ></span>
              <svg
                :class="{'rotate-180': open}"
                class="h-5 w-5 transform transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 9.707a1 1 0 010-1.414L10 3.586l4.707 4.707a1 1 0 01-1.414 1.414L10 6.414l-3.293 3.293a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <ul x-show="open" x-collapse>
              <template
                x-for="integration in filteredIntegrationsByCategory(category)"
                :key="integration.name"
              >
                <li>
                  <button
                    @click="sendIntegrationData(integration)"
                    class="w-full rounded-md px-6 py-3 text-left font-medium focus:outline-none"
                  >
                    <div
                      class="bg-card hover:bg-card-hover relative rounded-lg p-6 transition-colors duration-200"
                    >
                      <div class="flex items-start gap-4">
                        <!-- Icon -->
                        <div
                          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10"
                        >
                          <template x-if="integration.icon">
                            <img
                              :src="integration.icon"
                              :alt="integration.name"
                              class="h-6 w-6"
                            />
                          </template>
                          <template x-if="!integration.icon">
                            <span
                              x-text="integration.name.charAt(0)"
                              class="text-xl font-bold text-white"
                            ></span>
                          </template>
                        </div>

                        <div class="min-w-0">
                          <div class="mb-1 flex items-center gap-2">
                            <h3
                              class="truncate text-lg font-semibold text-white"
                              x-text="integration.name"
                            ></h3>
                          </div>

                          <!-- Description -->
                          <p
                            class="mb-4 line-clamp-2 text-sm text-[#94A3B8]"
                            x-text="integration.description"
                          ></p>
                        </div>
                      </div>
                    </div>
                  </button>
                </li>
              </template>
            </ul>
          </div>
        </li>
      </template>
    </ul>
  </div>
</div>
`;
