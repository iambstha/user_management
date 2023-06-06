export default function ({ children }) {
    return (
        <div className="flex flex-col p-4">
            <h2 className=" text-blue-950 text-3xl " >All users</h2>
            {children}
        </div>
    )
}