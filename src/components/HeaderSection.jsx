

export const HeaderSection = ({ sectionName, title }) => {
    return (
        <div className="flex flex-col gap-2">
            <p >/ {sectionName}</p>
            <p className='text-7xl max-w-[400px]'>{title}</p>
        </div>
    )
}