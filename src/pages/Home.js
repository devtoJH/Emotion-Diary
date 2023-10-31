import Button from "../component/Button";
import Editor from "../component/Editor";
import Header from "../component/Header";

const Home = () => {
  return (
    <div>
      <Editor 
        initData={{
          date: new Date().getTime(),
          emotionId:1,
          content: "이전에 작성했던 일기",
        }}
        onSubmit={() => alert("작성 완료!")}
      />
    </div>
  );
};

export default Home;