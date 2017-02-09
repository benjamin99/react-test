
import { Dispatcher } from 'flux';

class AppDispatcher extends Dispatcher {
  handleAction(action) {
    this.dispatch({
      type: action.type,
      payload: action.payload,
    });
  }
}

const dispatcher = new AppDispatcher();
export default dispatcher;
