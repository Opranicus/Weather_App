type Props = {
    label: string;
    data?: number;
    children?: React.ReactNode;
}

export default function Cards({label, data, children}: Props){
    return(
        <div className="w-40 h-50 p-5 flex flex-col justify-center items-center bg-gradient-to-b from-blue-400 to-yellow-200 rounded-xl gap-5">
            <h2 className="text-xl">{label}</h2>
            <h1 className="text-xl font-medium">{data} {children}</h1>
        </div>
    )
}