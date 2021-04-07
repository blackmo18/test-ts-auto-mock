import { expect } from "chai"
import { createMock } from "ts-auto-mock"
import Person from '../../Model/Person'

const TestPerson = () => describe('t-1', () => {
    let person =  createMock<Person>()
    console.log('person', person)
    it('ok', () => {
        expect('ok').to.be.equal('ok')
    })
})

describe('person', ()=> {
    TestPerson()
})