import { createSlice } from '@reduxjs/toolkit';

const presurvey = createSlice({
  name: 'presurvey',
  initialState: {
    current: 0,
    agreed: [],
    disagreed: [],
    cards: [
      {id: 1, eng: 'I don\'t mind sitting at my desk for long periods of time.', esp: 'No me molesta sentarme en mi escritorio por largos períodos de tiempo.'},
      {id: 2, eng: 'I want to buy a house one day.', esp: 'Quiero comprar una casa algún día.'},
      {id: 3, eng: 'I want to graduate debt free from college.', esp: 'Quiero graduarme libre de deudas de la universidad.'},
      {id: 4, eng: 'I want to start working within a year after graduating high school.', esp: 'Quiero comenzar a trabajar dentro de un año después de graduarme de la escuela secundaria.'},
      {id: 5, eng: 'I don’t see myself being a doctor, but I want to work in an office with doctors.', esp: 'No me veo como médico, pero quiero trabajar en un consultorio con médicos.'},
      {id: 6, eng: 'I enjoy solving puzzles.', esp: 'Disfruto resolviendo acertijos.'},
      {id: 7, eng: 'I see myself joining a student club or organization.', esp: 'Me veo uniéndome a un club u organización estudiantil.'},
      {id: 8, eng: 'I enjoy using my hands to fix things.', esp: 'Disfruto usando mis manos para arreglar cosas.'},
      {id: 9, eng: 'I see myself as a leader (I enjoy leading a team).', esp: 'Me veo como un líder (disfruto liderando un equipo).'},
      {id: 10, eng: 'I prefer to work alone.', esp: 'Prefiero trabajar solo.'},
      {id: 11, eng: 'I like working with numbers.', esp: 'Me gusta trabajar con números.'},
      {id: 12, eng: 'I’m willing to get a 4-year degree if it helps me make a lot of  money.', esp: 'Estoy dispuesto a obtener un título de 4 años si me ayuda a ganar mucho dinero.'},
      {id: 13, eng: 'I am comfortable making around $30,000 per year.', esp: 'Estoy cómodo haciendo alrededor de $ 30,000 por año.'},
      {id: 14, eng: 'I am comfortable making around $60,000 per year.', esp: 'Estoy cómodo haciendo alrededor de $ 60,000 por año.'},
      {id: 15, eng: 'I am comfortable making around $80,000 per year.', esp: 'Estoy cómodo haciendo alrededor de $ 80,000 por año.'},
      {id: 16, eng: 'I enjoy learning other languages.', esp: 'Disfruto aprendiendo otros idiomas.'},
      {id: 17, eng: 'I enjoy helping others learn a language.', esp: 'Disfruto ayudando a otros a aprender un idioma.'},
      {id: 18, eng: 'I enjoy using technology to solve real world problems.', esp: 'Disfruto usando la tecnología para resolver problemas del mundo real.'}
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