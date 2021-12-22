import {parseSchema} from '../src/schema'
import * as path from 'path'
import {expect} from '@jest/globals'

describe('Generate schema.graphql', () => {
  it('reads and parses an introspection schema', async () => {
    const input = path.join(__dirname, '.', 'schema.json')
    expect(await parseSchema(input)).toContain('type Query')
  })
})
