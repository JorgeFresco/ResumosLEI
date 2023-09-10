import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const yearsDirectory = join(process.cwd(), '_years')

export function getYearSlugs() {
    return fs.readdirSync(yearsDirectory)
}
export function getYearBySlug(slug: string, fields: string[] = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const fullPath = join(yearsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    type Items = {
        [key: string]: string
    }


    const items: Items = {}
    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
        if (field === 'slug') {
            items[field] = realSlug
        }
        if (field === 'content') {
            items[field] = content
        }

        if (typeof data[field] !== 'undefined') {
            items[field] = data[field]
        }
    })
    console.log(items)
    return items
}

export function getAllYears(fields: string[] = []) {
    const slugs = getYearSlugs();
    const years = slugs
        .map((slug) => getYearBySlug(slug, fields))
    return years
}