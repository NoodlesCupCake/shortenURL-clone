import { STRENGTHS } from "../../utils/data";
import './cards.css'

function Cards() {
    return (
      <section id="cards">
        {STRENGTHS.map((item, index)=> (
        <div className="a-card" key={item.title} id={index}>
            <img src={item.image} alt={item.title}/>
            <h3 id="item-title">{item.title}</h3>
            <p id="item-description">{item.description}</p>
        </div>
        ))}
      </section>
    )
  }
  
  export default Cards