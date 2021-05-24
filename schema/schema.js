import fs from 'fs'
import path from 'path'

const schemaPath = path.join(process.cwd(), 'schema')

const query = fs.readFileSync(`${schemaPath}/job.graphql`, 'utf-8')
const job = fs.readFileSync(`${schemaPath}/query.graphql`, 'utf-8')


export default [query, job] 