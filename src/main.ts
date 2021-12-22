import * as core from '@actions/core'
import {convertSchema} from './schema'

async function run(): Promise<void> {
  try {
    const schema: string = core.getInput('schema')
    await convertSchema(schema)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
