import { useState } from "react";
import { FormMemrise } from "../../styles/Memrise/MemriseStyles";
import { BackBottom } from "../../components/BottomBack/BackBottom";
import { useDispatch, useSelector } from "react-redux";
import { sendAlert } from "../../store/slices/Error/ErrorAlert";
import { Error } from "../../components/Error/Error";
import { add } from "../../store/slices/Cards/Cards";
export const Memrise = () => {
  const dispatch = useDispatch();
  const [data, setdata] = useState({
    kanji: "",
    imi: "",
    yomi: "",
    categoria: "",
  });
  const { kanji, imi, yomi, categoria } = data;
  const setInfo = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const errors = useSelector((state) => state.error);
  const { error, msg } = errors;
  const sumit = (e) => {
    e.preventDefault();

    if (
      kanji.trim() === "" ||
      imi.trim() === "" ||
      yomi.trim() === "" ||
      categoria.trim() === ""
    )
      return dispatch(sendAlert("Complete todo"));

    dispatch(add(data));
  };
  return (
    <FormMemrise onSubmit={sumit}>
      {error ? <Error msg={msg} /> : null}
      <select className="form-control" name="categoria" onChange={setInfo}>
        <option value="">-- Selecciona -- </option>
        <option value="アニメ">-- アニメ -- </option>
        <option value="ゲーム">-- ゲーム -- </option>
        <option value="小説/漫画">-- 小説/漫画 -- </option>
        <option value="ランダム">-- ランダム -- </option>
        <option value="kanjisSolitos">-- Kanjis Solitos -- </option>
      </select>

      <label>漢字</label>
      <input type="text" onChange={setInfo} value={kanji} name="kanji" />

      <label>意味</label>
      <input type="text" onChange={setInfo} value={imi} name="imi" />

      <label>読み方</label>
      <input type="text" onChange={setInfo} value={yomi} name="yomi" />

      <div className="buton">
        <button type="submit">保存して続行</button>
      </div>
      <BackBottom />
    </FormMemrise>
  );
};
