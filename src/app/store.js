import { configureStore } from '@reduxjs/toolkit';
import presurveyReducer from '../features/presurvey/presurveySlice';

export default configureStore({
  reducer: {
    presurvey: presurveyReducer,
  },
});
