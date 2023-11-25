 function PageHeader ( {title, tagline}){
    return (
        <header className="px-3 pt-16 text-center">
            <h1 className="text-2xl font-bold md:text-5xl text-slate-900">{title || "Page Title"}</h1>
            <p className="pt-4 text-xl md:text-2xl">{tagline || "Page Tagline"}</p>
        </header>

 
    )
 }



 export {PageHeader}