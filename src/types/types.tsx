export interface DataFormCard {
  id: number;
  name: string;
  email: string;
  password: string;
  submit: boolean;
}

type Description = string | null;
// export interface SchemaQuery {
//   name: string;
//   description?: Description;
//   args?: Arg[];
//   type?: Type2;
// }

// export interface Arg {
//   name: string;
//   description: Description;
//   type: Type;
//   defaultValue: null;
// }

// export interface Type {
//   name?: string;
//   ofType?: OfType;
// }

// export interface OfType {
//   name: string;
//   ofType: Type2;
// }

// export interface Type2 {
//   name: string;
//   ofType: null;
// }
export interface SchemaData {
  data: SchemaRoot;
}
export interface SchemaRoot {
  __schema: Schema;
}

export interface Schema {
  types: Type[];
}

export interface Type {
  name: string;
  description?: string;
  fields?: SchemaField[];
}

export interface SchemaField {
  name: string;
  description?: string;
  args?: Arg[];
  type?: Type3;
}

export interface Arg {
  name: string;
  description: string | null;
  type: Type2;
}

export interface Type2 {
  kind: 'NON_NULL' | 'SCALAR';
  name?: string;
  ofType?: OfType;
}

export interface OfType {
  kind: 'SCALAR';
  name: string;
  ofType: null;
}

export interface Type3 {
  kind: 'OBJECT' | 'LIST';
  name?: string;
  ofType?: OfType2;
}

export interface OfType2 {
  name?: string;
  ofType?: OfType3;
}

export interface OfType3 {
  name?: string;
  ofType?: OfType4;
}

export interface OfType4 {
  name: string;
  ofType: null;
}
