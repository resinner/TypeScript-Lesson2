let age:number;
age = 50;

let anyname:string;
anyname = 'Max';

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

let callback = (a: number): number => { return 100 + a };


//================================================================
let anything: any;
anything = -20;
anything = "Text";
anything = {};


//================================================================
let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
    str = some;
}


//================================================================
let person: [string, number];

person = ["Max", 21];


//================================================================
enum IsLoad {
  LOADING,
  READY,
}

const page = {
  load: IsLoad.READY,
};

if (page.load === IsLoad.LOADING) {
  console.log("Сторінка завантажується");
}
if (page.load === IsLoad.READY) {
  console.log("Сторінка завантажена");
}


//================================================================
let union: string | number;

union = "Some text";
union = 7;


//================================================================
let literal: "enable" | "disable";

literal = "disable";


//================================================================
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}


//================================================================
type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};


const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};