
const ProjectItem = ({img, title, src ="#", repo, info}:any) => {
  //console.log(src);
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group transition-all duration-300 ease-in-out overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-200 to-[#001b5e] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out rounded-xl pointer-events-none"></div>
      <img
        src={img}
        alt={title}
        className="rounded-xl transition-opacity duration-300 ease-in-out group-hover:opacity-10 w-full h-[300px] object-cover"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-100 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out flex flex-col items-center">
        <h3 className="font-bold text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center text-nowrap">{info}</p>
        <div className="flex flex-col gap-2 items-center">
          <a href={src} target="_blank">
            <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg hover:bg-gray-300 transition-colors duration-300 ease-in-out min-w-[150px]">
              More Info
            </p>
          </a>
          {repo && (
            <a href={repo} target="_blank">
              <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg hover:bg-gray-300 transition-colors duration-300 ease-in-out min-w-[150px]">
                Repository
              </p>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
