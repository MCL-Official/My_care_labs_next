interface DropDownProps{
    shortDescription  :string | string[];
}
export const DropDown = ({shortDescription}:DropDownProps) => {
    return (
        <div>
         {Array.isArray(shortDescription) ? (
                        <ul className="text-base mb-1 text-white text-left list-inside pl-0 mt-2 ">
                            {shortDescription.map((item, idx) => (
                                <li key={idx} className="list-disc">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-base mb-1 text-white text-left mt-2">
                            {shortDescription}
                        </p>
                    )}
        </div>
    )
}