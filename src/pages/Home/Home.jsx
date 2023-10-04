import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";


const Home = () => {

    const news = useLoaderData();
    console.log(news)
    return (
        <div>
           <div className=" p-5 m-5">
           <Header></Header>
           <BreakingNews></BreakingNews>
            <Navbar></Navbar>
           </div> 

            <div className="grid grid-cols-1 md:grid-cols-4  gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="border md:col-span-2 p-4">
                <h2 className="text-2xl font-bold">Dragon News Home</h2>
                {
                    news.map(newsItem => <NewsCard
                    key={newsItem.id}
                    newsItem={newsItem}
                    ></NewsCard>)
                }
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;