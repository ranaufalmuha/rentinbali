

export const HeaderSection = ({ sectionName, title }) => {
    return (
        <div className="flex flex-col gap-2">
            <p >/ {sectionName}</p>
            <p className='max-sm:text-4xl text-7xl max-w-[400px] duration-300'>{title}</p>
        </div>
    )
}