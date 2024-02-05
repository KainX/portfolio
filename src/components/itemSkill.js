export const ItemSkill = ({icon, label}) =>{
    return(
        <div className="flex flex-col justify-center">
            {icon({size: "2em"})}
            <p>{label}</p>
        </div>
    );
}