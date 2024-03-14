import fs from 'fs'
import { join } from 'path'

export const read = path => JSON.parse(fs.readFileSync(join(process.cwd(), 'src', 'model', path)))
export const write = (path, data) => {
    fs.writeFileSync(join(process.cwd(), 'src', 'model', path), JSON.stringify(data, null, 4))
    return true
}
