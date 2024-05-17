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