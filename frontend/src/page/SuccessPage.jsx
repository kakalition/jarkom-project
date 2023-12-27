function SuccessPage() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="absolute top-16">
        <div className="flex flex-col items-center">
          <div className="rounded-full p-4 bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
            </svg>
          </div>
          <h2 className="font-roboto-flex text-2xl mt-2">Absento</h2>
        </div>
      </div>

      <div className="rounded-full p-8 bg-[#77DD77]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 stroke-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </div>
      <h2 className="font-roboto-flex text-2xl mt-8">Anda berhasil absen!</h2>

      <div className="absolute bottom-4">
        <p className="font-roboto-flex text-gray-700 text-sm">Dibuat oleh Kelompok X</p>
      </div>
    </div>
  )
}

export default SuccessPage;