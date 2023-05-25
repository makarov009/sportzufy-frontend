import React from 'react'

function card2() {
  return (
    <a
      href="#"
      class="group relative block bg-black lg:w-80 rounded-lg lg:h-96 border-2 border-gray-700"
    >
      <img
        alt="Developer"
        src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />

      <div class="relative">
       

        <p class="text-xl font-bold p-3 text-white sm:text-2xl">Tony Wayne</p>
        <div className="flex flex-col absolute top-0 right-0 p-2 rounded-lg text-slate-100 bg-indigo-400 text-sm lg:text-base">
          <span>12</span>
          <span>Sep</span>
          <span>2023</span>
        </div>

        <div class="mt-32 sm:mt-48 lg:mt-64 ">
          <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p class="text-sm text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              perferendis hic asperiores quibusdam quidem voluptates doloremque
              reiciendis nostrum harum. Repudiandae?
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default card2