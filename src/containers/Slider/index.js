import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  // initializes index state to track the current slide
  const [index, setIndex] = useState(0);
  // calculates the total number of slides
  const slides = data?.focus.length;

  const nextCard = () => {
    setTimeout(() => {
      setIndex((prevIndex) => (prevIndex < slides - 1 ? prevIndex + 1 : 0));
    }, 8000);
  };

    // effect to trigger nextCard on mount and when index or slides change
  useEffect(() => {
    nextCard();
  }, [index, slides]);

    // sort events by date in descending order
  const sortedEvents = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? 1 : -1
  );


  return (
    <div className="SlideCardList">
      {sortedEvents?.map((event, idx) => (
        <div
          key={event.title}
          className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}
        >
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {sortedEvents?.map((event, radioIdx) => (
            <input
            // uses the event title as the key for each input, ensuring a unique key for each item in the list
              key={event.title}
              type="radio"
              name="radio-button"
              // checks if the event index matches the current index of the slide
              checked={index === radioIdx}
              readOnly
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
