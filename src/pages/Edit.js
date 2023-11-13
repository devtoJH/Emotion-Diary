import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Button from "../component/Button";
import Header from "../component/Header";

const Edit = () => {
  const {id} = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>
  } else {
    return (
      <div>
        <Header
          title={"일기 수정하기"}
          leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
          rightChild={<Button type={"nagative"} text={"삭제하기"} />}
        />
      </div>
    );
  }
};

export default Edit;