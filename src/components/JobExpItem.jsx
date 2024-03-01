export const JobExpItem = ({title, company, date, description, link}) =>
    <div
    class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 md:grid-cols-5 before:border-white/15 before:content-['']"
    >
        <span class="text-[#8876f9] -left-[47px] absolute rounded-full text-5xl">&bull;</span>
        <div className="flex flex-row md:col-span-1">
            <div className="flex flex-col">
                <h1 className="text-xl font-bold">{title}</h1>
                <h2 className="text-[#8876f9] font-bold">{company}</h2>
                <h3>{date}</h3>
            </div>
            
            
        </div>
        <div className="ml-10 pb-4 text-gray-100 md:col-span-4">
                <p>{description}</p>
            </div>
    </div>;