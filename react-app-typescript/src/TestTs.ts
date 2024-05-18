import internal from "stream";

interface AddressDetails {
    address1: string;
    address2: string;
    state: string;
}

interface AddressDetails2 {
    name?: string;
    address?: string;
    country?: string;
}


interface UeserDataModel {
    name?: string;
    lname: string;
    role: string;
    mobile: number,
    addressDetails: AddressDetails
}

type NumberStringType = number | string;
type MultiOption = AddressDetails | AddressDetails2;

export function MyFun(){
    let a = 10;
    let b:number = 20;
    let c:number | string = 20;
    //b = '20';
    c = 30
    c = 'sagsa'

    let name: string;
    name = 'John Doe';

    let isVal: boolean = false;

    const obj: UeserDataModel = {
        //name: 'bhagath',
        lname: 'singh',
        role: 'job',
        mobile: 1234567890,
        addressDetails: {
            address1: 'Hyderab',
            address2: 'LB Nagar',
            state: 'ts'
        }
    }

    // const obj2:UeserDataModel.addressDetails  = obj.addressDetails;
    const obj2:AddressDetails  = obj.addressDetails;

    const arr: number[] = [1,2,3,4,5];
    const arr1: string[] = ['a','gsg','sag'];
    const arr2: UeserDataModel[] = [
        {
            //name: 'bhagath',
            lname: 'singh',
            role: 'job',
            mobile: 1234567890,
            addressDetails: {
                address1: 'Hyderab',
                address2: 'LB Nagar',
                state: 'ts'
            }
        }
    ];
   // arr2[0].
   
   const arr3: [string, number] = ['test', 10]
   const arr4: 'name' | 'age' | 'gender' = 'gender';
   const statsu: 'active' | 'inactive' | 'pending' | 'completed' = 'inactive';
   const arr5: NumberStringType[] = ['sgg',90];

   const mm: MultiOption = {
    address: '',
    address2: '',
    state: '',
   };

   getRes(10, 20);
}

function getRes(aVal: number, bVal: number): number {
    return aVal + bVal;
}

function getRes2(aVal: number, bVal: number): void {
    let t = aVal + bVal;
    console.log(t)
}

function forEach(arr: any[], forEachFun: Function): void {
   
}
function forEach2(arr: any[], forEachFun: (ele: any, index: number, a: any[]) => void): void {
    for(let i=0; i<arr.length; i++) {
        forEachFun(arr[i], i, arr);
    }
    
}

// ======= enums ==========

enum Satus {
    Active = 'active',
    InActive = 'inactive',
    Pending = 'pending',
    Completed = 'completed'
};

enum Satus2 {
    Active,
    InActive,
    Pending,
    Completed
};


const status = Satus.Active;

//console.log('@@@ status',status)

// var qb = 10;
// var er = 20;

// (function(x: number, y: number){ // 
//     console.log('@@@ FUNCTION', (x + y))
// })(qb,er);

var Sta;
(function(stat){ // 
    console.log('@@@ FUNCTION', (stat))
})(Sta || (Sta = {}));

var aa = Satus2.InActive;
console.log('@@@ AAA',aa)

var res = 0;

if(res === Satus2.Active) {

}

// ======== Keyvalue pair =======

interface KeyValuePair {
    [key: string]: string | number | boolean | object;
    // name: string;
}

const obj2: KeyValuePair = {
    name: '',
    id: '',
    number: 23,
    details: {
        name: '',
        address: ''
    }
};

const arr2: number[] = [];
const arr3: Array<number> = [3,5,6,7];


interface HttpReponse<T>{
    status: number;
    data: T; 
    // data: {
    //     name: string;
    //     age: number;
    
    // };
    message: string;
}

interface UserData {
    name: string;
    age: number;
}

function getResponse(resp: HttpReponse<UserData>){

}

function getResponse2(resp: HttpReponse<{name: string, id: number}>){
   // resp.data.
}

function getResponse3(resp: HttpReponse<number[]>){
   // resp.data.
  // resp.data
}
// getResponse();

function getResponse4<T>(resp: HttpReponse<T>){
    // resp.data.
   // resp.data
   
 }

 getResponse4<number[]>({
    status: 200,
    data: [1,2,4,5,6,7,8,9],
    message: 'success'
 });

 interface UserDetails {
    name: string;
    age: number;
    address: string;
 }

 interface UserDetails2 {
    role?: string
 }

 interface EmployeDetails extends UserDetails, UserDetails2{
    id: number;
    email: string;
    phone: string;
    // name: string;
    // age: number;
    // address: string;
 }

 const tt: EmployeDetails = {
    address: 'Hyd',
    name: 'Hyd',
    id: 2,
    phone: 'Hyd',
    age: 6,
    email: 'Hyd',
    role: 'Hyd'
 };


 interface MyDataModel {
    name: string;
    age: number;
    address: string;
    phone: string;
    email: string;
 }

 const myData1: Partial<MyDataModel> = {
   name: 'str'
 }

 interface Props {
  a?: number;
  b?: string;
}

const myData2: Props = {
    a: 10,
   // b: 'sag'
}

const myData3: Required<Props> = {
    a: 10,
    b: 'sag'
}

const myData4: Readonly<Props> = {
    a: 10,
    b: 'sag'
}

interface Props2 {
    a: Readonly<number>;
    b?: string;
  }
const myData5: Props2 = {
    a: 10,
    b: 'sag'
}
myData5.b = 'sagsag';
myData5.a = 40;


interface StauValueModel {
    name: string;
    value: number;
}
   
type StatusName = "active" | "inactive" | "completed" | "pending";

const obj5: Record<StatusName, StauValueModel> = {
    active: {
        name: 'active', value: 1
    },
    inactive: {
        name: 'inactive', value: 2
    },
    completed: {
        name: 'completed', value: 3
    },
    pending: {
        name: 'pending', value: 4
    }
}

// obj5.active
 
 





