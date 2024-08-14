<template>
  <div class="mt-16">
    <div class="flex justify-center items-center">
      <h2 class="lg:text-5xl md:text-4xl text-3xl font-bold font-popins mb-4">Why Join Our Pilot Project?</h2>
    </div>
  </div>
  <div class="mt-16">
    <div class="flex justify-center items-center">
      <ul class="list-none p-0 m-0 space-y-4 w-full max-w-4xl sm:max-w-3xl xs:max-w-xl">
        <li class="flex flex-col bg-rose-100 border border-gray-300 shadow-lg rounded-3xl p-4 sm:p-8 min-h-[160px] flex-grow">
          <span class="font-semibold lg:text-xl md:text-lg text-gray-800 mb-2 text-center">
            <b>Empower Your Students</b>
          </span>
          <p class="text-gray-700 text-center">
            Give your students the opportunity to gain practical industry experience and develop in-demand skills.
          </p>
        </li>
        <li class="flex flex-col bg-rose-100 border border-gray-300 shadow-lg rounded-3xl p-4 sm:p-8 min-h-[160px] flex-grow">
          <span class="font-semibold lg:text-xl md:text-lg text-gray-800 mb-2 text-center">
            <b>Expand Networking</b>
          </span>
          <p class="text-gray-700 text-center">
            Connect with a network of companies and startups looking for talented individuals like your students.
          </p>
        </li>
        <li class="flex flex-col bg-rose-100 border border-gray-300 shadow-lg rounded-3xl p-4 sm:p-8 min-h-[160px] flex-grow">
          <span class="font-semibold lg:text-xl md:text-lg text-gray-800 mb-2 text-center">
            <b>Enhance Curriculum</b>
          </span>
          <p class="text-gray-700 text-center">
            Supplement academic learning with hands-on projects and tasks from leading industry players.
          </p>
        </li>
        <li class="flex flex-col bg-rose-100 border border-gray-300 shadow-lg rounded-3xl p-4 sm:p-8 min-h-[160px] flex-grow">
          <span class="font-semibold lg:text-xl md:text-lg text-gray-800 mb-2 text-center">
            <b>Shape Future Leaders</b>
          </span>
          <p class="text-gray-700 text-center">
            Help shape the future leaders of tomorrow by providing them with valuable industry exposure.
          </p>
        </li>
        <li class="flex flex-col bg-rose-100 border border-gray-300 shadow-lg rounded-3xl p-4 sm:p-8 min-h-[160px] flex-grow">
          <span class="font-semibold lg:text-xl md:text-lg text-gray-800 mb-2 text-center">
            <b>Contribute to Innovation</b>
          </span>
          <p class="text-gray-700 text-center">
            Support innovation and collaboration between students, companies, and startups.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul {
  /* Adjust max-width for responsiveness */
  max-width: 30%;
  margin: auto;
}
li {
  /* Ensure cards do not stretch beyond a certain height */
  min-height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (min-width:750px) and (max-width:1200px){
  ul {
  /* Adjust max-width for responsiveness */
  max-width: 40%;
  margin: auto;
}
}
@media (min-width:600px) and (max-width:750px){
  ul {
  /* Adjust max-width for responsiveness */
  max-width: 50%;
  margin: auto;
}
}
@media (min-width:500px) and (max-width:600px){
  ul {
  /* Adjust max-width for responsiveness */
  max-width: 60%;
  margin: auto;
}
}
@media (min-width:300px) and (max-width:500px){
  ul {
  /* Adjust max-width for responsiveness */
  max-width: 80%;
  margin: auto;
}
}
</style>


