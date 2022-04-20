import { stringify } from "querystring";

// Namespace - пространство имён

namespace Utils {
  export const secret: string = "12345";
  const PI: number = 3.14;

  export const getPass = (name: string, age: number): string => `${name}${age}`;
  // export const isEmpty = <T>(data: T): boolean => !data; выдаёт ошибку
}

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

  let user: { name: string; age: number } = {
    name: "Evgen",
    age: 30,
  };

  type Person = {
    name: string;
    age: number;
    nickName?: string;
    getName?: () => string;
  };

  // ------ User types ------
  type Name = string;
  const a: Name = "Evgeniy";

  // ------ Functions ------
  const createPass = (name: string = "Evgen", age?: number | string): string =>
    `${name}${age}`;

  // *** тип Объединение - когда переменная может иметь несколько типов,
  // которые записаны через вертикальную черту

  const mySkills = (name: string, ...skills: Array<string>): string =>
    `${name}, my skills are ${skills.join()}`;
  console.log(mySkills("Kirill", "React", "Redux"));

  //Describe function type. If we need to assign a function value to a variable

  let myFunc: (argument: string) => void;

  function oldFunc(name: string): void {
    console.log(name);
  }

  myFunc = oldFunc;

  // ------ Classes ------

  class User {
    // name: string;
    // age: number = 20;
    // nickName: string;
    static secretKey: number = 12345;

    constructor(
      public name: string, // сокращённая запись
      public age: number,
      public nickName: string
    ) {
      // this.name = name;
      // this.age = age;
      // this.nickName = nickName;
    }
  }

  const evgen = new User("Evgen", 30, "evgen-frontend-rostov");
  const dimon = new User("Dimon", 26, "cheeff");

  // Access modifiers: public(default), private, protected, readonly
  // private - свойства и методы не доступны за пределами класса
  // protected - свойства и методы доступны только у наследников класса, т.е. у классов, расширенных от родительского
  // readonly - свойства и методы доступны только для чтения
  class Developer {
    private age: number = 30;

    constructor(public name: string) {}

    setAge(age: number) {
      this.age = age;
    }
  }

  const evgeniy = new Developer("Evgeniy");
  console.log(evgeniy);
  evgeniy.setAge(25);
  console.log(evgeniy);

  // Inheritance - наследование

  class Inherit {
    private nickName: string = "evgen_frontend";
    static secret = 12345;

    constructor(public name: string, public age: number) {}

    getPass(): string {
      return `${this.name}${Inherit.secret}`;
    }
  }

  const inher = new Inherit("Evgeniy", 30);
  console.log(inher);

  class Heir extends Inherit {
    name: string = "Anatoliy";
    // constructor(age: number) {
    //   // super(name, age);
    // }
  }

  // const userDev = new Heir(32);

  return <></>;
};
