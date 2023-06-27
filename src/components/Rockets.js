import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchdata } from '../Redux/Rockets/rocketSlice';

function Rockets() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);
  return <h1>Rockets Page</h1>;
}

export default Rockets;
