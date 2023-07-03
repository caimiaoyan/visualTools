import cl from 'classnames';

function Grid({
  cols,
  ...other
}: {
  cols: number;
}) {
  return (
    <div
      {...other}
      className={cl('grid grid-container', {
        [`grid-cols-${cols}`]: cols,
      })}
    />
  );
}

function GridCol(props: any){
  return (
    <div {...props} className={cl('grid-container grid-cols-1',{
      [props.className]:props.className
    })}/>

  )
}

const previewFields = {
  Grid,
  GridCol
};

export default previewFields;
