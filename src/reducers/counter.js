const counterReducer = (count = 0, action) => {
  switch (action.type) {
  case 'POST_COUNTER_INCREMENT':
    return count;
  case 'POST_COUNTER_INCREMENT_SUCCESS':
    return count + 1;
  case 'POST_COUNTER_DECREMENT':
    return count;
  case 'POST_COUNTER_DECREMENT_SUCCESS':
    return count - 1;
  default:
    return count;
  }
};

export default counterReducer;
  