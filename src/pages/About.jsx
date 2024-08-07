import Navigation from "../components/Navigation";

const About = () => {
    return ( 
        <section className="w-full h-screen bg-black relative text-white overflow-x-hidden">
            <div className="fixed -top-40 -right-20 w-[300px] h-[300px] rounded-full bg-white shadow-xl shadow-white"></div>
            <div className="fixed -bottom-40 -left-20 w-[300px] h-[300px] rounded-full bg-white shadow-xl shadow-white"></div>
            <div className="absolute top-0 left-0 h-full w-full bg-black/70 backdrop-blur-md z-10">
                <Navigation />
            </div>
        </section>
     );
}
 
export default About;