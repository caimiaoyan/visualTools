
import Header from './../components/Header';
import Left from './../components/Left';
import Right from './../components/Right';
import Canvas from './../components/Canvas';
import UndoRedo from './../components/UndoRedo';
import ClearBtn from './../components/ClearBtn';
import PageInfo from './../components/PageInfo';
import SaveBtn from './../components/SaveBtn';
import Preview from './../components/Preview';
import Publish from './../components/Publish';
import ShowCodeBtn from './../components/ShowCodeBtn';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Provider } from 'react-redux';
import store from '../app/store';

function Editor() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Provider store={store}>
        <div className="h-screen flex flex-col">
          <Header>
            <>
              <UndoRedo />
              <ClearBtn />
              <PageInfo />
              <Preview />
              <ShowCodeBtn />
              <SaveBtn />
              <Publish />
            </>
          </Header>
          <main className="flex-1 overflow-hidden flex">
            <Left />
            <Canvas mobile={false} />
            <Right />
          </main>
        </div>
      </Provider>
    </DndProvider>
  );
}
export default Editor;
