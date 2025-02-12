import "./CardsH.css"

function CardsH(image){







    return (
        <>
          <div className="flex justify-center items-center min-h-screen" >
            <div className="grid grid-cols-2 gap-x-16 gap-y-24 mt-30" style={{ paddingBottom: "70px" }}>
                {{image}.map((carte, i) => (
                    <div className="cards w-240px h-80 flex items-center justify-center" key={i}>
                        <figure className="card" >{carte.results.urls.full}</figure>
                    </div>
                ))}
            </div>
          </div>
        </>
    );
}

export default CardsH;