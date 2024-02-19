export const JobExpItem = ({title, company, date, description, link}) =>
    <div
    class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-white/15 before:content-['']"
    >
        <span class="text-yellow-400 -left-[47px] absolute rounded-full text-5xl">&bull;</span>
        <div className="flex flex-row">
            <div className="flex flex-col">
                <h1>{title}</h1>
                <h2>{company}</h2>
                <h3>{date}</h3>
            </div>
            <p>{description}</p>
        </div>
    </div>;