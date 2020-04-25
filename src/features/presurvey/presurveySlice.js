import { createSlice } from '@reduxjs/toolkit';

const presurvey = createSlice({
  name: 'presurvey',
  initialState: {
    current: 0,
    agreed: [],
    disagreed: [],
    cards: [
      {id: 1, eng: 'I don\'t want to go into debt', esp: 'No quiero endeudarme'},
      {id: 2, eng: 'Have to help my family first', esp: 'Primero tengo que ayudar a mi familia'},
      {id: 3, eng: 'I\'ll never earn enough to make it worth the effort', esp: 'Nunca ganaré lo suficiente para que valga la pena'},
      {id: 4, eng: 'I fail too much', esp: 'Fallo demasiado'},
      {id: 5, eng: 'The bus takes too long', esp: 'El bus tarda demasiado'},
      {id: 6, eng: 'I have to live at home', esp: 'Tengo que vivir con familia'},
      {id: 7, eng: 'No one will make me do my homework', esp: 'Nadie me hará hacer mi tarea'},
    ]
  },
  reducers: {
    nextQuestion: state => {
      if (state.current < state.cards.length-1) {
        state.current++;
      };
    },
    agreeWithQuestion: (state, action) => {
      state.agreed.push(action.payload);
      presurvey.caseReducers.nextQuestion(state);
    },
    disagreeWithQuestion: (state, action) => {
      state.disagreed.push(action.payload);
      presurvey.caseReducers.nextQuestion(state);
    },
  }
});

export const {
  nextQuestion,
  agreeWithQuestion,
  disagreeWithQuestion
} = presurvey.actions;

export default presurvey.reducer;