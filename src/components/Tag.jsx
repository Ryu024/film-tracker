export default function Tag ({children}) {
    return (
        <span className="text-teal-200 border border-teal-300 text-sm bg-teal-600/20 rounded-3xl lg:px-2 md:px-0 hover:px-3 font-medium flex items-center justify-center gap-2 hover:ring-1 hover:ring-teal-300 transition-all ease-linear classname">
            {children}
        </span>
    )
}
