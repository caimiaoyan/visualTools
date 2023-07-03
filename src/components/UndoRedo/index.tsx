import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ReactElement } from 'react';
import { Button } from 'antd';
import { RollbackOutlined, RedoOutlined } from '@ant-design/icons';
import { ActionCreators } from "redux-undo";

interface Props {}

export default function UndoRedo({}: Props): ReactElement {

  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.codeTree);

  return (
    <>
      <Button
        type="text"
        onClick={() => dispatch(ActionCreators.undo())}
        disabled={Boolean(!state.past.length)}
      >
        <RollbackOutlined />撤销
      </Button>
      <Button
        type="text"
        onClick={() => dispatch(ActionCreators.redo())}
        disabled={Boolean(!state.future.length)}
      >
        <RedoOutlined />重做
      </Button>
    </>
  );
}
