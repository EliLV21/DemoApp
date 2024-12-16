interface Type {
  isDraggin: boolean;
  isDraggable: boolean;
  isBacklog: boolean;
}

export const backgroundChange = (type: Type): string => {
  return type.isDraggin
    ? 'lightgreen '
    : type.isDraggable
    ? type.isBacklog
      ? 'F2D7D5'
      : 'DCDCDC'
    : type.isBacklog
    ? 'F2D7D5'
    : 'fffada';
};
