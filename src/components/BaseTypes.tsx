export const BaseTypes = () => {
  // ------ Boolean ------
  let isAge: boolean = true;
  isAge = false;
  // ------ null, undefined ------
  const n: null = null;
  const u: undefined = undefined;
  // ------ void ------
  const voidFunc = (): void =>
    console.log("Функция ничего не возвращает, поэтому имеет тип void");
  // ------ Array Type ------
  const arr1: number[] = [1, 2, 3, 4, 5];
  const arr2: Array<number> = [1, 2, 3, 4, 5];

  // ------ Tuple Type ------
  const x: [string, number] = ["Evgen", 30];
  let y: [string, number];
  y = ["Maks", 27];

  // ------ Any ------

  const arr3: [any, any] = [true, "string"];
  const arr4: Array<any> = [true, "string", 10, { a: 1, b: 2 }];

  // ------ Enum - перечисления ------

  enum Directions {
    Up,
    Down,
    Left,
    Right,
  }

  // Directions[0]; //Up
  // Directions.Down; //1
  // Directions.Left; //2
  // Directions.Right; //3

  enum links {
    youtube = "https://www.youtube.com/",
    google = "https://www.google.com/",
    yandex = "https://ya.ru/",
  }

  // ------ Never ------ - используется, если функция возвращает ошибку или
  //если функция постоянно выполняется и не заканчивается

  const message = "Error message";
  const error = (msg = message): never => {
    throw new Error(msg);
  };

  const infinityFunc = (): never => {
    while (true) {}
  };

  // ------ Object Type ------
  const create = (o: object | null): void => {};
  create({ obj: 1 });

  // ------ User types ------
  type Name = string;
  const a: Name = "Evgeniy";

  // ------ Functions ------
  const createPass = (name: string = "Evgen", age?: number | string): string =>
    `${name}${age}`;

  const mySkills = (name: string, ...skills: Array<string>): string =>
    `${name}, my skills are ${skills.join()}`;
  console.log(mySkills("Kirill", "React", "Redux"));
  return <></>;
};
