import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className='m-5 p-3 bg-base-200 w-full flex'>
            <button className="btn btn-warning">Breaking News !</button>
            <Marquee pauseOnHover = {true}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default BreakingNews;