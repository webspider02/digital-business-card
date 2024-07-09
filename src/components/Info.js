import georgeImg from "../images/george-zabakikas.jpg";

export default function Info() {
    return (
        <section className="info">
            <div className="image">
                <img src={georgeImg} alt="George Zabakikas"/>
            </div>

            <h2>George Zabakikas</h2>
            <h3>Fullstack Developer</h3>

            <button>Email</button>
            <button>LinkedIn</button> 
        </section>
    );
}