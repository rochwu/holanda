export enum Type {
  Numeric = 'Numeric',
  Op = 'Op',
  Backspace = 'Backspace',
  End = 'End',
}

export enum OpType {
  Divide = 'Divide',
  Multiply = 'Multiply',
  Subtract = 'Subtract',
  Add = 'Add',
  Dot = 'Dot',
}

export declare namespace Token {
  type Dot = {
    type: Type.Op;
    op: OpType.Dot;
  };

  type Op =
    | {
        type: Type.Op;
        op: OpType;
      }
    | Dot;

  type Zero = {
    type: Type.Numeric;
    value: 0;
  };

  type Numeric =
    | {
        type: Type.Numeric;
        value: number;
      }
    | Zero;

  type End = {
    type: Type.End;
  };

  type Any = Op | Numeric | End;
}
