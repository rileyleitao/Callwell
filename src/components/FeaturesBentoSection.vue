<template>
  <div class="bg-gray-50 py-16 sm:py-20 lg:py-24">
    <div class="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
      <p class="text-center text-sm sm:text-base font-semibold text-indigo-600 mb-3">Smart automation</p>
      <h2 class="mx-auto max-w-lg text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">Everything you need to run your business 24/7</h2>
      <div class="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
        <!-- Left Column - Answers calls -->
        <div class="relative max-lg:row-start-1 lg:row-span-2">
          <div class="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
            <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
              <p class="mt-2 text-xl sm:text-2xl font-bold text-gray-900 max-lg:text-center">Answers calls while you're not around</p>
              <p class="mt-2 max-w-lg text-base text-gray-600 max-lg:text-center">Never miss a customer call, even after hours or during peak demand. Our AI handles every call professionally 24/7.</p>
            </div>
            <div class="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <img class="size-full object-cover object-top" src="/missedcall.png" alt="Callwell answering calls automatically" loading="lazy" decoding="async" />
              </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl"></div>
        </div>
        
        <!-- Top Middle - Intelligent routing -->
        <div class="relative max-lg:row-start-4">
          <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
            <div class="px-8 pt-8 sm:px-10 sm:pt-10">
              <p class="mt-2 text-xl sm:text-2xl font-bold text-gray-900 max-lg:text-center">Intelligent routing</p>
              <p class="mt-2 max-w-lg text-base text-gray-600 max-lg:text-center">Smart forwarding to a human in the loop during emergencies. Our system knows when to escalate important calls.</p>
            </div>
            <div class="@container flex flex-1 items-center justify-center max-lg:py-8 lg:py-4 px-8">
              <img src="/routing.png" alt="Intelligent routing with human in the loop" class="w-full max-w-md object-contain" loading="lazy" decoding="async" />
            </div>         
         </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl"></div>
        </div>
        
        <!-- Bottom Middle - Integrations -->
        <div class="relative max-lg:row-start-2 lg:col-start-2 lg:row-start-2">
          <div class="absolute inset-px rounded-lg bg-white"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
            <div class="px-8 pt-8 sm:px-10 sm:pt-10">
              <p class="mt-2 text-xl sm:text-2xl font-bold text-gray-900 max-lg:text-center">Integrates seamlessly</p>
              <p class="mt-2 max-w-lg text-base text-gray-600 max-lg:text-center">Works with tools such as Jobber, Housecall Pro, and ServiceTitan to sync your appointments automatically.</p>
            </div>
            <div class="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
              <img class="h-[min(152px,40cqw)] object-cover" src="/Integrations.svg" alt="Integrations with Jobber, Housecall Pro, and ServiceTitan" loading="lazy" decoding="async" />
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5"></div>
        </div>
        
        <!-- Right Column - Books automatically -->
        <div class="relative max-lg:row-start-3 lg:row-span-2">
          <div class="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
          <div class="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
            <div class="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
              <p class="mt-2 text-xl sm:text-2xl font-bold text-gray-900 max-lg:text-center">Books automatically</p>
              <p class="mt-2 max-w-lg text-base text-gray-600 max-lg:text-center">Appointments are scheduled directly into your calendar. No manual entry needed—everything syncs automatically.</p>
            </div>
            <div class="relative min-h-120 w-full grow">
              <div class="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl outline outline-white/10">
                <div class="flex bg-gray-900 outline outline-white/5">
                  <div class="-mb-px flex text-sm/6 font-medium text-gray-400">
                    <div class="border-r border-gray-600/10 px-4 py-2">Calendar</div>
                    <div class="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">Appointments</div>
                  </div>
                </div>
                <div class="px-6 pt-6 pb-14">
                  <div class="space-y-4 text-white">
                    <div class="flex items-start gap-3">
                      <span class="text-gray-400 text-sm mt-0.5">•</span>
                      <div>
                        <div class="text-sm font-medium">8:00 AM</div>
                        <div class="text-xs text-gray-300 mt-1">John Smith</div>
                        <div class="text-xs text-gray-400">182 Maple St</div>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-gray-400 text-sm mt-0.5">•</span>
                      <div>
                        <div class="text-sm font-medium">9:00 AM</div>
                        <div class="text-xs text-gray-300 mt-1">Riverside Apartments</div>
                        <div class="text-xs text-gray-400">2300 Elm Ave</div>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-gray-400 text-sm mt-0.5">•</span>
                      <div>
                        <div class="text-sm font-medium">10:30 AM</div>
                        <div class="text-xs text-gray-300 mt-1">Susan Davis</div>
                        <div class="text-xs text-gray-400">742 Oak Ln</div>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-gray-400 text-sm mt-0.5">•</span>
                      <div>
                        <div class="text-sm font-medium">12:00 PM</div>
                        <div class="text-xs text-gray-300 mt-1">Mike Johnson</div>
                        <div class="text-xs text-gray-400">121 Birch Rd</div>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-gray-400 text-sm mt-0.5">•</span>
                      <div>
                        <div class="text-sm font-medium">2:00 PM</div>
                        <div class="text-xs text-gray-300 mt-1">Greenfield Manufacturing</div>
                        <div class="text-xs text-gray-400">108 Industrial Blvd</div>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-gray-400 text-sm mt-0.5">•</span>
                      <div>
                        <div class="text-sm font-medium">3:30 PM</div>
                        <div class="text-xs text-gray-300 mt-1">Karen Thompson</div>
                        <div class="text-xs text-gray-400">331 Pine St</div>
                      </div>
                    </div>
                    <div class="flex items-start gap-3">
                      <span class="text-gray-400 text-sm mt-0.5">•</span>
                      <div>
                        <div class="text-sm font-medium">5:00 PM</div>
                        <div class="text-xs text-gray-300 mt-1">Parkside Mall</div>
                        <div class="text-xs text-gray-400">555 Commerce Dr</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Features Bento Section Component
</script>

<style scoped>
:root {
  --radius-lg: 0.5rem;
}
</style>
