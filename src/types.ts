export enum Type {
  Number = 'Number',
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
    type: Type.Number;
    value: 0;
  };

  type Number =
    | {
        type: Type.Number;
        value: number;
      }
    | Zero;

  type End = {
    type: Type.End;
  };

  type Any = Op | Number | End;
}
