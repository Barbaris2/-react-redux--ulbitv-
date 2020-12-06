import { addCustomersAction } from '../store/customerReducer';

export const fetchCustomers = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => dispatch(addCustomersAction(json)));
  };
};

/**
  redux-thunl это middleware, который позволяет внутри стороних функций использовать dipatch. Для работы с ассинхронными действиями в Redux
 */
