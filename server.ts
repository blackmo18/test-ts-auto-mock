import dotenv from 'dotenv'
import Address from './Model/Address'
import Person from './Model/Person'
dotenv.config()

const address: Address = {    
  street: 'street',
  block: '2a',
  building: 'B',
  country: 'never-land',
  state: 'x',
  unit: '1'
}
const person: Person =  {
  firstName: 'first',
  middleName: 'middle',
  lastName: 'lastname',
  address: address 
}

console.log('person', person)