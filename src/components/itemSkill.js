export const ItemSkill = ({icon, label}) =>{
    return(
        <div className="flex flex-col items-center my-5 py-2 px-8">
            {icon({size: "5em"})}
            <p className="mt-3 text-center">{label}</p>
        </div>
    );
}