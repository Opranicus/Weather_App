type Props = {
    label: string;
    data: number;
    children?: React.ReactNode;
}

export default function Cards({label, data, children}: Props){
    return(
        <div className="w-60 h-64 flex flex-col justify-center items-center bg-gray-400 rounded-xl gap-5">
            <h2 className="text-2xl">{label}</h2>
            <h1 className="text-3xl font-medium">{data} {children}</h1>
        </div>
    )
}