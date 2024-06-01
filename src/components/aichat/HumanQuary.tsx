
export default function HumanQuary({query}:{query:string}) {
    return (
        <div className="">
            {
                query.split("\n").map((line, index)=><p key={index}>{line}</p>)
            }
        </div>
    );
}