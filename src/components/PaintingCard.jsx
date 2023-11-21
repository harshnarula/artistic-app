import { painting_card } from "../static/data";
import '../css/paintingcard.css';

export default function PaintingCard() {
  return (
    <div className="painting_card">
      {painting_card.map((card) => (
        <div className="paint_card" key={card.id}>
          <div className="paint_cards_alignment">
            <img className="card_img" src={`../public/images/painting/${card.paint}`} />
            <p className="card_name">{card.name}</p>

            <div className="prices_ratings">
              <p className="prices">{card.price}</p>
              <div className="ratings">
                {Array(card.rating).fill(1).map((_, index) => (
                  <img key={index} src={`../public/images/icons/star.svg`} alt={`Star ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
