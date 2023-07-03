import { combineReducers } from '@reduxjs/toolkit';
import undoable from 'redux-undo';

import codeTree from './codeTreeSlice';

const rootReducer = combineReducers({
  codeTree: undoable(codeTree),
});

export default rootReducer;
