import back from "../../assets/icons/curve-arrow.png";
import { useNavigate } from "react-router";
export const BackBottom = () => {
  const navigate = useNavigate();
  return (
    <div className="imagen">
      <img
        src={back}
        alt="regresar"
        onClick={() => {
          navigate("/home", { replace: true });
        }}
      />
    </div>
  );
};
