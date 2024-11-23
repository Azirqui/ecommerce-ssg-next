import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getPostData() {
    const filePath = path.join(process.cwd(), 'posts', 'products.md');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return data; // Return only the parsed data from the Markdown file
}
