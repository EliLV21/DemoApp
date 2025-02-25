import { useCallback } from 'react';
import { NavBar } from '../../shared/nav/nav';
import { DragDropContext, DraggableLocation, Droppable, DropResult } from 'react-beautiful-dnd';
import { useBoard } from '@/context/board-context/BoardContext';
import { Column } from '../../shared/column/column';

export const BoardPage = () => {
  const boardContext = useBoard();
  if (!boardContext) {
    return <div>Error: Board context is not available</div>;
  }
  const { boardState, dispatch } = boardContext;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        return;
      }
      const source: DraggableLocation = result.source;
      const destination: DraggableLocation = result.destination;
      if (result.type === 'COLUMN') {
        dispatch({ type: 'MOVE_COLUMN', payload: { source, destination } });
        return;
      }

      if (result.type === 'TASK') {
        dispatch({ type: 'MOVE_TASK', payload: { source, destination } });
        return;
      }
    },
    [dispatch]
  );

  return (
    <>
      <div className="container p-8">
        <NavBar />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="board" direction="horizontal" isDropDisabled={false} type="COLUMN">
            {provided => (
              <ul
                className={`p-[1.25rem] grid-cols-${Object.keys(boardState.ordered).length} gap-${
                  Object.keys(boardState.ordered).length
                } w-full inline-flex`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {boardState &&
                  boardState.ordered.map((key, index) => {
                    return <Column key={key} index={index} listTitle={key} listTasks={boardState.columns[key]} />;
                  })}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
};
