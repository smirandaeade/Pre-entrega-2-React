
const Categories = ({activeMenu, setActiveCategory}) => {

    const handleActiveCategory = (categoria) => {
        setActiveCategory([categoria, activeMenu])
    }

    return (
        <div className="flex w-full justify-evenly h-20 border-b-2">
            <button onClick={() => handleActiveCategory("consolas")} className=" hover:bg-slate-400 h-10 w-28 rounded-full my-auto bg-slate-300">Consolas</button>
            <button onClick={() => handleActiveCategory("juegos")} className=" hover:bg-slate-400 h-10 w-28 rounded-full my-auto bg-slate-300">Juegos</button>
            <button onClick={() => handleActiveCategory("accesorios")} className=" hover:bg-slate-400 h-10 w-28 rounded-full my-auto bg-slate-300">Accesorios</button>
        </div>
    )
}

export default Categories