import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getDogById, cleanDetail } from "../redux/actions";

const Detail = () => {
  const { detailId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(cleanDetail()); //Limpiar el componente antes de montarlo
    dispatch(getDogById(detailId));
  }, [dispatch, detailId]);

  const dog = useSelector((state) => state.dog);
  const handleBack = () => {
    history.goBack();
  };
  return (
    <div>
      <div>
        <div>
          <h1>DETAILS</h1>
          <h2>BREED: {dog.name}</h2>
          <h2>HEIGHT: {dog.height}</h2>
          <h2>WEIGHT: {dog.weight}</h2>
          <h2>LIFE SPAN: {dog.life_span}</h2>
          <h2>TEMPERAMENT: {dog.temperament}</h2>
        </div>
        <div>
          <img src={dog.image} alt="" />
        </div>
      </div>
      <div>
        <button onClick={handleBack}>back</button>
      </div>
    </div>
  );
};

export default Detail;
