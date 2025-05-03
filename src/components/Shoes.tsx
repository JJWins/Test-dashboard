import { useState } from "react";
import Card from "./Card";
import shoe1 from "../assets/shoe1.png";
import shoe2 from "../assets/shoe2.png";
import shoe3 from "../assets/shoe3.png";

const Shoes = () => {

    // Sample shoe type data
    const [types] = useState([
        { id: 1, name: "Sneakers", count: "06" },
        { id: 2, name: "Sandals", count: "03" },
        { id: 3, name: "Boots", count: "02" },
    ]);

    // Sample shoe data
    const [shoes] = useState([
        { id: 1, name: "Puma BLack Bun PumaSmashVulc Sneakers", type: "Men Crater Puma Sneakers", price: 5467, description: `This is PUMA.
            PUMA has associations with some of the most elite athletes, such as sprint legend Usain Bolt, star striker Antoine Griezmann, Indian Cricket Captain Virat Kohli, fashion icons like Cara Delevingne, Selena Gomez, and many more.`, rating: 4, ratingCount: 115, image: shoe1, bestSeller: true},
        { id: 2, name: "Adidas neo Men's Vs Set Sneakers", type: "Men Crater Puma Sneakers", price: 4537, description: `This is Adidas.
            As one of the world’s leading sports brands, Adidas believes in standing on the same playing field as the fastest athletes on the planet. With a mission of Forever Faster, PUMA shares excitement in Teamsports, innovates Golf, brings style into Running . Adidas has associations with some of the most elite athletes, such as sprint legend Usain Bolt and many more.`, rating: 4, ratingCount: 115, image: shoe2, bestSeller: true},
        { id: 3, name: "Adidas neo Men's Vs Set Sneakers", type: "Men Crater Puma Sneakers", price: 5736, description: `This is PUMA.
            PUMA has associations with some of the most elite athletes, such as sprint legend Usain Bolt, star striker Antoine Griezmann, Indian Cricket Captain Virat Kohli, fashion icons like Cara Delevingne, Selena Gomez, and many more.`, rating: 4, ratingCount: 115, image: shoe3}
        ]);

    const [selectedType, setSelectedType] = useState(0);

    return (
        <div>
            <span className="section-header mb-3 d-flex flex-row align-items-center">
                Shoes 
                <button className="btn btn-outline ms-auto d-block d-md-none mb-2" 
                    aria-label="View all shoes" title="View all shoes"
                >View all</button>
            </span>
            {/* Shoe type filter links */}
            <div className="shoe-types d-flex flex-row align-items-center" 
                aria-label="Shoe types" title="Shoe types">
                {types.map((type, i) => (
                        <p className={`pointer me-2 ${i === selectedType ? 'active-type' : ''}`} 
                            key={type.id} onClick={() => setSelectedType(i)} 
                            aria-label={`Filter by ${type.name}`} title={`Filter by ${type.name}`}
                            role="button" tabIndex={0}
                        >
                            {type.name} <span className={`count me-3 ${i === selectedType ? 'active-count' : ''}`}>{type.count}</span>
                        </p>
                ))}
                <button className="btn btn-outline ms-auto d-none d-md-block">View all</button>
            </div>
            {/* Shoe cards */}
            <div className="row mt-3">
                {shoes.map((shoe) => (
                    <div className="col-lg-4 col-md-6 col-12 mb-4">
                        <Card key={shoe.id} shoe={shoe} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shoes;
