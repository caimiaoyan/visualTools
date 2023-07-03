import Header from './../components/Header';
import EditBtn from './../components/EditBtn';

function Editor() {
  return (
    <div className="h-screen flex flex-col">
      <Header>
        <EditBtn />
      </Header>
      <main className="flex-1 overflow-hidden flex">
        <iframe src="https://www.sekorm.com/" width='100%' />
      </main>
    </div>
  );
}
export default Editor;
