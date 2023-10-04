import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [category, setCategory] = useState([]);

    useEffect(() =>{
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    }, [])

    return (
        <div className="p-4">
            <h2 className="text-3xl font-bold mb-6">All Category: {category.length}</h2>
            {
                category.map(news => <Link 
                    className="block mb-4 font-semibold text-xl  text-left pl-6" 
                    key={news.id}>{news.name}</Link>)
            }
            </div>

       
    );
};

export default LeftSideNav;