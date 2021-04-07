import { expect } from "chai"
import { Address } from "node:cluster"
import { createMock } from 'ts-auto-mock'

const TestAddress = () => describe('t-1', () => {
    let address =  createMock<Address>()
    console.log('address', address)
    it('ok', () => {
        expect('ok').to.be.equal('ok')
    })
})

const TestPerson = () => describe('t-person-1', () => {
    it('ok', () => {
        expect('ok').to.be.equal('ok')
    })
})

describe('address', ()=> {
    TestAddress()
    TestPerson()
})