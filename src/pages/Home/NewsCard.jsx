import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NewsCard = ({ newsItem }) => {

    const { title, image_url, details, _id } = newsItem;

    return (
        <div>
            <div className="card card-compact w-full mb-8 p-4 bg-base-100 shadow-xl">
                <h2 className="card-title">{title}</h2>
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    {
                        details.length > 200
                        ? <p>{details.slice(0, 200)} 
                        <Link to={`/news/${_id}`} className="text-blue-600 font-bold hover:underline block">Read more..</Link></p>
                        : <p>{details}</p>
                    }
                    
                </div>
            </div>
        </div>
    );
};


NewsCard.propTypes = {
    newsItem: PropTypes.object
}
export default NewsCard;