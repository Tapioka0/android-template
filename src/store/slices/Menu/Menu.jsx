import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "Menu",

  initialState: {
    background:
      "https://cdn.discordapp.com/attachments/804448060397584394/988611574539386980/1655773760631.jpg",

    gallery: [
      "https://cdn.discordapp.com/attachments/804448060397584394/987062321119629403/unknown.png",
      "https://cdn.discordapp.com/attachments/804448060397584394/983879011811880960/unknown.png",
      "https://cdn.discordapp.com/attachments/804448060397584394/953495308116041808/unknown.png",
      "https://cdn.discordapp.com/attachments/766865127512604706/909477260317327411/20211113_100407.jpg",
      "https://cdn.discordapp.com/attachments/770174913750630424/830197526383558717/ab67616d00001e022846ed7682c027ff00c535a4.jpeg",
      "https://cdn.discordapp.com/attachments/865397657379405844/967937241169141770/unknown.png",
      "https://pbs.twimg.com/media/FMl32YQUUAEvkca.jpg",
      "https://cdn.discordapp.com/attachments/865397657379405844/969795801851260968/unknown.png",
      "https://cdn.discordapp.com/attachments/865397657379405844/967938069313491044/unknown.png",
      "https://cdn.discordapp.com/attachments/804448060397584394/987508797847269427/20220615_130707.jpg",
      "https://cdn.discordapp.com/attachments/804448060397584394/987508848782880778/Screenshot_2022-06-14-00-17-11-460_com.vanced.android.youtube.jpg",
      "https://cdn.discordapp.com/attachments/804448060397584394/987508881351655424/Screenshot_2022-06-10-08-14-27-485_com.vanced.android.youtube.jpg",
    ],
  },
  reducers: {
    setBackground: (state, action) => {
      state.background = action.payload;
    },

    setTest: (state, action) => {
      state.test = action.payload;
    },
  },
});

export default menuSlice.reducer;
export const { setBackground, setTest } = menuSlice.actions;

export const changeBackground = (background) => async (dispatch) => {
  dispatch(setBackground(background));
};

export const test = () => (dispatch) => {
  dispatch(setTest(true));
};
