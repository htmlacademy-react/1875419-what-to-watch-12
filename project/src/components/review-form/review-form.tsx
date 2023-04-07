import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { addReviewAction } from '../../store/api-actions';
import { NewReview } from '../../types/reviews';

type EventProps = {
    target: {
        name: string;
        value: string;
    };
}

function ReviewForm(): JSX.Element {
  const choosedFilm = useAppSelector((state) => state.choosedFilm);


  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    'rating': '',
    'review-text': ''
  });

  const fieldChangeHandler = (evt: EventProps): void => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const onSubmit = (reviewData: NewReview) => {
    dispatch(addReviewAction(reviewData));
    navigate(`/films/${choosedFilm?.id as number}`);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      comment: formData['review-text'],
      rating: Number(formData.rating),
    });
  };

  return(

    <form
      action="#"
      className="add-review__form"
      onSubmit={handleSubmit}
    >
      <div className="rating" aria-required>
        <div className="rating__stars" aria-required>
          <input onChange={fieldChangeHandler} className="rating__input" id="star-10" type="radio" name="rating" value="10"/>
          <label className="rating__label" htmlFor="star-10">Rating 10</label>

          <input onChange={fieldChangeHandler} className="rating__input" id="star-9" type="radio" name="rating" value="9" />
          <label className="rating__label" htmlFor="star-9">Rating 9</label>

          <input onChange={fieldChangeHandler} className="rating__input" id="star-8" type="radio" name="rating" value="8" />
          <label className="rating__label" htmlFor="star-8">Rating 8</label>

          <input onChange={fieldChangeHandler} className="rating__input" id="star-7" type="radio" name="rating" value="7" />
          <label className="rating__label" htmlFor="star-7">Rating 7</label>

          <input onChange={fieldChangeHandler} className="rating__input" id="star-6" type="radio" name="rating" value="6" />
          <label className="rating__label" htmlFor="star-6">Rating 6</label>

          <input onChange={fieldChangeHandler} className="rating__input" id="star-5" type="radio" name="rating" value="5" />
          <label className="rating__label" htmlFor="star-5">Rating 5</label>

          <input onChange={fieldChangeHandler} className="rating__input" id="star-4" type="radio" name="rating" value="4" />
          <label className="rating__label" htmlFor="star-4">Rating 4</label>

          <input onChange={fieldChangeHandler} className="rating__input" id="star-3" type="radio" name="rating" value="3" />
          <label className="rating__label" htmlFor="star-3">Rating 3</label>

          <input onChange={fieldChangeHandler} className="rating__input" id="star-2" type="radio" name="rating" value="2" />
          <label className="rating__label" htmlFor="star-2">Rating 2</label>

          <input onChange={fieldChangeHandler} className="rating__input" id="star-1" type="radio" name="rating" value="1" />
          <label className="rating__label" htmlFor="star-1">Rating 1</label>
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          onChange={fieldChangeHandler}
          className="add-review__textarea"
          name="review-text" id="review-text"
          placeholder="Review text"
          minLength={50} maxLength={400}
          required
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>
  );
}

export default ReviewForm;
